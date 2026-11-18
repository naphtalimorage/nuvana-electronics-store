<template>
  <article class="group relative rounded-2xl bg-surface-container-lowest p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
    <div class="space-y-4">
      <!-- Image -->
      <div class="relative w-full aspect-square rounded-xl bg-surface-container-low overflow-hidden flex items-center justify-center p-6">
        <span class="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-caps text-label-caps">
          {{ product.category.toUpperCase() }}
        </span>
        <button aria-label="Add to wishlist" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center text-on-surface-variant hover:text-error transition-colors">
          <Heart class="w-4.5 h-4.5" />
        </button>
        <img :src="product.image" :alt="product.name" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
      </div>

      <!-- Metadata -->
      <div class="space-y-1.5">
        <div class="flex items-center justify-between">
          <span class="font-label-caps text-label-caps text-on-surface-variant tracking-wider uppercase">{{ product.brand }}</span>
          <div class="flex items-center gap-1">
            <Star class="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span class="font-label-sm text-label-sm font-semibold text-on-surface">{{ product.rating }}</span>
            <span class="font-label-caps text-label-caps text-on-surface-variant">({{ product.reviews }})</span>
          </div>
        </div>
        <h3 class="font-title-md text-title-md font-semibold text-on-surface group-hover:text-secondary transition-colors">
          {{ product.name }}
        </h3>
        <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">{{ product.description }}</p>
      </div>
    </div>

    <!-- Price + CTA -->
    <div class="pt-5 mt-4 flex items-center justify-between border-t border-surface-container-high/60">
      <div>
        <span class="block font-label-caps text-[10px] text-on-surface-variant uppercase">Standard Retail</span>
        <span class="font-price-display text-price-display text-on-surface">KES {{ product.price.toLocaleString() }}</span>
      </div>
      <button @click="$emit('add-to-cart', product)" class="px-4 py-2 rounded-xl bg-primary text-on-primary font-label-sm text-label-sm font-semibold hover:bg-primary-container active:scale-95 transition-all flex items-center gap-1.5">
        <ShoppingCart class="w-4 h-4" />
        <span>Add to Cart</span>
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Heart, Star, ShoppingCart } from 'lucide-vue-next'

defineProps<{ product: Product }>()
defineEmits<{ (e: 'add-to-cart', product: Product): void }>()
</script>