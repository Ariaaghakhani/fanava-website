<template>
  <div class="locale-transition-wrapper" :class="{ 'locale-transitioning': isLocaleChanging }">
    <NuxtLayout>
      <Transition name="fade" mode="out-in">
        <NuxtPage />
      </Transition>
    </NuxtLayout>
    {{ localeProperties.code }}
  </div>
</template>

<script setup>
const { locale, localeProperties } = useI18n()
const { isLocaleChanging } = useLocaleTransition()
useHead(
  computed(() => ({
    htmlAttrs: {
      dir: localeProperties.value.dir,
      lang: localeProperties.value.language,
    },
  }))
)
</script>

<style></style>
