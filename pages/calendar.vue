<template>
    <NuxtLayout name="default">
        <Title>我的日历</Title>
        <div class="">
            <div class="type-wrap">
                <div></div>
                <el-radio-group v-model="type" size="small">
                    <el-radio-button label="日" />
                    <el-radio-button label="月" />
                    <el-radio-button label="年" />
                </el-radio-group>
            </div>
            <el-calendar v-model="value" >
                <template #date-cell="{ data }">
                    <!-- <p :class="data.isSelected ? 'is-selected' : ''">
                        {{ data.day.split('-').slice(1).join('-') }}
                        {{ data.isSelected ? '✔️' : '' }}
                    </p> -->
                    <i class="el-icon-edit"></i>
                    <el-button size="mini" type="text" icon="el-icon-edit" @click="handleBudgetControl(scope.row)">详情</el-button>
                    <el-button type="text" @click="btnClickEdit"><i class="el-icon-edit"></i>编辑</el-button>
                    <div class="cal">
                        <div class="cal-item" v-for="(item, ind) in list" :key="item.id">{{ind +1}}. {{item.task}}</div>
                    </div>
                    
                </template>
            </el-calendar>
        </div> 
    </NuxtLayout>
    首页
</template>

<script setup>
import { ref } from 'vue'
const value = ref(new Date())
const list = [
    {
        id: '1',
        task: '任务一'
    },
    {
        id: '2',
        task: '任务二'
    }
]
</script>
<script>
// const { data: count } = await useFetch('/api/financial/getPaymentScheduleList',{method: 'post'})
export default defineNuxtComponent({
  layout: false,
  data(){
    return {
       type: '日',
       editShow: false,
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
  btnClickEdit() {
    this.editShow = true
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
.type-wrap {
    display: flex;
    justify-content: space-between;
}
.contWrap {
    display: flex;
    justify-content: space-between;
}
.cal {

}
.cal-item {
    /* font-size: 12px; */
}
.lWrap {
    width: 400px;
}
.rWrap {
    width: 600px;
    min-height: 600px;
}
</style>