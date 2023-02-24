<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    router
  >
    <el-menu-item index="/">LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="/">发现研究</el-menu-item>
    <el-sub-menu index="/studyDetail">
      <template #title>关于研究</template>
      <el-menu-item index="/studyDetail">研究相关</el-menu-item>
      <!-- <el-menu-item index="2-2">其他网站研究</el-menu-item> -->
      <!-- <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu> -->
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>提交研究</template>
      <el-menu-item index="3-1">提交研究1</el-menu-item>
      <el-menu-item index="3-2">提交研究2</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="4">
      <template #title>资料</template>
      <el-menu-item index="4-1">资料1</el-menu-item>
      <el-menu-item index="4-2">资料2</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="5">
      <template #title>关于网站</template>
      <el-menu-item index="5-1">资料1</el-menu-item>
      <el-menu-item index="5-2">资料2</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="6">
      <template #title>PRS 登录</template>
    </el-sub-menu>
  </el-menu>
</template>
<style>
.flex-grow {
  flex-grow: 1;
}
</style>