<script setup lang="ts">
import { useUIState } from '~/composables/useUIState'

const appConfig = useAppConfig()
const {toggleSearch} = useUIState()
const {metaSymbol} = useShortcuts()
const {$ui} = useNuxtApp()
const props = withDefaults(defineProps<{
  label?: string | null
}>(), {
  label: 'Search...'
})
</script>

<template>
  <UButton
    :icon="appConfig.ui.icons.search"
    :label="(label as string)"
    v-bind="((!!label ? $ui.button.input : $ui.button.secondary) as any)"
    aria-label="Search"
    :class="[!!label && 'flex-1']"
    @click="toggleSearch"
  >
    <template v-if="!!label" #trailing>
      <div class="hidden lg:flex items-center gap-0 ml-auto -my-1 flex-shrink-0">
        <UKbd>{{ metaSymbol }}</UKbd>
        <UKbd>K</UKbd>
      </div>
    </template>
  </UButton>
</template>

<style scoped lang="scss">

</style>
