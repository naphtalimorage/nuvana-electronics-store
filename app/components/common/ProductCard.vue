<template>
  <div class="flex flex-col rounded-3xl bg-white bg-surface-container-lowest shadow-lg hover:scale-105 transition-transform duration-300">
    <div class="relative w-full rounded-2xl ">
      <span class="absolute top-3  text-[10px] bg-blue-50 left-3 px-2.5 py-1 rounded-full bg-surface-container-lowest text-on-surface font-label-caps text-label-caps uppercase shadow-sm">
        {{ category }}
      </span>
      <img
          :src="image"
          :alt="name"
          class="w-full h-full object-contain  rounded-t-3xl "
      />
    </div>
    <div class="p-6 flex flex-col flex-1">
      <div class="flex items-center gap-1 mb-2">
        <Star size="10" class="text-amber-500 "/>
        <span class="material-symbols-outlined text-[10px]" style="font-variation-settings: 'FILL' 1;">star</span>
        <span class="font-label-sm text-[10px] text-on-surface font-semibold">{{ rating }}</span>
        <span class="font-label-sm text-[10px] text-on-surface-variant">({{ reviews }} reviews)</span>
      </div>
      <h3 class="font-semibold text-headline-sm text-on-surface tracking-tight group-hover:text-secondary transition-colors">
        {{ name }}
      </h3>
      <p class="font-body-sm text-[10px] text-on-surface-variant mt-1.5">{{ specs }}</p>
      <div class="mt-auto pt-6 flex items-center justify-between">
        <div>
          <span class="font-label-caps text-[10px] text-on-surface-variant block uppercase">Nairobi In-Stock</span>
          <span class="font-price-display text-price-display text-on-surface font-semibold">{{ price }}</span>
        </div>
        <button
            @click="$emit('add-to-cart')"
            class="px-2 py-0.5 rounded-xl bg-primary text-white hover:scale-105 shadow-sm active:scale-95 transition-all"
        >
          <span class="flex items-center gap-2">
            <ShoppingCart />
            <h1 class="text-[10px]">Add to <br/> Cart</h1>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {Star, ShoppingCart} from 'lucide-vue-next'
defineProps({
  name: String,
  category: String,
  image: String,
  specs: String,
  price: String,
  rating: Number,
  reviews: Number
})

defineEmits(['add-to-cart'])
</script>
