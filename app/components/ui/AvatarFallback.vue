<template>
  <div :class="cn(
    'flex h-full w-full items-center justify-center rounded-full bg-surface-container text-on-surface font-semibold',
    props.class
  )">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '~/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>
