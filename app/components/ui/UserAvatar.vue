<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import Avatar from './Avatar.vue'
import AvatarImage from './AvatarImage.vue'
import AvatarFallback from './AvatarFallback.vue'

const props = defineProps<{
  src?: string
  alt?: string
  name?: string
  class?: string
}>()

const imageError = ref(false)

const fallbackText = computed(() => {
  // 1. If no name is provided, return default 'U'
  if (!props.name) return 'U'

  // 2. Split the name into words
  const names = props.name.trim().split(' ')

  // 3. Assign to variables with a fallback empty string.
  // This guarantees to TypeScript that 'first' and 'second' are ALWAYS strings.
  const first = names[0] || ''
  const second = names[1] || ''

  // 4. If we have a second word, use the first letter of both
  if (second) {
    return (first.charAt(0) + second.charAt(0)).toUpperCase()
  }

  // 5. Otherwise, just use the first two letters of the first word
  return first.substring(0, 2).toUpperCase()
})

// Reset error when src changes
watch(() => props.src, () => {
  imageError.value = false
})
</script>

<template>
  <Avatar :class="props.class">
    <AvatarImage
      v-if="src && !imageError"
      :src="src"
      :alt="alt"
      @error="imageError = true"
    />
    <AvatarFallback v-if="!src || imageError">
      {{ fallbackText }}
    </AvatarFallback>
  </Avatar>
</template>
