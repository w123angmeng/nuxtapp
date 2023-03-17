<template>
    <NuxtLayout name="default">
        <Title>首页</Title>
        <template #header> 一些标题模板内容。 </template>
        <div class="contWrap">
            <div class="lWrap">
                {{ip}}
                这{{ip}}是{{count}}一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述这是一段文字描述
            </div>
            <el-card class="box-card rWrap">
                <el-divider content-position="left">表单</el-divider>
                <el-form
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
  </el-form>
            </el-card>
        </div>
    </NuxtLayout>
    首页
</template>


<script>
// const { data: count } = await useFetch('/api/financial/getPaymentScheduleList',{method: 'post'})
export default defineNuxtComponent({
  layout: false,
  data(){
    return {
       ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
       },
       rules: [

       ]
    }
  },
  fetchKey: 'ip',
  async asyncData({ query, $axios }) {
    return {
        ip: await $fetch('http://icanhazip.com')
    }
  },
  mounted() {
    console.log('mounted====ip:',this.ip, 'count:', this.count)
    // this.$axios.post("/sapi/api/financial/getPaymentScheduleList", params).then((res) => {
    //     console.log('asyncData2：', res)
    //     data = res
    // });
  },
  updated() {
    console.log('updated====ip:',this.ip, 'count:', this.count)
  }

})
</script>




<style scoped>
.contWrap {
    display: flex;
    justify-content: space-between;
}
.lWrap {
    width: 400px;
}
.rWrap {
    width: 600px;
    min-height: 600px;
}
</style>