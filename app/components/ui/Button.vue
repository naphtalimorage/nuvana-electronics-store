<template>
  <button
      :class="cn(
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary disabled:pointer-events-none disabled:opacity-50',
      variant === 'primary' ? 'bg-primary text-white hover:bg-primary/90' : '',
      variant === 'secondary' ? 'bg-secondary text-white hover:bg-secondary/90' : '',
      variant === 'outline' ? 'border border-primary text-primary hover:bg-primary hover:text-white' : '',
      variant === 'ghost' ? 'hover:bg-neutral/10' : '',
      size === 'default' ? 'h-10 px-4 py-2' : '',
      size === 'sm' ? 'h-9 rounded-md px-3' : '',
      size === 'lg' ? 'h-11 rounded-md px-8' : '',
      props.class
    )"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { cn } from '~/lib/utils'

const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  class?: string
}>()
</script>
