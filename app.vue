<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
<script setup>
const nuxtApp = useNuxtApp()
console.log(nuxtApp.$api);
</script>