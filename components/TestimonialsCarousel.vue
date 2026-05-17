<script setup lang="ts">
import { TESTIMONIALS } from '~/data/content'
import type { Testimonial } from '~/types'

const items: ReadonlyArray<Testimonial> = TESTIMONIALS
const stars: ReadonlyArray<number> = [1, 2, 3, 4, 5]
</script>

<template>
  <section class="bg-soft">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow-small">Opiniones reales</span>
        <h2>Lo que dicen nuestros clientes</h2>
        <div class="testimonials-rating">
          <div class="stars">
            <i v-for="s in stars" :key="`hs-${s}`" class="fa-solid fa-star" />
          </div>
          <span class="score">4.9/5</span>
          <span class="count">· +200 reseñas</span>
        </div>
      </div>

      <div class="testimonials-scroll reveal">
        <article
          v-for="t in items"
          :key="`${t.name}-${t.zone}`"
          class="testimonial"
        >
          <i class="fa-solid fa-quote-right testimonial-quote" />
          <div class="testimonial-stars">
            <i v-for="s in stars" :key="`${t.name}-s-${s}`" class="fa-solid fa-star" />
          </div>
          <p class="testimonial-text">&ldquo;{{ t.text }}&rdquo;</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar" style="width:40px;height:40px;">{{ t.name.charAt(0) }}</div>
            <div>
              <div class="testimonial-name">{{ t.name }}</div>
              <div class="testimonial-zone">{{ t.zone }}</div>
            </div>
          </div>
        </article>
      </div>

      <p class="testimonials-hint">← Desliza para ver más opiniones →</p>
    </div>
  </section>
</template>