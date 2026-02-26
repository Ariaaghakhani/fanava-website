<template>
  <div class="container">
    <TheHeader />
    <main class="min-h-screen">
      <LanguageSwitcher />
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '~/components/general/TheHeader.vue'
import TheFooter from '~/components/general/TheFooter.vue'
import LanguageSwitcher from '~/components/general/LanguageSwitcher.vue'
</script>
