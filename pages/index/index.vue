<script setup lang="ts">
import { getArticleList } from '~/api'

const appConfig = useAppConfig()
const {data} = await getArticleList({
  index: 1,
  size: (appConfig.ui as any).pagination.default.pageCount as number
})
const {list: articles, pages, total} = data
</script>

<template>
  <UContainer>
    <Page>
      <PageBody>
        <BlogList :articles="articles" :pages="pages" :total="total" parent="index" />
      </PageBody>
    </Page>
  </UContainer>
</template>

<style scoped lang="scss">

</style>
