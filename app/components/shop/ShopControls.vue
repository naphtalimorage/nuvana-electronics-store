<template>
  <div
      class="mb-4 py-3.5 px-5 rounded-2xl bg-white shadow-lg flex flex-wrap items-center justify-between gap-4">
    <!-- Filter badges + chips -->
    <div class="flex items-center flex-wrap gap-2.5">
      <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface">
        <SlidersHorizontal class="w-4 h-4"/>
        <span class=" text-sm font-semibold">Filters Applied ({{ filterCount }})</span>
      </div>

      <!-- Active chips -->
      <Badge v-if="inStockOnly" class=" inline-flex items-center gap-1.5 text-[10px] bg-blue-100 px-3 py-1 rounded-2xl">
        <span>In Stock</span>
        <button @click="inStockOnly = false" class="hover:text-error transition-colors">
          <X class="w-3 h-3"/>
        </button>
      </Badge>
      <Badge v-for="cat in activeCategories" :key="cat"
             class=" inline-flex items-center gap-1.5 text-[10px] bg-blue-100 px-3 py-1 rounded-2xl">
        <span>{{ cat }}</span>
        <button @click="toggleCategory(cat)" class="hover:text-error transition-colors">
          <X class="w-3 h-3"/>
        </button>
      </Badge>

      <button @click="resetFilters"
              class=" text-sm text-on-surface-variant hover:text-primary transition-colors underline underline-offset-4 ml-1">
        Clear all
      </button>
    </div>

    <!-- Sort + View toggle -->
    <div class="flex items-center gap-4 ml-auto">
      <div class="flex items-center gap-2">
        <label for="sort-select" class=" text-sm text-on-surface-variant">Sort by:</label>
        <div class="relative">
          <select
              id="sort-select"
              v-model="sortBy"
              class="appearance-none pl-3 pr-8 py-1.5 bg-blue-100 text-on-surface rounded-xl font-title-md text-sm font-medium focus:outline-none focus:bg-surface-container cursor-pointer transition-colors"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Customer Rating</option>
            <option value="newest">Newest Arrivals</option>
          </select>
          <ChevronDown
              class="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none"/>
        </div>
      </div>

      <div class="hidden sm:flex items-center p-1 rounded-lg bg-surface-container-low">
        <button class="p-1 rounded bg-surface-container-lowest text-primary shadow-sm">
          <LayoutGrid class="w-[18px] h-[18px]"/>
        </button>
        <button class="p-1 rounded text-on-surface-variant hover:text-on-surface transition-colors">
          <List class="w-[18px] h-[18px]"/>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {SlidersHorizontal, X, ChevronDown, LayoutGrid, List} from 'lucide-vue-next'
import {useShopFilters} from "~/composables/useShopFilters.ts";
import Badge from "~/components/ui/Badge.vue";

const {activeCategories, inStockOnly, sortBy, filterCount, toggleCategory, resetFilters} = useShopFilters()
</script>