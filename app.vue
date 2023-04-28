<template>
  <div>
    <el-config-provider :locale="locale" :size="size">
    <NuxtPage />
    </el-config-provider>
  </div>
</template>


<script setup>
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
  import { ElConfigProvider } from 'element-plus'
  import zhCn from 'element-plus/lib/locale/lang/zh-cn'
// You might choose this based on an API call or logged-in status
// const layout = "main-content";

const nuxtApp = useNuxtApp()
// console.log(nuxtApp)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  nuxtApp.vueApp.component(key, component)
}
const locale = zhCn,
        size = 'default'
nuxtApp.vueApp.component(ElConfigProvider)
//   useHead({
//     titleTemplate: (titleChunk) => {
//       return titleChunk ? `${titleChunk} - 官网1` : '官网1';
//     },
//     meta: [
//         { property: 'keywords', content: `这是一段关键字` },
//         { property: 'description', content: `这是一段文字描述` },
//     ]
//   })
//   import { defineComponent } from 'vue'
//   import { ElConfigProvider } from 'element-plus'
//   import zhCn from 'element-plus/lib/locale/lang/zh-cn'
 


//   export default defineComponent({
//     components: {
//       ElConfigProvider
//     },
//     setup() {
//       return {
//         locale: zhCn,
//         size: 'small',
//       }
//     },
//   })
</script>



