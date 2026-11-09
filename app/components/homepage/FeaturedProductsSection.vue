<template>
  <section class="w-full py-20 lg:py-24 ">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <span class="font-label-caps text-[10px] text-label-caps text-secondary uppercase font-semibold">Carefully Curated</span>
          <h2 class="font-headline-lg text-2xl font-bold font-serif text-headline-lg text-on-surface mt-1">Featured Flagships</h2>
          <p class="font-body-md text-xs text-slate-600 text-body-md text-on-surface-variant mt-1">Curated selection of our most wanted high-performance devices.</p>
        </div>
        <NuxtLink to="/products" class="inline-flex text-xs items-center gap-1.5 font-title-md text-title-md text-secondary hover:text-on-secondary-fixed-variant transition-colors group">
          <span>View All (128)</span>
          <ArrowRight className="w-5 h-5" size="15"/>
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ProductCard
            v-for="product in products"
            :key="product.id"
            :name="product.name"
            :category="product.category"
            :image="product.image"
            :specs="product.specs"
            :price="product.price"
            :rating="product.rating"
            :reviews="product.reviews"
            @add-to-cart="handleAddToCart"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import  ProductCard from '~/components/common/ProductCard.vue';
import { ArrowRight } from 'lucide-vue-next'
const products = [
  {
    id: 1,
    name: 'AeroBook Pro 16" M3 Max',
    category: 'Workstation',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6YXBaoIrhyHXPpKVp7jrDXPTvREYzUN356AchUc6lCNtozwiNvdkhYb3M1tEU_OY6VFt2Zt7MwU0MRGZM8Iyi13hAO8S9uuvOBQRQjjsDFUzUO3Twm3OVaV7Ou9p9GLoGJfCUKb3c2t19f_0-LisDxymsUhydB-G9MkPQzFG1jUSNmQwW5VpE0LmWDCCMl4QfyHzfWIVNSuNGZpLCzTxw-m3j96CvlNAEG5nEAps',
    specs: '36GB RAM • 1TB SSD • Liquid Retina XDR',
    price: 'KES 389,000',
    rating: 4.9,
    reviews: 124
  },
  {
    id: 2,
    name: 'Sonaudio Apex Wireless ANC',
    category: 'Audio',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCw55S5-l8wIBMI4ZxKcO2QElpMzDqb2xgdYXeE7c2C4-5ENLPksxSNnlrjNzfnmRnIkHdbjBvj2cWn-tl95ET0OBsPhVW_qDfc4hUyKAAmwHHUhAIWr1n7MHO3X25JkbYGVWVqXxgnMIB4cRC8jmIV7Qd-G5elrh89yi1LFiCC5ii-qO7ehJgWAxw6_L7fqqBJDTsGu-hygzlfG677ZNPkKCpdJGHyiGhgD7ib_NM',
    specs: 'Custom Titanium Drivers • Spatial Audio',
    price: 'KES 46,500',
    rating: 4.8,
    reviews: 89
  },
  {
    id: 3,
    name: 'Zenith Ultra 5G Phone (512GB)',
    category: 'Mobile',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBau5fx_90PlcSp-434w2uiSPAZuedge0HpXL6NhK1zZY5dm49iXLoSNkggO00NQRAi-tXeIZ4Lr-4HDDxzGU7inSQwMZrCrqgXuvgF3gMVIFtjnE32VQKA7f6mAqy-3upVUGwenbL0Vm-d7a76aFJ7oUwE6P4r21gUZCtHfTIVe-w6q4MhEHEA-LVrjs2InDb7C1aejyhrJDNb0UszutEpST46dE3_moCaB8n2vbY',
    specs: 'Snapdragon 8 Gen 3 • 200MP Quad Optics',
    price: 'KES 164,999',
    rating: 5.0,
    reviews: 215
  },
  {
    id: 4,
    name: 'Zenith Ultra 5G Phone (512GB)',
    category: 'Mobile',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBau5fx_90PlcSp-434w2uiSPAZuedge0HpXL6NhK1zZY5dm49iXLoSNkggO00NQRAi-tXeIZ4Lr-4HDDxzGU7inSQwMZrCrqgXuvgF3gMVIFtjnE32VQKA7f6mAqy-3upVUGwenbL0Vm-d7a76aFJ7oUwE6P4r21gUZCtHfTIVe-w6q4MhEHEA-LVrjs2InDb7C1aejyhrJDNb0UszutEpST46dE3_moCaB8n2vbY',
    specs: 'Snapdragon 8 Gen 3 • 200MP Quad Optics',
    price: 'KES 164,999',
    rating: 5.0,
    reviews: 215
  }
]

const handleAddToCart = () => {
  // Implement cart logic here
  console.log('Added to cart')
}
</script>
