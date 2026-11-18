<script setup lang="ts">
import FilterSidebar from "~/components/shop/FilterSidebar.vue";
import { useShopFilters, type Product } from '~/composables/useShopFilters'
import ProductCard from "~/components/common/ProductCard.vue";

const { sortBy, activeCategories, inStockOnly } = useShopFilters()



const products = ref<Product[]>([
  { id: 1, name: 'Studio Sound X7 Over-Ear', brand: 'Sony Acoustics', category: 'Audio', description: 'Active noise cancellation, 40mm beryllium drivers, 38h battery.', price: 34500, rating: 4.9, reviews: 84, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5d9ZvMhcrxTJEFElf4SBBek8GoANqSsh6xG5iyPb-HVm5XHIp-8Mq5yb-RmFGDlyJaGuwncHbRYO1IgiFA5NKi7Skeg59XGyFEkTvesaotoMzg8xi2m-Fwq7SD7PKFReQ3Tnk452zgQwhHFaTt6zko3gKUtOYQYCfYZ5fxVpanwQSBG1H0Et_37ynQn7yvs_7zTRW9Yh2AMfbxsu6qZJV0BkQ0BDWOcwPajfzTyQ', inStock: true },
  { id: 2, name: 'PrecisionBook Ultra 14"', brand: 'Apple Silicon', category: 'Laptops', description: 'M3 Pro chip, 36GB Unified Memory, 1TB SSD, Liquid Retina XDR.', price: 215000, rating: 5.0, reviews: 142, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgl89Ez9dLR7HOeJwAJtiWvv273BvznaCGK_8fcCr86uQOjl1ZWhd5rVBdkbXHoveC0Ppu4mwJnrRpTP8FdBY4ISpMlgQYLS3pbrfbFCb3ePwJie7sWoTpV5oaFFEsp1JhiWFRizbREgTkZHbPkMFas5Ou9gPTEFk7HNevthTDD0fz8tbvcSoL40KRdCQCql66zLn271xBieLH7m76FZAQxC00JHnc_uoe5MGL8oE', inStock: true },
  { id: 3, name: 'Nova Pro 5G Smartphone', brand: 'Samsung Galaxy', category: 'Phones', description: 'Snapdragon 8 Gen 3, 200MP sensor, 512GB titanium gray finish.', price: 128990, rating: 4.8, reviews: 97, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6Y9yR-2yuqTHLhX82BLO1eZYNtaOx3TJtA6gUM4YRXWvsfV1oXjzxU-asyYIEtEf6dV4XPkLDhrt5yLU-s4-n71KhE_v5G8XCkIu3MllHpTb1GZa4w4la9pZk8AmPSSBeZRXL0C6fWnqBM9LLY-wlvT8b5CpmM7TflqYIX3jGjbRyx6QRTGbhNXLsLNrelinAvgrWmuGRa0h56cdM7vI4cwFvTUeM4Jy8tk5VnL4', inStock: true },
  { id: 4, name: 'Hi-Res Wireless Earbuds II', brand: 'Bose Engineering', category: 'Audio', description: 'Lossless LDAC audio, adaptive transparency mode, wireless Qi case.', price: 19500, rating: 4.7, reviews: 63, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAV7VsUgox8rKAOsLGj5d3aFIYSt5MRNTESTn0VhxrFV--yBNJ72LAHtHrZUW5mPOO9Hoy1B9FWdXS1Voz2ZEO7cUBxnqWs4KaPnq8AGWl95pf-tAZXFESiDyCE6oTPa1tA54vHST0qc9qBFxYmcYmL85lXst2lcSBGCAkG5GD1iiB4gGqyRgViIp55msRrh6xqIwsrsFI4c9Cw_fj4dLR92DN4_LLWFA-9FbajPDU', inStock: true },
  { id: 5, name: 'Titan UltraDock 12-in-1', brand: 'Anker Prime', category: 'Accessories', description: 'Thunderbolt 4, 100W PD charging, dual 4K @ 120Hz display passthrough.', price: 14800, rating: 4.9, reviews: 110, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFECfHbLl_5NY_ees2HpGBZnImYVA_IysLgpfkXkTYWSBLkjF3G7fY2vCXkJZX40LRUWcJ2aydQ1H-Yld-5HAefo1mXg1jDffU5gmfrfFctyr5E_e1YgH32YRAaVt1d7227Sb6oCzyz3T8CCyPsBWclBhEs8Zgc3fahIioUCynqdlaA21ksL0vX8Su8xs926D9Aya1ruo6x7uOLtyoN2muZEihffTSbm-aujKl634', inStock: true },
  { id: 6, name: 'Carbon Studio Keyboard', brand: 'Nuvana Custom', category: 'Accessories', description: 'Hot-swappable switches, gasket mounted, tri-mode Bluetooth & 2.4Ghz.', price: 18200, rating: 4.8, reviews: 45, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATIBYtIQrNMDHKUyxBuzmgWN1S_Djt2dYSBVqneKIOyE2qtl4D6le_7LIiStSDnsJ0nqn_jYyd9GKE1H4hfmHC9-npe8Wfc14D5LC29UaGCFBCR47sGTOTJVuM9doZc586U-R1BoHElIrvVUeIyDtN_Ng31cP7LNRv2Oe1c_2rJ75Uu0lPHuSEW-HaR1qtlqArD1VcT6zUbM3tHpFkXau9C6U2zIL8QviATjyGvVs', inStock: true }
])

const filteredProducts = computed(() => {
  let list = [...products.value]
  if (activeCategories.value.length) list = list.filter(p => activeCategories.value.includes(p.category))
  if (inStockOnly.value) list = list.filter(p => p.inStock)
  if (sortBy.value === 'price-low') list.sort((a, b) => a.price - b.price)
  if (sortBy.value === 'price-high') list.sort((a, b) => b.price - a.price)
  if (sortBy.value === 'rating') list.sort((a, b) => b.rating - a.rating)
  return list
})

const handleAddToCart = (product: Product) => {
  console.log('Added:', product.name)
  // TODO: connect to useCart composable
}

// SEO for this page
useHead({
  title: 'All Products | Nuvana Electronics',
  meta: [
    { name: 'description', content: 'Browse premium certified electronics with same-day Nairobi delivery and official Kenyan warranty.' },
    { property: 'og:title', content: 'All Products | Nuvana Electronics' },
    { property: 'og:description', content: 'Premium electronics with same-day Nairobi delivery.' }
  ]
})

</script>

<template>
  <main class="w-full pt-16 bg-zinc-50 h-[1000px] flex flex-col overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col flex-1 min-h-0">
      <div class="shrink-0">
        <ShopHeader/>
        <ShopControls/>
      </div>

      <div class="flex flex-col lg:flex-row gap-8 items-start flex-1 min-h-0 pb-8 pt-8">
        <FilterSidebar class="shrink-0"/>

        <section class="flex-1 w-full min-w-0 min-h-0 lg:h-full overflow-y-auto pr-1">
          <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
            <ProductCard
                v-for="product in filteredProducts"
                :key="product.id"
                :name="product.name"
                :category="product.category"
                :image="product.image"
                :price="product.price"
                :rating="product.rating"
                :reviews="product.reviews"
                @add-to-cart="handleAddToCart"
            />
<!--              <ShopPagination />-->
<!--              <AssuranceBanner />-->
          </div>
<!--          <div v-if="!filteredProducts.length" class="py-20 text-center text-on-surface-variant">-->
<!--            No products match the current filters.-->
<!--          </div>-->
        </section>
      </div>
    </div>
  </main>
</template>

