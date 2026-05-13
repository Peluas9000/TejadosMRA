<script setup lang="ts">
import { ref } from 'vue'
import { CONTACT } from '~/data/content'

const isMenuOpen = ref<boolean>(false)
const toggleMenu = (): void => { isMenuOpen.value = !isMenuOpen.value }
const closeMenu = (): void => { isMenuOpen.value = false }

const navLinks: ReadonlyArray<{ href: string; label: string }> = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#zonas', label: 'Zonas' },
  { href: '#faq', label: 'FAQ' }
]
</script>

<template>
  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="#top" class="logo">
          <span class="logo-mark"><i class="fa-solid fa-house" /></span>
          <span class="logo-text">Tejados <span>M.R.A.</span></span>
        </a>

        <nav class="nav-desktop">
          <a v-for="l in navLinks" :key="l.href" :href="l.href" class="nav-link">{{ l.label }}</a>
        </nav>

        <div class="header-actions">
          <a :href="`tel:${CONTACT.phonePrimaryTel}`" class="btn-primary header-call">
            <i class="fa-solid fa-phone" /> Llamar ahora
          </a>
          <button class="menu-toggle" :aria-expanded="isMenuOpen" aria-label="Abrir menú" @click="toggleMenu">
            <i :class="isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" />
          </button>
        </div>
      </div>

      <nav v-show="isMenuOpen" class="nav-mobile">
        <a v-for="l in navLinks" :key="l.href" :href="l.href" class="nav-link" @click="closeMenu">
          {{ l.label }}
        </a>
        <a :href="`tel:${CONTACT.phonePrimaryTel}`" class="btn-primary">
          <i class="fa-solid fa-phone" /> Llamar ahora
        </a>
      </nav>
    </div>
  </header>
</template>