<script setup>
import { WHATSAPP_URL } from '~/data/content'
</script>

<template>
  <a
    :href="WHATSAPP_URL"
    target="_blank"
    rel="noopener"
    class="float-wa"
    aria-label="Contactar por WhatsApp"
  >
    <i class="fa-brands fa-whatsapp" />
  </a>
</template>