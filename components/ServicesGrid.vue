<script setup lang="ts">
import { SERVICES } from '~/data/content'

interface Props {
  onQuoteClick: () => void
}
defineProps<Props>()
</script>

<template>
  <section id="servicios" class="bg-soft">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow-small">Nuestros servicios</span>
        <h2>Soluciones expertas para tu tejado</h2>
        <p>Cubrimos toda la Sierra de Madrid con técnicos especializados y materiales certificados.</p>
      </div>

      <div class="services-grid">
        <article
          v-for="(s, i) in SERVICES"
          :key="s.title"
          class="service-card reveal"
          :style="{ transitionDelay: `${i * 80}ms` }"
        >
          <div class="service-icon"><i :class="s.icon" /></div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.desc }}</p>
          <button class="service-cta" @click="onQuoteClick">
            Pedir presupuesto <i class="fa-solid fa-arrow-right" />
          </button>
        </article>
      </div>
    </div>
  </section>
</template>