<template>
  <div>
    <!-- User Avatar (Rightmost) -->
    <NuxtLink to="/profile" class="group">
      <UserAvatar
          name="Naphtali Morage"
          :src="profileImage"
          alt="User Profile"
          class="ring-2 ring-outline-variant/60 group-hover:ring-primary transition-all"
      />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import UserAvatar from '~/components/ui/UserAvatar.vue'
import profileImage from './../../assets/images/profile.jpeg'
</script>
