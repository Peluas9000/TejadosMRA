<script setup>
import { ZONES } from '~/data/content'
</script>

<template>
  <section id="zonas">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow-small">Cobertura</span>
        <h2>Zonas de actuación</h2>
        <p>Trabajamos en toda la Sierra de Madrid y alrededores. ¿No ves tu municipio? Llámanos, también vamos.</p>
      </div>
      <div class="zones-grid reveal">
        <span v-for="z in ZONES" :key="z" class="zone-pill">
          <i class="fa-solid fa-location-dot" />{{ z }}
        </span>
      </div>
    </div>
  </section>
</template>