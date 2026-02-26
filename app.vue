<template>
  <div>
    <NuxtLayout>
      <Transition name="fade" mode="out-in">
        <NuxtPage />
      </Transition>
    </NuxtLayout>
    {{ localeProperties.code }}
  </div>
</template>

<script setup>
const { localeProperties } = useI18n()
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
