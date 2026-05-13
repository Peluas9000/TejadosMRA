<script setup lang="ts">
import { ref } from 'vue'
import { useReveal } from '~/composables/useReveal'

const quoteOpen = ref<boolean>(false)
const openQuote = (): void => { quoteOpen.value = true }

useReveal()
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <HeroSection :on-quote-click="openQuote" />
      <TrustBanner :on-quote-click="openQuote" />
      <ServicesGrid :on-quote-click="openQuote" />
      <ProcessTimeline />
      <TestimonialsCarousel />
      <ZonesGrid />
      <FaqAccordion />
    </main>
    <AppFooter />
    <FloatingWhatsApp />
    <QuoteDialog v-model:open="quoteOpen" />
  </div>
</template>