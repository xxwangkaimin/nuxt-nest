<template>
  <Html>
  <Head>
    <Title>前端博客</Title>
    <Meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=0,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0" />
    <Meta name="description" content="主要工作WEB前端开发，偶尔看看后端技术，喜欢科学、历史以及动漫" />
    <Meta name="keywords" content="前端博客，JavaScript，HTML，CSS，Vue，Koa，Nuxt" />
  </Head>
  <Body>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <Main>
        <NuxtPage />
      </Main>
    </NuxtLayout>
  <ClientOnly>
    <SearchModal />
  </ClientOnly>
  </Body>
  </Html>
</template>
<script setup lang="ts">

</script>
