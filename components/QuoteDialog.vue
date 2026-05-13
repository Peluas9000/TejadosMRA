<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import type { QuoteForm, ToastKind } from '~/types'
import { CONTACT, ZONES } from '~/data/content'

interface Props {
  open: boolean
}
interface Emits {
  (e: 'update:open', value: boolean): void
}
const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const form = reactive<QuoteForm>({
  name: '',
  phone: '',
  zone: '',
  service: '',
  message: ''
})

const success = ref<boolean>(false)
const toastMsg = ref<string>('')
const toastKind = ref<ToastKind>('success')
const toastVisible = ref<boolean>(false)

const SERVICE_OPTS: ReadonlyArray<string> = [
  'Reparación de Goteras',
  'Impermeabilizaciones',
  'Limpieza de Canalones',
  'Mantenimiento de Cubiertas',
  'Otro / No estoy seguro'
]

const zoneOpts: ReadonlyArray<string> = [...ZONES, 'Otra']

const resetForm = (): void => {
  form.name = ''
  form.phone = ''
  form.zone = ''
  form.service = ''
  form.message = ''
  success.value = false
}

const showToast = (msg: string, kind: ToastKind = 'success'): void => {
  toastMsg.value = msg
  toastKind.value = kind
  toastVisible.value = true
  setTimeout(() => { toastVisible.value = false }, 3200)
}

const close = (): void => { emit('update:open', false) }

watch(() => props.open, (v) => {
  if (v) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
    setTimeout(resetForm, 300)
  }
})

const handleSubmit = (e: Event): void => {
  e.preventDefault()
  if (!form.name.trim() || !form.phone.trim()) {
    showToast('Por favor, introduce tu nombre y teléfono.', 'error')
    return
  }
  // Sin backend: abre el cliente de email del usuario
  const body = [
    `Nombre: ${form.name}`,
    `Teléfono: ${form.phone}`,
    `Zona: ${form.zone || '-'}`,
    `Servicio: ${form.service || '-'}`,
    `Mensaje: ${form.message || '-'}`
  ].join('\n')
  const subject = `Solicitud de Presupuesto - ${form.name}`
  window.location.href =
    `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  success.value = true
  showToast('¡Solicitud enviada!', 'success')
}
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="modal-overlay open" @click.self="close">
      <div class="modal" role="dialog" aria-modal="true">
        <template v-if="!success">
          <div class="modal-head">
            <h3>Presupuesto GRATIS</h3>
            <p>Déjanos tus datos y te llamamos en menos de 24h. Sin compromiso.</p>
            <button class="modal-close" aria-label="Cerrar" @click="close">
              <i class="fa-solid fa-xmark" />
            </button>
          </div>
          <div class="modal-body">
            <form @submit="handleSubmit">
              <div class="form-group">
                <label for="q-name">Nombre *</label>
                <input id="q-name" v-model="form.name" type="text" placeholder="Tu nombre" required />
              </div>
              <div class="form-group">
                <label for="q-phone">Teléfono *</label>
                <input id="q-phone" v-model="form.phone" type="tel" placeholder="6XX XX XX XX" required />
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="q-zone">Zona</label>
                  <select id="q-zone" v-model="form.zone">
                    <option value="">Selecciona zona</option>
                    <option v-for="z in zoneOpts" :key="z" :value="z">{{ z }}</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="q-service">Servicio</label>
                  <select id="q-service" v-model="form.service">
                    <option value="">¿Qué necesitas?</option>
                    <option v-for="s in SERVICE_OPTS" :key="s" :value="s">{{ s }}</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="q-msg">Cuéntanos el problema (opcional)</label>
                <textarea id="q-msg" v-model="form.message" rows="3" placeholder="Ej: gotera en el salón tras lluvias..." />
              </div>
              <button type="submit" class="form-submit">Solicitar presupuesto gratis</button>
              <p class="form-note">Tus datos solo se usan para contactarte. No spam.</p>
            </form>
          </div>
        </template>

        <div v-else class="success-state">
          <div class="success-icon"><i class="fa-solid fa-check" /></div>
          <h3>¡Solicitud recibida!</h3>
          <p>Hemos abierto tu cliente de correo con la solicitud. Si es urgente, llámanos directamente:</p>
          <a :href="`tel:${CONTACT.phonePrimaryTel}`" class="form-submit success-call">
            <i class="fa-solid fa-phone" /> {{ CONTACT.phonePrimary }}
          </a>
          <button class="form-submit success-close" @click="close">Cerrar</button>
        </div>
      </div>
    </div>

    <div class="toast" :class="[toastKind, { show: toastVisible }]">{{ toastMsg }}</div>
  </Teleport>
</template>