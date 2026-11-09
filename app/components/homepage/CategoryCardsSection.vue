<script setup lang="ts">
import {ArrowRight} from 'lucide-vue-next';
</script>
<template>
  <section class="w-full py-16 bg-surface-container-low/50">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-center gap-40">
        <!-- Audio Card -->
        <div class="relative rounded-3xl overflow-hidden bg-primary p-8 lg:p-12 w-[550px] text-white flex flex-col gap-10 h-[280px] shadow-lg group">
          <div class="relative z-10">
            <Badge className="text-sm bg-neutral-600 px-3 py-0.5 rounded-2xl">
              Acoustic Curation
            </Badge>
            <h3 class="font-semibold text-xl font-serif  text-white mt-3">Audio Precision</h3>
            <p class=" text-sm text-white mt-2 max-w-sm">Audiophile-grade DACs, lossless wireless drivers, and studio monitors tested for absolute harmonic purity.</p>
          </div>
          <div class="relative z-10 pt-2 flex items-center justify-between">
            <NuxtLink to="/products" class="inline-flex items-center gap-2 px-6 py-2 rounded-xl bg-white text-primary font-title-md text-title-md hover:bg-surface-bright transition-colors shadow-sm">
              <span className="text-sm">Explore Collection</span>
              <ArrowRight class="w-5 h-5" />
            </NuxtLink>
            <span class="text-xs text-white uppercase">34 Products Available</span>
          </div>
        </div>

        <!-- Computing Card -->
        <div class="relative rounded-3xl overflow-hidden bg-secondary p-8 lg:p-12 w-[550px] text-white flex flex-col gap-10 h-[280px] shadow-lg group">
          <div class="relative z-10">
            <Badge className="text-sm bg-blue-400 px-3 py-0.5 rounded-2xl">
              High Compute
            </Badge>
            <h3 class="font-semibold text-xl font-serif  text-white mt-3">Pro Computing</h3>
            <p class=" text-sm text-white mt-2 max-w-sm">Architectural silicon, ultra-dense memory configurations, and thermal solutions tuned for compiling and 3D rendering.</p>
          </div>
          <div class="relative z-10 flex items-center justify-between">
            <NuxtLink to="/products" class="inline-flex items-center gap-2 px-6 py-2 rounded-xl bg-white text-sm text-primary transition-colors shadow-sm">
              <span className="text-sm">Explore Collection</span>
              <ArrowRight class="w-5 h-5" />
            </NuxtLink>
            <span class="text-xs text-white uppercase">52 Products Available</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
