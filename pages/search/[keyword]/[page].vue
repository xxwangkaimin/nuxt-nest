<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <p>{{ route.params.keyword}}</p>
    <p>{{ route.params.page }}</p>
  </div>
</template>

<style scoped lang="scss">

</style>
