import { ref, computed } from 'vue'

export interface Product {
    id: number
    name: string
    brand: string
    category: string
    description: string
    price: number
    rating: number
    reviews: number
    image: string
    inStock: boolean
}

export function useShopFilters() {
    const activeCategories = ref<string[]>(['Audio'])
    const activeBrands = ref<string[]>(['Apple', 'Sony'])
    const inStockOnly = ref(true)
    const sortBy = ref('featured')
    const priceRange = ref({ min: 5000, max: 450000 })

    const allCategories = ['Laptops', 'Phones', 'Audio', 'Accessories']
    const allBrands = ['Apple', 'Sony', 'Dell', 'Bose', 'Samsung', 'Anker']

    const toggleCategory = (cat: string) => {
        activeCategories.value = activeCategories.value.includes(cat)
            ? activeCategories.value.filter(c => c !== cat)
            : [...activeCategories.value, cat]
    }

    const toggleBrand = (brand: string) => {
        activeBrands.value = activeBrands.value.includes(brand)
            ? activeBrands.value.filter(b => b !== brand)
            : [...activeBrands.value, brand]
    }

    const resetFilters = () => {
        activeCategories.value = []
        activeBrands.value = []
        inStockOnly.value = false
    }

    const filterCount = computed(() =>
        activeCategories.value.length + activeBrands.value.length + (inStockOnly.value ? 1 : 0)
    )

    return {
        activeCategories, activeBrands, inStockOnly, sortBy, priceRange,
        allCategories, allBrands, toggleCategory, toggleBrand, resetFilters, filterCount
    }
}