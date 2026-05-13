<script setup>
import { PROCESS_STEPS } from '~/data/content'
</script>

<template>
  <section id="proceso">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow-small">Cómo trabajamos</span>
        <h2>Un proceso claro, sin sorpresas</h2>
        <p>Desde la primera llamada hasta la entrega final, te acompañamos en cada paso.</p>
      </div>

      <!-- Desktop -->
      <div class="timeline-desktop">
        <div class="timeline-line" />
        <div class="timeline-grid">
          <div
            v-for="(step, i) in PROCESS_STEPS"
            :key="step.title"
            class="timeline-step reveal"
            :style="{ transitionDelay: `${i * 120}ms` }"
          >
            <div class="timeline-num">
              <i :class="step.icon" />
              <span class="timeline-num-badge">{{ i + 1 }}</span>
            </div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Mobile -->
      <div class="timeline-mobile">
        <div class="timeline-mobile-line" />
        <div v-for="(step, i) in PROCESS_STEPS" :key="`m-${step.title}`" class="tm-step reveal">
          <div class="tm-icon"><i :class="step.icon" /></div>
          <span class="tm-step-label">Paso {{ i + 1 }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>