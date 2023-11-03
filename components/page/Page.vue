<script setup lang="ts">
const config = {
  wrapper: 'flex flex-col lg:grid lg:grid-cols-10 lg:gap-8',
  left: 'lg:col-span-2',
  center: {
    base: 'lg:col-span-8',
    full: 'lg:col-span-10'
  },
  right: 'lg:col-span-2 order-first lg:order-last'
}

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  ui?: Partial<typeof config>
  class?: any
}>()

const {ui, attrs} = useUI('page', toRef(props, 'ui'), config, toRef(props, 'class'))
</script>

<template>
  <div :class="ui.wrapper" v-bind="attrs">
    <div v-if="$slots.left" :class="ui.left">
      <slot name="left" />
    </div>

    <div :class="[$slots.left || $slots.right ? ui.center.base : ui.center.full]">
      <slot />
    </div>

    <div v-if="$slots.right" :class="ui.right">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
