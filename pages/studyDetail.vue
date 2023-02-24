<template>
<NuxtLayout name="other">
    <template #header> 其他页面</template>
    <div class="studyWrap">
        <NewsList />
        <NewsDetail />
    </div>
</NuxtLayout>
  首页
</template>
<script>
export default {
  layout: false,
}
</script>
<style scoped>
.studyWrap {
    display: flex;
    justify-content: space-between;
}
</style>