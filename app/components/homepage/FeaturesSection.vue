<template>
  <section class="w-full py-12 bg-blue-100 border  ">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <!-- Official Warranty -->
        <div class="flex items-start gap-4 p-6 rounded-2xl bg-surface-container-lowest border bg-white border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Shield class="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 class="font-title-md text-title-md text-on-surface font-semibold">Official Warranty</h4>
            <p class="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">1-year local replacement guarantee on all sealed units</p>
          </div>
        </div>

        <!-- Express Delivery -->
        <div class="flex items-start gap-4 p-6 rounded-2xl bg-surface-container-lowest border bg-white border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Truck class="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 class="font-title-md text-title-md text-on-surface font-semibold">Express Delivery</h4>
            <p class="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">Same-day dispatch in Nairobi, 24–48h countrywide courier</p>
          </div>
        </div>

        <!-- Secure Payments -->
        <div class="flex items-start gap-4 p-6 rounded-2xl bg-surface-container-lowest border bg-white border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Lock class="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 class="font-title-md text-title-md text-on-surface font-semibold">Secure Payments</h4>
            <p class="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">Instant M-PESA STK Push, Visa, Mastercard & Pay on Pickup</p>
          </div>
        </div>

        <!-- Authorized Support -->
        <div class="flex items-start gap-4 p-6 rounded-2xl bg-surface-container-lowest border bg-white border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
          <div class="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Headphones class="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 class="font-title-md text-title-md text-on-surface font-semibold">Authorized Support</h4>
            <p class="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">Direct hardware concierge & enterprise technical setup</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { Shield, Truck, Lock, Headphones } from 'lucide-vue-next'
</script>
