import { createSharedComposable } from '@vueuse/core'

const _useUIState= () => {
  const isHeaderDialogOpen = ref(false)
  const isSearchModalOpen = ref(false)

  function toggleSearch() {
    if (isHeaderDialogOpen.value) {
      isHeaderDialogOpen.value = false

      setTimeout(() => {
        isSearchModalOpen.value = !isSearchModalOpen.value
      }, 0)
      return
    }
    isSearchModalOpen.value = !isSearchModalOpen.value
  }

  return {
    isHeaderDialogOpen,
    isSearchModalOpen,
    toggleSearch
  }
}

export const useUIState = createSharedComposable(_useUIState)
