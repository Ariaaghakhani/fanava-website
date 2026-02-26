<template>
  <div>
    <TheHeader />
    <UContainer class="py-4">
      <main class="min-h-screen">
        <LanguageSwitcher />
        <slot />
      </main>
    </UContainer>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '~/components/general/TheHeader.vue'
import TheFooter from '~/components/general/TheFooter.vue'
import LanguageSwitcher from '~/components/general/LanguageSwitcher.vue'
</script>
