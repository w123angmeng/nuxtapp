<template>
    <NuxtLayout name="default">
        <Title>统计数据</Title>
        <div class="">
            <div class="type-wrap">
                <div></div>
                <el-radio-group v-model="type" size="small">
                    <el-radio-button label="日" />
                    <el-radio-button label="月" />
                    <el-radio-button label="年" />
                </el-radio-group>
            </div>
            <el-calendar v-model="value" v-if="type == '日'">
                <template #date-cell="{ data }">
                    <!-- <p :class="data.isSelected ? 'is-selected' : ''">
                        {{ data.day.split('-').slice(1).join('-') }}
                        {{ data.isSelected ? '✔️' : '' }}
                    </p> -->



                    <!-- <el-button icon="el-icon-edit" @click="handleBudgetControl(scope.row)">详情</el-button>
                    <el-button type="primary" :icon="Edit"/> -->
                    <!-- <el-button text @click="btnClickEdit"><i class="el-icon-edit"></i>编辑</el-button> -->
                    <div class="cal">
                        <!-- 编辑 -->
                        <span>{{data.day.split('-').slice(1).join('-')}}</span>
                        <el-icon class="editIcon" color="#409EFC" v-if="data.isSelected" @click="btnClickEdit(data)">
                            <EditPen />
                        </el-icon>
                        
                        <div class="cal-item" v-for="(item, ind) in list" :key="item.id">{{ind +1}}. {{item.task}} {{ data.isSelected ? '✔️' : '' }}</div>
                    </div>

                </template>
            </el-calendar>
            <el-table :data="tableData" border style="width: 100%" v-if="type == '月'">
                <el-table-column :prop="index" :label="`${item}月`" width="180" v-for="(item, index) in tableHeaders" :key="index">
                    <template #default="scope">
                        <!-- {{scope.row}}-{{scope.$index}} -->
                        <div class="cal">
                            <!-- 编辑 -->
                            <el-icon class="editIcon" color="#409EFC" @click="btnClickEdit(scope.row[index])">
                                <EditPen />
                            </el-icon>
                            <div class="cal-item" v-for="(item, ind) in scope.row[index]" :key="ind">{{ind +1}}. {{item.name}}</div>
                        </div>
                    </template>
                </el-table-column>
            </el-table>

            <el-table :data="tableData1" border style="width: 100%" v-if="type == '年'">
                <el-table-column prop="year" label="年份" width="180"></el-table-column>
                <el-table-column :prop="index" :label="`${item}月`" width="180" v-for="(item, index) in tableHeaders" :key="index">
                    <template #default="scope">
                        <!-- {{scope.row}}-{{scope.$index}} -->
                        <div class="cal">
                            <!-- 编辑 -->
                            <el-icon class="editIcon" color="#409EFC" @click="btnClickEdit(scope.row[index])">
                                <EditPen />
                            </el-icon>
                            <div class="cal-item" v-for="(item, ind) in scope.row[index]" :key="ind">{{ind +1}}. {{item.name}}</div>
                        </div>
                    </template>
                </el-table-column>
                
            </el-table>
            <el-dialog v-model="editShow" title="今日计划" width="600px">
                <el-form :model="form" label-width="80px">
                    <el-form-item
                        v-for="(item, index) in form.tasks"
                        :label="`任务${index+1}. `"
                        :key="index">
                        <el-input v-model="item.name" autocomplete="off" class="w_260"/>
                        <!-- 删除 -->
                        <el-icon v-if="index !== 0" color="#409EFC" :size="20" @click="delTask(index)">
                            <Delete />
                        </el-icon>
                        <!-- 新增 -->
                        <el-icon v-if="index == (form.tasks.length-1)" color="#409EFC" :size="20" @click="addTask"><Plus /></el-icon>
                    </el-form-item>
                    <el-form-item label="类型">
                        <el-radio-group v-model="form.type">
                            <el-radio label="1">工作</el-radio>
                            <el-radio label="2">生活</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="心情">
                        <el-input-number v-model="form.mood" :min="1" :max="10" />
                        <!-- <el-icon><Sunny /></el-icon> -->
                        <el-rate v-model="form.mood" allow-half :max="5"/>
                    </el-form-item>
                    
                </el-form>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="editShow = false">取消</el-button>
                        <el-button type="primary" @click="saveTask">
                            保存
                        </el-button>
                    </span>
                </template>
            </el-dialog>
        </div>
    </NuxtLayout>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    const value = ref(new Date())
    const list = [{
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
        data() {
            return {
                type: '日',
                editShow: false,
                form: {
                    tasks: [{
                        id: '',
                        name: ''
                    }],
                    type: '1',
                    mood: '9',
                },
                tableHeaders: ['一', '二', '三', '四', '五', '六', '七' , '八', '九', '十', '十一', '十二'],
                tableData: [{
                    0: [
                        {
                         name: '任务一',
                         type: '1'
                        },
                        {
                         name: '任务二',
                         type: '2'
                        },
                        {
                         name: '任务三',
                         type: '3'
                        }
                    ],
                   1: [
                        {
                         name: '任务一21',
                         type: '1'
                        },
                        {
                         name: '任务二21',
                         type: '2'
                        },
                        {
                         name: '任务三21',
                         type: '3'
                        }
                    ]
                }],
                tableData1: [{
                    year: '2023',
                    0: [
                        {
                         name: '任务一',
                         type: '1'
                        },
                        {
                         name: '任务二',
                         type: '2'
                        },
                        {
                         name: '任务三',
                         type: '3'
                        }
                    ],
                   1: [
                        {
                         name: '任务一21',
                         type: '1'
                        },
                        {
                         name: '任务二21',
                         type: '2'
                        },
                        {
                         name: '任务三21',
                         type: '3'
                        }
                    ]
                }]
            }
        },
        fetchKey: 'ip',
        async asyncData({
            query,
            $axios
        }) {
            return {
                ip: await $fetch('http://icanhazip.com')
            }
        },
        methods: {
            btnClickEdit(data) {
                console.log('点击:', data)
                this.editShow = true
            },
            addTask() {
                this.form.tasks.push({
                    id: '',
                    name: ''
                })
            },
            delTask(index) {
                this.form.tasks.splice(index,1)
            },
            saveTask() {
                let param = this.form.tasks.map(i => {
                    let item = {
                        type: this.form.type,
                        ...i
                    }
                    return item
                })
                console.log('保存：', param)
                // editShow = false
            }
        },

        mounted() {
            console.log('mounted====ip:', this.ip, 'count:', this.count)
            // this.$axios.post("/sapi/api/financial/getPaymentScheduleList", params).then((res) => {
            //     console.log('asyncData2：', res)
            //     data = res
            // });
        },
        updated() {
            console.log('updated====ip:', this.ip, 'count:', this.count)
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
    .w_260 {
        width: 260px;
        margin-right: 10px;
    }
    .editIcon {
        position: absolute;
        top: 0;
        right: 0;
    }

    .cal {
        position: relative;
    }

    .cal-item {
        font-size: 12px;
    }

    .lWrap {
        width: 400px;
    }

    .rWrap {
        width: 600px;
        min-height: 600px;
    }
</style>