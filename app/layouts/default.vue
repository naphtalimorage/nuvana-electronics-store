<template>
  <div class="min-h-screen flex flex-col">
    <Navbar/>
    <!-- The actual page content (  products.vue, etc.) goes here -->
    <main>
      <slot />
    </main>

    <Footer/>
  </div>
</template>
<script setup>
import Navbar from '~/components/common/Navbar.vue'
import Footer from '~/components/common/Footer.vue'
</script>
