<script setup lang="ts">
import type { ArticleVo } from '~/api/types'
import type { PropType } from 'vue'

const props = defineProps({
  /**
   * 博客列表
   */
  articles: {
    type: Array as PropType<ArticleVo[]>,
    default() {
      return []
    }
  },
  /**
   * 当前页码数
   */
  page: {
    type: Number,
    default: 1
  },
  /**
   * 博客总页数
   */
  pages: {
    type: Number,
    default: 0
  },
  /**
   * 博客总条数
   */
  total: {
    type: Number,
    default: 0
  },
  /**
   * 父级
   */
  parent: {
    type: String,
    default: 'index'
  }
})
/**
 * 是否显示分页组件
 */
const showPager = computed(() => props.pages > 1)
const emit = defineEmits(['update:page'])
const currentPage = computed({
  get() {
    return props.page
  },
  set(val) {
    emit('update:page', val)
  }
})
const appConfig = useAppConfig()
watch(() => currentPage.value, function(val) {
  console.log(val)
})
</script>

<template>
  <PageGrid>
    <PageCard
      v-for="(article, index) in articles"
      :key="index"
      :to="'/article/' + article.id"
      :title="article.title"
      class="flex flex-col"
      :ui="{
      divide: '',
      header: { base: 'aspect-w-4 aspect-h-2', padding: '' },
      footer: { padding: 'pt-0' },
      title: 'text-lg',
      description: 'line-clamp-2'
    }"
    >
      <template #header>
        <NuxtImg
          :src="article.pic"
          :alt="article.title || ''"
          :loading="index === 0 ? 'eager' : 'lazy'"
          class="object-cover object-top w-full h-full"
          width="384"
          height="192"
        />
      </template>
      <template #icon>
        <UBadge :label="article.articleColumn.name" variant="subtle" />
      </template>
      <template #footer>
        <div class="flex items-center justify-between gap-3">
          <time class="text-gray-500 dark:text-gray-400">{{ article.publishTime }}</time>
        </div>
      </template>
    </PageCard>
  </PageGrid>
  <div class="mt-10 w-full flex justify-center items-center">
    <UPagination v-model="currentPage" v-if="showPager" :page-count="(appConfig.ui as any).pagination.default.pageCount as number" :total="total" :max="5" />
  </div>
</template>

<style scoped lang="scss">

</style>
