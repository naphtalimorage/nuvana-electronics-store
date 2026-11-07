<template>
  <button
      :class="cn(
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50',
      variant === 'default' ? 'bg-gray-900 text-gray-50 shadow hover:bg-gray-900/90' : '',
      variant === 'outline' ? 'border border-gray-200 bg-white shadow-sm hover:bg-gray-100 hover:text-gray-900' : '',
      size === 'default' ? 'h-9 px-4 py-2' : '',
      size === 'lg' ? 'h-10 rounded-md px-8' : '',
      props.class
    )"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { cn } from '~/lib/utils'
const props = defineProps<{
  variant?: 'default' | 'outline'
  size?: 'default' | 'lg'
  class?: string
}>()
</script>
