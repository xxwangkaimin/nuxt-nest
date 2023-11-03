<script setup lang="ts">
import { useColorMode } from '#imports'

const colorMode = useColorMode()
const appConfig = useAppConfig()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UButton
      :icon="isDark ? (appConfig.ui as any).icons.dark : (appConfig.ui as any).icons.light"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="isDark = !isDark"
    />
  </ClientOnly>
</template>

<style scoped lang="scss">

</style>
