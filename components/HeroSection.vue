<script setup lang="ts">
import { useTypewriter } from '~/composables/useTypewriter'
import { CONTACT, WHATSAPP_URL } from '~/data/content'

interface Props {
  onQuoteClick: () => void
}
defineProps<Props>()

const { text } = useTypewriter(['Goteras', 'Humedades', 'Canalones', 'Cubiertas'])
</script>

<template>
  <section id="top" class="hero">
    <div class="hero-bg">
      <NuxtImg
        src="https://images.unsplash.com/photo-1763665814538-8ba04597286c?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb"
        alt="Tejado en la Sierra de Madrid"
        class="hero-bg-img"
        width="1920"
        height="1080"
        format="webp"
        loading="eager"
        fetchpriority="high"
        preload
      />
    </div>
    <div class="hero-overlay" />
    <div class="container">
      <div class="hero-inner">
        <div class="eyebrow">
          <span class="eyebrow-dot" />
          <span class="eyebrow-text">Sierra de Madrid · Urgencias 24/7</span>
        </div>

        <h1>
          Reparación de Tejados y Goteras en la
          <span class="accent">Sierra de Madrid</span>
        </h1>

        <p class="hero-sub">
          Especialistas en <span class="word">{{ text }}</span><span class="caret" />
        </p>

        <p class="hero-desc">
          Más de 20 años solucionando problemas de tejados en chalets y comunidades.
          Inspección gratuita, presupuesto con fotos y <strong>garantía por escrito</strong>.
        </p>

        <div class="hero-ctas">
          <button class="cta-big cta-quote" @click="onQuoteClick">Presupuesto GRATIS</button>
          <a :href="WHATSAPP_URL" target="_blank" rel="noopener" class="cta-big cta-wa">
            <i class="fa-brands fa-whatsapp" /> Contactar por WhatsApp
          </a>
        </div>

        <div class="trust-strip">
          <div class="trust-item"><i class="fa-solid fa-shield-halved" /> Garantía por escrito</div>
          <div class="trust-item"><i class="fa-regular fa-clock" /> Atendemos urgencias</div>
          <div class="trust-item"><i class="fa-solid fa-star" /> +500 clientes satisfechos</div>
        </div>

        <a :href="`tel:${CONTACT.phonePrimaryTel}`" class="hero-phone-link">
          <i class="fa-solid fa-phone" />
          <span>O llama directamente: <u>{{ CONTACT.phonePrimary }}</u></span>
        </a>
      </div>
    </div>
  </section>
</template>