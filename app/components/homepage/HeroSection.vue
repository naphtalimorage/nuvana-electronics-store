<template>
  <section class="relative w-full py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-surface via-surface-container-low to-surface-container-lowest">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between gap-14">

        <!-- Left Content -->
        <div class="flex flex-col items-start space-y-6">
          <!-- Badge with dot -->
          <Badge variant="outline" :dot="true" className="text-sm flex gap-1 items-center bg-blue-100 px-3 py-1 rounded-2xl">
            Next-Generation Hardware • Official Kenyan Warranty
          </Badge>

          <!-- Headline -->
          <h1 class="text-2xl md:text-4xl lg:text-6xl font-serif">
            Premium Electronics,<br />Delivered to Your Door
          </h1>

          <!-- Body Text -->
          <p class="text-sm text-neutral-700">
            Experience studio-grade acoustics, powerhouse computing, and flagship mobile devices curated for Nairobi and beyond. Same-day delivery across Nairobi, 24–48h nationwide.
          </p>

          <!-- Buttons -->
          <div class="flex flex-wrap items-center gap-4 pt-2">
            <NuxtLink to="/products" class="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-primary text-white font-title-md text-title-md font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] transition-all">
              Shop Now
            </NuxtLink>
            <NuxtLink to="/products" class="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-on-surface font-title-md text-title-md font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all border border-outline-variant/20">
              <span>Explore Flagships</span>
              <ArrowRight class="w-5 h-5" />
            </NuxtLink>
          </div>

          <!-- Trust Indicators -->
          <div class="pt-6 flex items-center gap-6 text-on-surface-variant">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center">
                <ShieldCheck class="w-4 h-4 text-secondary" />
              </div>
              <span class="font-label-sm text-label-sm font-medium">Authorized Kenya Importer</span>
            </div>
            <div class="w-1 h-1 rounded-full bg-outline-variant"></div>
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center">
                <Zap class="w-4 h-4 text-secondary" />
              </div>
              <span class="font-label-sm text-label-sm font-medium">3h Nairobi Instant Courier</span>
            </div>
          </div>
        </div>

        <!-- Right Product Card -->
        <div class="relative w-3/4 ">
          <div class="relative rounded-3xl bg-white p-6 shadow-2xl shadow-surface-container-highest/50">

            <!-- Product Image -->
            <div class="w-full ">
              <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7QwSqxwv5M_htWTnmrIIIMzXeHSfoq2xZYt_flxb-VikmUuolqfB46PihIIGW2C-5YCPgbdxapJ8lmwD66qRYsAUGc7ss5eR1xoMGxZuVq-L1YEscyVrd4Y0W68-sH7nvn1CF3oFPN8a09xqyrNpKfYp7BsUxQ7FeOKPQj0XAUngNUjOjCJopIyhdRUvdQ2Ku6NYQTSm975pFDRIwgCbTfyQlUGICdSwvOfjMuPU"
                  alt="AcoustiQ Master 1 Headphones"
                  class="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>

            <!-- Product Info -->
            <div class="mt-6 space-y-4">
              <div class="flex items-start justify-between">
                <div>
                  <span class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wide font-semibold">Studio Reference</span>
                  <h3 class="font-headline-sm text-headline-sm text-on-surface font-semibold mt-1">AcoustiQ Master 1</h3>
                </div>
                <div class="text-right">
                  <span class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wide block">Official KES</span>
                  <p class="font-price-display text-price-display text-on-surface font-bold mt-1">KES 48,999</p>
                </div>
              </div>

              <!-- Feature Badges -->
              <div class="grid grid-cols-2 gap-3">
                <div class="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-surface-container-low/80 border border-outline-variant/10">
                  <Volume2 class="w-4 h-4 text-secondary" />
                  <span class="font-label-sm text-xs font-medium text-on-surface">ANC 2.0 Titanium</span>
                </div>
                <div class="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-surface-container-low/80 border border-outline-variant/10">
                  <BatteryCharging class="w-4 h-4 text-secondary" />
                  <span class="font-label-sm text-xs font-medium text-on-surface">40h Endurance</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import Badge from "~/components/ui/Badge.vue";
import { ArrowRight, ShieldCheck, Zap, Volume2, BatteryCharging } from 'lucide-vue-next'
</script>
