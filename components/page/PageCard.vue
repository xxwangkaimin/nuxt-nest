<script setup lang="ts">
import type { NuxtLinkProps } from '#app'
import { getSlotChildrenText } from '~/utils/slots'

const config = {
  divide: '',
  header: {},
  footer: {},
  wrapper: 'relative group',
  to: 'hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50',
  icon: {
    wrapper: 'mb-6 flex',
    base: 'w-10 h-10 flex-shrink-0 text-primary'
  },
  // title: 'text-gray-900 dark:text-white text-base font-semibold truncate flex items-center gap-1.5 line-clamp-1',
  title: 'text-gray-900 dark:text-white text-base font-semibold line-clamp-1',
  description: 'text-[15px] text-gray-500 dark:text-gray-400 mt-1'
}
defineOptions({
  inheritAttrs: false
})

const props = withDefaults(defineProps<{
  title?: string
  description?: string
  icon?: string
  ui?: Partial<typeof config>
  class?: any
} & NuxtLinkProps>(), {
  icon: ''
})
const {ui, attrs} = useUI('page.card', toRef(props, 'ui'), config, toRef(props, 'class'))

const omittedProps = new Set(['title', 'description', 'icon', 'ui', 'class'])
const nuxtLinkProps = computed(() => {
  const _props: IObject = {}

  for (const prop in props) {
    if (omittedProps.has(prop) || !(props as IObject)[prop]) {
      continue
    }
    _props[prop] = (props as IObject)[prop]
  }

  return _props
})
const ariaLabel = computed(() => (props.title || (useSlots().title && getSlotChildrenText((useSlots() as any).title() as any[])) || 'Card link').trim())
</script>

<template>
  <UCard :class="[ui.wrapper, to && ui.to]" v-bind="attrs" :ui="ui">
    <!--target="_blank"-->
    <NuxtLink v-if="to" :aria-label="ariaLabel" v-bind="nuxtLinkProps" class="focus:outline-none" tabindex="-1">
      <span class="absolute inset-0" aria-hidden="true" />
    </NuxtLink>
    <template v-if="$slots.header" #header>
      <slot name="header" />
    </template>
    <div v-if="icon || $slots.icon" :class="ui.icon.wrapper">
      <slot name="icon">
        <UIcon :name="icon" :class="ui.icon.base" />
      </slot>
    </div>
    <p v-if="title || $slots.title" :class="ui.title" :title="title">
      <slot name="title">{{ title }}</slot>
    </p>
    <p v-if="description || $slots.description" :class="ui.description">
      <slot name="description">{{ description }}</slot>
    </p>
    <slot />
    <template v-if="$slots.footer" #footer>
      <slot name="footer" />
    </template>
  </UCard>
</template>

<style scoped lang="scss">

</style>
