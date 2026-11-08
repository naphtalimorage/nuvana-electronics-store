<template>
  <span :class="cn(
    'inline-flex items-center rounded-full px-2.5 py-1 font-label-caps text-label-caps uppercase tracking-wider transition-colors',
    {
      'bg-surface-container text-on-surface shadow-sm': variant === 'default',
      'bg-secondary text-on-secondary shadow-sm': variant === 'secondary',
      'border border-outline-variant text-on-surface-variant bg-transparent': variant === 'outline',
      'bg-surface-container-high/80 text-on-surface shadow-sm gap-2': variant === 'hero',
      'bg-transparent text-on-surface-variant hover:bg-surface-container': variant === 'ghost',
    },
    props.class
  )">
    <!-- Optional pulsing dot -->
    <span v-if="dot" class="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>

    <!-- Content -->
    <slot />
  </span>
</template>

<script setup lang="ts">
import { cn } from '~/lib/utils'

const props = defineProps<{
  variant?: 'default' | 'secondary' | 'outline' | 'hero' | 'ghost'
  dot?: boolean
  class?: string
}>()
</script>
