<script setup lang="ts">
import { getArticleInfo } from '~/api'

const route = useRoute()
const id = route.params.id as string
const {data: article} = await getArticleInfo({id})
</script>

<template>
  <UContainer :ui="{ constrained: 'max-w-4xl'}">
    <Page>
      <PageHeader :title="article.title" :description="article.description">
        <template #headline>
          {{ article.articleColumn.name }} <span class="text-gray-500 dark:text-gray-400">·</span>
          <time class="text-gray-500 dark:text-gray-400"> {{ article.publishTime }}</time>
        </template>
      </PageHeader>
      <PageBody prose>
        <div v-html="article.content" />
      </PageBody>
    </Page>
  </UContainer>
</template>

<style scoped lang="scss">

</style>
