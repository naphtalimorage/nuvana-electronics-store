<template>
  <div class="min-h-screen flex flex-col">
    <Navbar/>
    <!-- The actual page content (  products.vue, etc.) goes here -->
    <main>
      <slot />
    </main>

  </div>
</template>
<script setup>
import Navbar from '~/components/common/Navbar.vue'
</script>
