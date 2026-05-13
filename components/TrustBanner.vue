<script setup>
import { CONTACT } from '~/data/content'
defineProps({ onQuoteClick: { type: Function, required: true } })
</script>

<template>
  <section class="trust-banner">
    <div class="container">
      <div class="trust-banner-inner reveal">
        <div class="trust-banner-left">
          <div class="trust-banner-icon"><i class="fa-solid fa-triangle-exclamation" /></div>
          <div>
            <h2>¿Tienes una gotera? Te ayudamos hoy mismo.</h2>
            <p>Actuamos rápido para evitar daños mayores en techos, paredes y mobiliario. Inspección y diagnóstico el mismo día.</p>
          </div>
        </div>
        <div class="trust-banner-ctas">
          <a :href="`tel:${CONTACT.phonePrimaryTel}`" class="btn-light">
            <i class="fa-solid fa-phone" /> {{ CONTACT.phonePrimary }}
          </a>
          <button class="btn-dark" @click="onQuoteClick">Pedir presupuesto</button>
        </div>
      </div>
    </div>
  </section>
</template>