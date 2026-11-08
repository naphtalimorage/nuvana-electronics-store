<!--<script setup lang="ts">-->

<!--</script>-->
<!--<template>-->
<!--  <div className="p-5">-->
<!--    <nav className="flex items-center justify-between">-->
<!--      <Logo/>-->
<!--      &lt;!&ndash; Navigation &ndash;&gt;-->
<!--      <div className="hidden md:flex items-center gap-6">-->
<!--        <NuxtLink to="/" className="text-sm font-medium text-neutral hover:text-primary transition-colors" >-->
<!--          Home-->
<!--        </NuxtLink>-->
<!--        <NuxtLink to="/products" className="text-sm font-medium text-neutral hover:text-primary transition-colors">-->
<!--          Products-->
<!--        </NuxtLink>-->
<!--        <NuxtLink to="/cart" className="text-sm font-medium text-neutral hover:text-primary transition-colors">-->
<!--          Cart-->
<!--        </NuxtLink>-->
<!--      </div>-->
<!--      <div className="flex items-center gap-4">-->
<!--        <SearchBar/>-->
<!--        <Profile/>-->
<!--      </div>-->
<!--    </nav>-->
<!--  </div>-->
<!--</template>-->
<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/30">
    <div class="h-16 max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
      <!-- Logo -->
     <Logo/>

      <!-- Navigation -->
      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink to="/" class="tracking-wide transition-colors text-primary font-semibold border-b-2 border-primary pb-0.5">
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
        <!-- Location Badge -->
<!--        <div class="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface-variant">-->
<!--          <MapPin class="w-4 h-4" />-->
<!--          <span class="font-label-sm text-label-sm text-on-surface font-medium">Nairobi, KE • KES</span>-->
<!--        </div>-->
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
