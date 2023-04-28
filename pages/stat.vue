<template>
    <NuxtLayout name="default">
        <Title>统计数据</Title>
        <div class="">
            <div class="type-wrap">
                <div></div>
                <el-radio-group v-model="type" size="small">
                    <el-radio-button label="周" />
                    <el-radio-button label="月" />
                    <el-radio-button label="年" />
                </el-radio-group>
            </div>
            <div v-if="type == '周'">
                <div id="myMap" ref="myMap" style="width:300px;height:300px"></div>
            </div>
            <el-calendar v-model="value" v-if="type == '周'">
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

<script lang="ts" setup>
const { $eChart } = useNuxtApp()
const myMap = ref<HTMLElement>()
onMounted(() => {
    // const myChart = $eChart.init(myMap.value!);
    const myChart = $eChart.init(document.getElementById('myMap'));
    
    // 指定图表的配置项和数据
    const option = {
        series: [
            {
                name: '饼图',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 1048, name: '河南' },
                    { value: 735, name: '河北' },
                    { value: 580, name: '江西' },
                    { value: 484, name: '湖南' },
                    { value: 300, name: '湖北' }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
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