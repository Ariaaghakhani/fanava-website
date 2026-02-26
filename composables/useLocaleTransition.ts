const isLocaleChanging = ref(false)

export function useLocaleTransition() {
  async function switchLocale(
    setLocale: (code: string) => Promise<void>,
    code: string,
  ) {
    isLocaleChanging.value = true
    await new Promise<void>((resolve) => setTimeout(resolve, 300))
    await setLocale(code)
    isLocaleChanging.value = false
  }

  return { isLocaleChanging, switchLocale }
}
