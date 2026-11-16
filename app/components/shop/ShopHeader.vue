<template>
  <div class="relative w-full py-8 sm:py-10">
    <!-- Ambient light accent -->
    <div class="absolute -top-10 right-1/4 w-96 h-96 bg-surface-variant/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

    <div class="flex flex-col gap-3 pb-8">
      <!-- Breadcrumbs -->
      <nav aria-label="Breadcrumb" class="flex items-center gap-2  text-xs">
        <NuxtLink to="/" class="hover:text-primary transition-colors">Home</NuxtLink>
        <ChevronRight class="w-3.5 h-3.5 text-outline" />
        <NuxtLink to="/products" class="hover:text-primary transition-colors">Shop</NuxtLink>
        <ChevronRight class="w-3.5 h-3.5 text-outline" />
        <span class="text-on-surface font-semibold">All Products</span>
      </nav>

      <!-- Title + Metric Ribbon -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-2">
        <div class="space-y-2 max-w-xl">
          <div class="flex items-center gap-3">
            <h1 class="font-semibold text-4xl text-on-surface tracking-tight">All Products</h1>
            <Badge variant="outline" className="text-xs flex gap-1 items-center bg-blue-100 px-2 py-0.5 rounded-2xl">{{itemsCount}} items</Badge>
          </div>
          <p class="font-sans text-sm text-slate-500 leading-relaxed">
            Discover our complete lineup of premium certified electronics with standard Kenyan manufacturer warranty and same-day Nairobi delivery.
          </p>
        </div>

        <!-- Metric Ribbon -->
        <div class="flex items-center gap-6 py-2 px-4 rounded-xl border bg-surface-container-lowest shadow-2xl">
          <div class="flex items-center gap-2">
            <ShieldCheck class="w-5 h-5 text-secondary" />
            <div class="flex flex-col">
              <span class="text-sm text-on-surface-variant">AUTHENTICITY</span>
              <span class=" text-sm text-on-surface font-semibold">100% Genuine OEM</span>
            </div>
          </div>
          <div class="w-px h-7 bg-surface-container-high"></div>
          <div class="flex items-center gap-2">
            <Truck class="w-5 h-5 text-secondary" />
            <div class="flex flex-col">
              <span class=" text-sm text-on-surface-variant">DISPATCH</span>
              <span class=" text-sm text-on-surface font-semibold">Under 4 Hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronRight, ShieldCheck, Truck } from 'lucide-vue-next'
import Badge from "~/components/ui/Badge.vue";

// defineProps<{ itemCount: number }>()
const itemsCount = ref(4);
</script>