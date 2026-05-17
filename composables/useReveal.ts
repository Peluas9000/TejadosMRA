import { onMounted, onBeforeUnmount, nextTick } from 'vue'

/**
 * Activa la clase `is-visible` en elementos con `.reveal`
 * cuando entran en viewport. Animación CSS pura.
 */
export function useReveal(selector = '.reveal'): void {
  let observer: IntersectionObserver | null = null

  onMounted(async () => {
    if (typeof window === 'undefined') return
    await nextTick()
    const elements = document.querySelectorAll<HTMLElement>(selector)

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    elements.forEach((el) => observer!.observe(el))
  })

  onBeforeUnmount(() => observer?.disconnect())
}