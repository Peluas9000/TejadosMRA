<script setup>
import { CONTACT } from '~/data/content'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="#top" class="logo">
            <span class="logo-mark"><i class="fa-solid fa-house" /></span>
            <span class="logo-text" style="color:#fff">Tejados <span>M.R.A.</span></span>
          </a>
          <p>
            Especialistas en reparación de tejados, goteras, humedades, canalones y mantenimiento
            de cubiertas en toda la Sierra de Madrid. Profesionalidad, urgencias y garantía por escrito.
          </p>
          <div class="footer-ctas">
            <a :href="`tel:${CONTACT.phonePrimaryTel}`" class="btn-footer">
              <i class="fa-solid fa-phone" /> {{ CONTACT.phonePrimary }}
            </a>
            <a :href="`tel:${CONTACT.phoneSecondaryTel}`" class="btn-footer btn-footer-alt">
              <i class="fa-solid fa-phone" /> {{ CONTACT.phoneSecondary }}
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h3>Servicios</h3>
          <ul>
            <li><a href="#servicios">Reparación de Goteras</a></li>
            <li><a href="#servicios">Impermeabilizaciones</a></li>
            <li><a href="#servicios">Limpieza de Canalones</a></li>
            <li><a href="#servicios">Mantenimiento de Cubiertas</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Contacto</h3>
          <ul>
            <li><i class="fa-solid fa-location-dot" /><span>Sierra de Madrid<br>Collado Villalba y alrededores</span></li>
            <li><i class="fa-solid fa-envelope" /><a :href="`mailto:${CONTACT.email}`">{{ CONTACT.email }}</a></li>
            <li><i class="fa-brands fa-whatsapp" /><a :href="`https://wa.me/${CONTACT.whatsappNumber}`" target="_blank" rel="noopener">WhatsApp directo</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© {{ year }} Tejados M.R.A. — Todos los derechos reservados.</p>
        <div class="legal">
          <a href="#">Aviso legal</a>
          <a href="#">Privacidad</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>