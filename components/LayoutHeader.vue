<script setup lang="ts">
import { Icon } from '#components'

const {metaSymbol} = useShortcuts()
const {$ui} = useNuxtApp()
</script>

<template>
  <header class="bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50 lg:mb-0 lg:border-0">
    <UContainer>
      <div class="flex items-center justify-between gap-3 h-[--header-height]">
        <div class="lg:flex-1 flex items-center gap-1.5">
          <a href="/" aria-label="Logo" class="flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5 cursor-pointer">
            <Icon name="logos:nuxt-icon" class="text-black dark:text-white block w-auto h-6" />
            <span class="text-black dark:text-white h-6">Code-Kingdom</span>
          </a>
        </div>
        <div class="flex items-center justify-end lg:flex-1 gap-1.5">
          <UTooltip text="Search" :shortcuts="[metaSymbol, 'K']">
            <SearchButton :label="null" />
          </UTooltip>
          <UTooltip :text="$colorMode.preference === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'">
            <ColorModeButton />
          </UTooltip>
          <UTooltip text="GitHub Stars">
            <UButton
              icon="i-simple-icons-github"
              to="https://github.com/xxwangkaimin"
              target="_blank"
              v-bind="($ui.button.secondary as any)"
            />
          </UTooltip>
        </div>
      </div>
    </UContainer>
  </header>
</template>

<style lang="scss" scoped>

</style>
