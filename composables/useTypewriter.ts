import { ref, onMounted, onBeforeUnmount, type Ref } from 'vue'

interface TypewriterOptions {
  typingSpeed?: number
  deletingSpeed?: number
  holdTime?: number
}

interface TypewriterReturn {
  text: Ref<string>
}

const DEFAULTS: Required<TypewriterOptions> = {
  typingSpeed: 90,
  deletingSpeed: 45,
  holdTime: 1400
}

/**
 * Efecto máquina de escribir reactivo que cicla entre palabras.
 */
export function useTypewriter(words: string[], options: TypewriterOptions = {}): TypewriterReturn {
  const { typingSpeed, deletingSpeed, holdTime } = { ...DEFAULTS, ...options }
  const text = ref<string>('')

  let index = 0
  let sub = 0
  let deleting = false
  let timer: ReturnType<typeof setTimeout> | null = null

  const tick = (): void => {
    if (words.length === 0) return
    const current = words[index % words.length]

    if (!deleting && sub === current.length) {
      timer = setTimeout(() => {
        deleting = true
        tick()
      }, holdTime)
      return
    }
    if (deleting && sub === 0) {
      deleting = false
      index++
      tick()
      return
    }

    sub += deleting ? -1 : 1
    text.value = current.substring(0, sub)
    timer = setTimeout(tick, deleting ? deletingSpeed : typingSpeed)
  }

  onMounted(() => tick())
  onBeforeUnmount(() => {
    if (timer) clearTimeout(timer)
  })

  return { text }
}