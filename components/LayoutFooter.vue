<script setup lang="ts">

const {$ui} = useNuxtApp()
</script>

<template>
  <footer class="relative">
    <div class="border-t border-gray-200 dark:border-gray-800">
      <UContainer class="py-8 lg:py-12 lg:flex lg:items-center lg:justify-between !py-6">
        <div class="lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3">
          <UButton aria-label="Code-Kingdom on X" to="https://x.com/ImprisondL" target="_blank" icon="i-simple-icons-x" v-bind="($ui.button.secondary as any)" />
          <UButton aria-label="Code-Kingdom on Discord" to="https://discord.com/invite/anXJnvx8" target="_blank" icon="i-simple-icons-discord" v-bind="($ui.button.secondary as any)" />
          <UButton aria-label="Code-Kingdom on GitHub" to="https://github.com/xxwangkaimin" target="_blank" icon="i-simple-icons-github" v-bind="($ui.button.secondary as any)" />
        </div>
        <div class="mt-3 lg:mt-0 lg:order-2 flex items-center justify-center" />
        <div class="flex flex-col items-center justify-center md:flex-row lg:justify-start lg:flex-1 gap-x-1.5 mt-0.5 lg:mt-0 lg:order-1 text-gray-500 dark:text-gray-400 text-sm">
          <span>Copyright © {{ new Date().getFullYear() }} Code-Kingdom </span>
          <NuxtLink class="hover:underline mt-1 md:mt-0" to="https://github.com/nuxt/nuxt/blob/main/LICENSE" target="_blank">豫ICP备18001054号-1</NuxtLink>
        </div>
      </UContainer>
    </div>
  </footer>
</template>

<style scoped lang="scss">
</style>
