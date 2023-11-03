<script setup lang="ts">
import { useUIState } from '~/composables/useUIState'
import { useBreakpoints } from '@vueuse/core'

const config = {
  padding: 'p-0 sm:p-4',
  rounded: 'rounded-none sm:rounded-lg',
  width: 'sm:max-w-3xl',
  height: 'h-screen sm:h-12'
}
const props = defineProps<{
  ui?: Partial<typeof config>
}>()
const { isSearchModalOpen } = useUIState()
const { ui, attrs } = useUI('search', toRef(props, 'ui'), config, undefined)
const breakpoints = useBreakpoints({ mobile: 640 })
const isXs = breakpoints.smaller('mobile')
const { usingInput } = useShortcuts()
const canToggleModal = computed(() => isSearchModalOpen.value || !usingInput.value)
const keyword = ref('')

function handleClose() {
  keyword.value = ''
  isSearchModalOpen.value = false
}

function handleSearch() {
  if (keyword.value) {
    navigateTo({ path: `/search/${keyword.value}/1` })
    handleClose()
  } else {
    location.href = '/'
  }
}

defineShortcuts({
  meta_k: {
    usingInput: true,
    whenever: [canToggleModal],
    handler: () => {
      isSearchModalOpen.value = !isSearchModalOpen.value
    }
  },
  escape: {
    usingInput: true,
    whenever: [isSearchModalOpen],
    handler: () => {
      isSearchModalOpen.value = false
    }
  }
})
</script>

<template>
  <UModal
    v-model="isSearchModalOpen"
    :overlay="!isXs"
    :transition="!isXs"
    :ui="ui"
    v-bind="attrs"
  >
    <div class="flex flex-col flex-1 min-h-0">
      <div class="relative flex items-center">
        <Icon name="i-ph-magnifying-glass-duotone" class="pointer-events-none absolute start-4 text-gray-400 dark:text-gray-500 h-5 w-5" />
        <input v-model.trim="keyword" type="text" placeholder="Search..." class="h-[--header-height] sm:h-12 w-full placeholder-gray-400 dark:placeholder-gray-500 bg-transparent border-0 text-gray-900 dark:text-white focus:ring-0 focus:outline-none sm:text-sm px-4 ps-11" @keydown.enter="handleSearch" />
        <UButton aria-label="Close" icon="i-heroicons-x-mark-20-solid" color="gray" variant="ghost" size="xs" class="absolute end-4" @click="handleClose" />
      </div>
    </div>
  </UModal>
</template>

<style scoped lang="scss">

</style>
