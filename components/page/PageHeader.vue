<script setup lang="ts">
const config = {
  wrapper: 'relative border-b border-gray-200 dark:border-gray-800 py-8',
  container: 'flex flex-col lg:flex-row lg:items-center lg:justify-between',
  headline: 'mb-4 text-sm/6 font-semibold text-primary capitalize flex items-center gap-1.5',
  title: 'text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight',
  description: 'mt-4 text-lg text-gray-500 dark:text-gray-400',
  icon: {
    wrapper: 'flex',
    base: 'w-10 h-10 flex-shrink-0 text-primary'
  }
}
defineOptions({
  inheritAttrs: false
})

const props = withDefaults(defineProps<{
  headline?: string
  title?: string
  description?: string
  icon?: string | null
  ui?: Partial<typeof config>
  class?: any
}>(), {
  headline: undefined,
  title: '',
  description: '',
  icon: null,
  ui: () => ({}),
  class: undefined
})
const {ui, attrs} = useUI('page.header', toRef(props, 'ui'), config, toRef(props, 'class'))
</script>

<template>
  <div :class="ui.wrapper" v-bind="attrs">
    <p v-if="headline || $slots.headline" :class="ui.headline">
      <slot name="headline">{{ headline }}</slot>
    </p>
    <div class="flex flex-col lg:flex-row items-start gap-6">
      <div v-if="icon || $slots.icon" :class="ui.icon.wrapper">
        <slot name="icon">
          <UIcon :name="(icon as string)" :class="ui.icon.base" />
        </slot>
      </div>
    </div>
    <div class="flex-1">
      <div :class="ui.container">
        <h1 :class="ui.title">
          <slot name="title">{{ title }}</slot>
        </h1>
      </div>
      <p v-if="description || $slots.description" :class="ui.description">
        <slot name="description">{{ description }}</slot>
      </p>
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
