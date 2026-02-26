<script setup>
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() =>
  locales.value.filter((i) => i.code !== locale.value)
)
</script>

<template>
  <button
    v-for="lang in availableLocales"
    :key="lang.code"
    class="bg-amber-300 px-4 py-2 rounded"
    @click="setLocale(lang.code)"
  >
    {{ lang.name }}
  </button>
</template>
