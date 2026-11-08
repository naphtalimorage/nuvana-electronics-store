<template>
  <img
      :class="cn('aspect-square h-full w-full object-cover', props.class)"
      :src="src"
      :alt="alt"
      @error="handleError"
  />
</template>

<script setup lang="ts">
import { cn } from '~/lib/utils'

const props = defineProps<{
  src?: string
  alt?: string
  class?: string
}>()

const emit = defineEmits<{
  (e: 'error'): void
}>()

const handleError = () => {
  emit('error')
}
</script>
