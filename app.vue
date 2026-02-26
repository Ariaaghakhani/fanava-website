<template>
  <div>
    <Transition name="locale" mode="out-in">
      <div :key="locale">
        <NuxtLayout>
          <Transition name="fade" mode="out-in">
            <NuxtPage />
          </Transition>
        </NuxtLayout>
        {{ localeProperties.code }}
      </div>
    </Transition>
  </div>
</template>

<script setup>
const { locale, localeProperties } = useI18n()
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
