<template>
  <el-breadcrumb separator="/" class="breadcrumb">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item
      ><a href="/">promotion management</a></el-breadcrumb-item
    >
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
  <el-divider />
</template>
<style scoped>
.breadcrumb{
    margin-top: 20px;
}
</style>