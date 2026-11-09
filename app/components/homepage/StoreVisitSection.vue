<template>
  <section class="w-full py-16 px-16 ">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 bg-white rounded-3xl shadow-2xl">
      <div class=" p-8 lg:p-12  flex flex-col lg:flex-row items-center justify-between gap-8">
        <div class="space-y-1">
          <span class="text-secondary text-[10px] uppercase font-semibold">Nairobi Flagship Lounge</span>
          <h3 class="font-semibold text-xl font-serif">Experience Before You Purchase</h3>
          <p class="font-body-md text-xs text-slate-600 max-w-xl">Visit our sound and computing demo gallery at Westlands, Nairobi. Test high-res gear in soundproof listening pods with our certified hardware specialists.</p>
        </div>
        <div class="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <NuxtLink to="/about" class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-100 text-sm  hover:bg-blue-200 hover:scale-105 active:scale-95 transition-colors">
            Book Listening Session
          </NuxtLink>
          <NuxtLink to="/about" class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white text-sm  hover:scale-105 active:scale-95 transition-colors">
            Store Directions
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
