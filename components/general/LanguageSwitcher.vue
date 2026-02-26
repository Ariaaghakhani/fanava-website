<script setup>
const { locale, locales, setLocale } = useI18n()
const { switchLocale } = useLocaleTransition()

const availableLocales = computed(() =>
  locales.value.filter((i) => i.code !== locale.value)
)
</script>

<template>
  <UButton
    v-for="lang in availableLocales"
    :key="lang.code"
    class="bg-amber-300 px-4 py-2 rounded"
    @click="switchLocale(setLocale, lang.code)"
  >
    {{ lang.name }}
  </UButton>
</template>
