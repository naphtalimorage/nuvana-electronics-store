<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md bg-white border-b border-outline-variant/30">
    <div class="h-16 max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
      <!-- Logo -->
     <Logo/>

      <!-- Navigation -->
      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink to="/" class=" transition-colors text-primary font-semibold border-b-2 border-primary pb-0.5">
          Home
        </NuxtLink>
        <NuxtLink to="/products" class="font-body-sm text-body-sm tracking-wide text-on-surface-variant hover:text-primary transition-colors">
          Shop
        </NuxtLink>
        <NuxtLink to="/about" class="font-body-sm text-body-sm tracking-wide text-on-surface-variant hover:text-primary transition-colors">
          About
        </NuxtLink>
      </nav>

      <!-- Right Side Actions -->
      <div class="flex items-center gap-2">
        <Badge variant="outline"  class="flex items-center gap-1 text-[10px] ">
          <MapPin class="w-3 h-3" /> Nairobi, KE • KES
        </Badge>

        <!-- Search Button -->
       <SearchButton/>

        <!-- Cart Button -->
        <NuxtLink to="/cart" class="relative w-9 h-9 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors">
          <ShoppingBag class="w-5 h-5" />
          <span class="absolute top-1 right-1 flex items-center justify-center w-4 h-4 rounded-full bg-secondary text-on-secondary font-label-caps text-[9px] font-bold leading-none">
            {{ cartCount }}
          </span>
        </NuxtLink>

        <!-- Divider -->
        <div class="w-px h-6 bg-outline-variant/40 mx-1"></div>

        <!-- Profile -->
        <Profile/>
      </div>
    </div>
  </header>
</template>

<script  setup>
// You can add cart state here later
import Badge from "~/components/ui/Badge.vue";

import { ShoppingBag, MapPin } from 'lucide-vue-next'

const cartCount = ref(2)
</script>
