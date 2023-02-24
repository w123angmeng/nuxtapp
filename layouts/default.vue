<template>
<div class="page">
<Header />
<!-- <Breadcrumb /> -->
<!-- <NewsList />
<NewsDetail /> -->
<slot />
<Footer />
</div>
</template>
<script>
export default {
  layout: 'default',
}
</script>
<style scoped>
.page{
    width: 1300px;
    margin: 0 auto;
}
</style>