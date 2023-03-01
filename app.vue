<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - 官网1` : '官网1';
    },
    meta: [
        { property: 'keywords', content: `这是一段关键字` },
        { property: 'description', content: `这是一段文字描述` },
    ]
  })
</script>
