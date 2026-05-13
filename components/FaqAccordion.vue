<script setup lang="ts">
import { ref } from 'vue'
import { FAQ } from '~/data/content'

const openIndex = ref<number | null>(null)
const toggle = (i: number): void => {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <section id="faq" class="bg-soft">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow-small">Preguntas frecuentes</span>
        <h2>Resolvemos tus dudas</h2>
      </div>

      <div class="faq-wrap reveal">
        <div
          v-for="(item, i) in FAQ"
          :key="item.q"
          class="faq-item"
          :class="{ open: openIndex === i }"
        >
          <button class="faq-trigger" :aria-expanded="openIndex === i" @click="toggle(i)">
            {{ item.q }} <i class="fa-solid fa-chevron-down" />
          </button>
          <div class="faq-content">
            <p>{{ item.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>