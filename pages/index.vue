<template>
<!-- <Header />
<Breadcrumb />
<NewsList />
<NewsDetail /> -->
<NuxtLayout name="default">
    <Title>首页</Title>
    <template #header> 一些标题模板内容。 </template>
    <div class="contWrap">
        <div class="lWrap">
            {{data}}
            这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述
        </div>
        <el-card class="box-card rWrap">
        <el-divider content-position="left">表单</el-divider>
        <!-- <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-form-item label="Password">
      <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item label="Confirm">
      <el-input
        v-model="ruleForm.checkPass"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item label="Age">
      <el-input v-model.number="ruleForm.age" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >Submit</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form> -->
  </el-card>
    </div>
</NuxtLayout>
  首页
</template>
<script setup>
const { data } = await useAsyncData('hello', () => $fetch('/api/hello'))
// export default {
//   layout: false,
//   data(){
//     return {
//        ruleForm: {
//         pass: '',
//         checkPass: '',
//         age: ''
//        },
//        rules: [

//        ]
//     }
//   }
// }
</script>




<style scoped>
.contWrap {
    display: flex;
    justify-content: space-between;
}
.lWrap{
    width: 400px;
}
.rWrap {
    width: 600px;
    min-height: 600px;
}
</style>