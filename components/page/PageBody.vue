<script setup lang="ts">
const config = {
  wrapper: 'mt-8 pb-12',
  prose: 'prose prose-primary dark:prose-invert max-w-none'
}
defineOptions({
  inheritAttrs: false
})

const props = withDefaults(defineProps<{
  prose?: boolean
  ui?: Partial<typeof config>
  class?: any
}>(), {
  prose: false,
  ui: () => ({}),
  class: undefined
})

const {ui, attrs} = useUI('page.body', toRef(props, 'ui'), config, toRef(props, 'class'))
</script>

<template>
  <div :class="[ui.wrapper, prose && ui.prose]" v-bind="attrs">
    <slot />
  </div>
</template>

<style scoped lang="scss">

</style>
