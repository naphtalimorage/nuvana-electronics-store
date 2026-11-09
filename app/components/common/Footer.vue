<template>
  <footer class="w-full bg-surface-container-lowest border-t border-outline-variant/30 mt-auto">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Brand Column -->
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <span class="font-title-md text-title-md font-semibold text-on-surface tracking-tight">Nuvana Electronics</span>
          </div>
          <p class="font-body-sm text-sm text-slate-500 leading-relaxed">
            Precision-engineered consumer technology. Premium electronics curated for creative professionals, audiophiles, and discerning tech enthusiasts across East Africa.
          </p>
          <div class="flex items-center gap-2 pt-2 text-on-surface-variant">
            <a class="w-5 h-5 rounded-full cursor-pointer flex items-center justify-center hover:bg-surface-container hover:text-on-surface transition-colors">
              <Store/>
            </a>
            <a class="w-5 h-5 rounded-full cursor-pointer flex items-center justify-center hover:bg-surface-container hover:text-on-surface transition-colors">
              <Phone/>
            </a>
            <a class="w-5 h-5 rounded-full cursor-pointer flex items-center justify-center hover:bg-surface-container hover:text-on-surface transition-colors">
              <Mail/>
            </a>
          </div>
        </div>

        <!-- Categories Column -->
        <div class="space-y-3">
          <h3 class="font-label-caps text-label-caps text-on-surface uppercase tracking-wider font-semibold">Categories</h3>
          <ul class="space-y-2.5">
            <li><NuxtLink to="/products" class="text-sm text-slate-500 hover:text-slate-700 transition-colors">Laptops & Workstations</NuxtLink></li>
            <li><NuxtLink to="/products" class="text-sm text-slate-500 hover:text-slate-700 transition-colors">Flagship Smartphones</NuxtLink></li>
            <li><NuxtLink to="/products" class="text-sm text-slate-500 hover:text-slate-700 transition-colors">High-Fidelity Audio</NuxtLink></li>
            <li><NuxtLink to="/products" class="text-sm text-slate-500 hover:text-slate-700 transition-colors">Displays & Peripherals</NuxtLink></li>
          </ul>
        </div>

        <!-- Support Column -->
        <div class="space-y-3">
          <h3 class="font-label-caps text-label-caps text-on-surface uppercase tracking-wider font-semibold">Customer Support</h3>
          <ul class="space-y-2.5">
            <li><NuxtLink to="/about" class="text-sm text-slate-500 hover:text-slate-700 transition-colors">Delivery in Nairobi & Nationwide</NuxtLink></li>
            <li><NuxtLink to="/about" class=" text-sm text-slate-500 hover:text-slate-700 transition-colors">Official Warranty & Repairs</NuxtLink></li>
            <li><NuxtLink to="/about" class="text-sm text-slate-500 hover:text-slate-700 transition-colors">Order Tracking</NuxtLink></li>
            <li><NuxtLink to="/about" class=" text-sm text-slate-500 hover:text-slate-700 transition-colors">Payment Verification (M-PESA/Card)</NuxtLink></li>
          </ul>
        </div>

        <!-- Newsletter Column -->
        <div class="space-y-4">
          <h3 class="text-md text-primary uppercase tracking-wider font-semibold">Stay Informed</h3>
          <p class=" text-sm text-slate-500">Receive technical releases, limited restocks, and architectural hardware notes.</p>
          <form class="flex flex-col gap-2" @submit.prevent>
            <div class="relative flex items-center">
              <input
                  type="email"
                  placeholder="Enter your email"
                  class="w-full px-3.5 py-2.5 bg-surface rounded text-body-sm font-body-sm text-on-surface border border-outline-variant/60 focus:outline-none focus:border-primary placeholder:text-on-surface-variant/60"
              />
              <button class="absolute right-1 px-3 py-1.5 bg-primary text-white font-label-sm text-xs rounded hover:bg-primary-container transition-colors">
                Join
              </button>
            </div>
            <span class=" text-xs text-slate-500">No spam. Authentic product updates only.</span>
          </form>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-12 mt-12 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-xs text-slate-500">© 2025 Nuvana Electronics Kenya. All rights reserved.</p>
        <div class="flex items-center gap-6">
          <span class=" text-xs text-slate-500">Official Importer & Authorized Retailer</span>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import {Store, Mail, Phone} from 'lucide-vue-next'
</script>
