<template>
  <div
    class="locale-transition-wrapper"
    :class="{ 'locale-transitioning': isLocaleChanging }"
  >
    <UApp>
      <NuxtLayout>
        <Transition name="fade" mode="out-in">
          <NuxtPage />
        </Transition>
      </NuxtLayout>
    </UApp>
  </div>
</template>

<script setup>
const { localeProperties } = useI18n()
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
