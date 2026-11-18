<template>
  <aside class="w-full lg:w-72 lg:shrink-0 lg:h-screen lg:overflow-y-auto lg:pr-2 space-y-6">
    <div class="px-6 rounded-2xl bg-white shadow-2xl border space-y-4">
      <!-- Categories -->

          <Accordion type="single" collapsible  class="w-full" default-value="item-2">
            <AccordionItem value="item-2">
              <AccordionTrigger class="font-medium text-md">Categories</AccordionTrigger>
              <AccordionContent>
                <label v-for="cat in categoryCounts" :key="cat.name" class="flex items-center justify-between group cursor-pointer px-1">
                  <span class="flex items-center gap-3.5">
                    <input
                        type="checkbox"
                        :checked="activeCategories.includes(cat.name)"
                        @change="toggleCategory(cat.name)"
                        class="w-3 h-3 rounded bg-surface-container-high accent-primary"
                    />
                    <span :class="[
                      'font-body-sm text-body-sm transition-colors',
                      activeCategories.includes(cat.name) ? 'text-on-surface font-medium' : 'text-on-surface-variant group-hover:text-on-surface'
                    ]">{{ cat.name }}</span>
                  </span>
                  <span class="font-label-caps text-sm text-on-surface-variant/69 tabular-nums">{{ cat.count }}</span>
                </label>
              </AccordionContent>
            </AccordionItem>
          </Accordion>



      <!-- Price Range -->
      <div class="pt-2 space-y-3">
        <div class="flex items-center justify-between">
          <h2 class="font-title-md text-md text-on-surface font-semibold">Price Range</h2>
          <span class="font-label-caps text-xs text-blue-700 font-semibold">KES</span>
        </div>
        <div class="py-2">
          <Slider
              :model-value="[activePriceValue]"
              :min="PRICE_MIN"
              :max="PRICE_MAX"
              :step="PRICE_STEP"
              class="w-full"
              @update:model-value="onPriceSlider"
          />
          <div class="flex justify-between mt-1.5 font-label-caps text-[10px] text-on-surface-variant/70">
            <span>{{ PRICE_MIN.toLocaleString() }}</span>
            <span>{{ PRICE_MAX.toLocaleString() }}</span>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 pt-1">
          <button
              type="button"
              @click="activeThumb = 'min'"
              :class="[
                'p-2 rounded-xl flex flex-col items-center transition-all cursor-pointer',
                activeThumb === 'min'
                  ? 'bg-blue-600 text-white ring-2 ring-blue-300'
                  : 'bg-blue-100 hover:bg-blue-200'
              ]"
          >
            <span :class="[
              'block font-label-caps text-[10px] uppercase',
              activeThumb === 'min' ? 'text-blue-100' : 'text-on-surface-variant'
            ]">Min Price</span>
            <span class="font-label-sm text-label-sm font-semibold">{{ priceRange.min.toLocaleString() }}</span>
          </button>
          <button
              type="button"
              @click="activeThumb = 'max'"
              :class="[
                'p-2 rounded-xl flex flex-col items-center transition-all cursor-pointer',
                activeThumb === 'max'
                  ? 'bg-blue-600 text-white ring-2 ring-blue-300'
                  : 'bg-blue-100 hover:bg-blue-200'
              ]"
          >
            <span :class="[
              'block font-label-caps text-[10px] uppercase',
              activeThumb === 'max' ? 'text-blue-100' : 'text-on-surface-variant'
            ]">Max Price</span>
            <span class="font-label-sm text-label-sm font-semibold">{{ priceRange.max.toLocaleString() }}</span>
          </button>
        </div>
      </div>

      <Accordion type="single" collapsible  class="w-full" default-value="item-2">
        <AccordionItem value="item-2">
          <AccordionTrigger class="font-medium text-md">Brand</AccordionTrigger>
          <AccordionContent >
            <div class="grid grid-cols-1 gap-2 pt-1">
              <label v-for="brand in brandCounts" :key="brand.name" class="flex items-center justify-between group cursor-pointer px-1">
            <span class="flex items-center gap-2.5">
              <input
                  type="checkbox"
                  :checked="activeBrands.includes(brand.name)"
                  @change="toggleBrand(brand.name)"
                  class="w-4 h-4 rounded bg-surface-container-high accent-primary"
              />
              <span :class="[
                'font-body-sm text-body-sm transition-colors',
                activeBrands.includes(brand.name) ? 'text-on-surface font-medium' : 'text-on-surface-variant group-hover:text-on-surface'
              ]">{{ brand.name }}</span>
            </span>
                <span class=" px-0.5 text-sm">{{ brand.count }}</span>
              </label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <!-- Availability -->
      <div class="pt-2 space-y-3 ">
        <h2 class="text-md font-semibold">Availability</h2>
        <div class="space-y-2.5 pt-1">
          <label class="flex items-center justify-between group cursor-pointer">
            <span class="flex items-center gap-2.5">
              <input type="checkbox" v-model="inStockOnly" class="w-4 h-4 rounded bg-surface-container-high accent-primary" />
              <span class=" text-sm  font-medium">In Stock Nairobi</span>
            </span>
            <span class="w-2 h-2 rounded-full bg-secondary"></span>
          </label>
          <label class="flex items-center justify-between group cursor-pointer">
            <span class="flex items-center gap-2.5">
              <input type="checkbox" class="w-4 h-4 rounded bg-surface-container-high accent-primary" />
              <span class="text-sm group-hover:text-on-surface transition-colors">Pre-Order (7-10 Days)</span>
            </span>
            <span class="w-2 h-2 rounded-full bg-outline-variant"></span>
          </label>
        </div>
      </div>

      <!-- Reset -->
      <div class="py-4">
        <button @click="resetFilters" class="w-full py-2.5 px-4 rounded-xl bg-blue-100 hover:bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold flex items-center justify-center gap-2 transition-colors">
          <RotateCcw class="w-4 h-4" />
          Reset All Filters
        </button>
      </div>
    </div>

    <!-- Nairobi Express Box -->
    <div class="p-5 rounded-2xl bg-blue-100 flex flex-col gap-3">
      <div class="flex items-center gap-2.5 text-secondary">
        <Zap class="w-5 h-5" />
        <span class="font-title-md text-[14px] font-semibold text-on-surface">Same-Day Dispatch</span>
      </div>
      <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
        Order before 2:00 PM EAT for verified courier dispatch across Westlands, Kilimani, Karen, and CBD.
      </p>
      <div class="flex items-center gap-2 text-on-surface font-label-sm text-label-sm pt-1">
        <CheckCircle2 class="w-4 h-4 text-secondary" />
        <span>M-PESA on Delivery Enabled</span>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { RotateCcw, Zap, CheckCircle2 } from 'lucide-vue-next'
import { Slider } from '@/components/ui/slider'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
const { activeCategories, activeBrands, inStockOnly, priceRange, toggleCategory, toggleBrand, resetFilters } = useShopFilters()

const PRICE_MIN = 0
const PRICE_MAX = 500000
const PRICE_STEP = 1000
const activeThumb = ref<'min' | 'max'>('min')

const activePriceValue = computed(() =>
  activeThumb.value === 'min' ? priceRange.value.min : priceRange.value.max
)

const onPriceSlider = (value: number[] | undefined) => {
  const v = value?.[0] ?? PRICE_MIN
  if (activeThumb.value === 'min') {
    priceRange.value.min = Math.min(v, priceRange.value.max)
  } else {
    priceRange.value.max = Math.max(v, priceRange.value.min)
  }
}

const categoryCounts = [
  { name: 'Laptops', count: 18 },
  { name: 'Phones', count: 14 },
  { name: 'Audio', count: 12 },
  { name: 'Accessories', count: 24 }
]

const brandCounts = [
  { name: 'Apple', count: 16 },
  { name: 'Sony', count: 11 },
  { name: 'Dell', count: 7 },
  { name: 'Bose', count: 6 },
  { name: 'Samsung', count: 14 },
  { name: 'Anker', count: 9 }
]
</script>