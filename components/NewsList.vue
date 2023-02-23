<template>
     <el-card class="newsListWrap box-card">
        <template #header>
        <div class="card-header">
          <span>热点文章</span>
          <!-- <el-button class="button" text>Operation button</el-button> -->
        </div>
      </template>
      <el-scrollbar>
        <el-link type="primary">文章一</el-link>
        <el-link type="primary">文章二</el-link>
        <el-link type="primary">文章三</el-link>
        <el-link type="primary">文章四</el-link>
        <el-link type="primary">文章一</el-link>
        <el-link type="primary">文章二</el-link>
        <el-link type="primary">文章三</el-link>
        <el-link type="primary">文章四</el-link>
      </el-scrollbar>
    </el-card>
</template>
<style scoped>
.newsListWrap{
    width: 200px;
    height: 300px;
}
</style>