<template>
  <div>
    <el-config-provider :locale="locale">
    <NuxtPage />
    </el-config-provider>
  </div>
</template>

//   useHead({
//     titleTemplate: (titleChunk) => {
//       return titleChunk ? `${titleChunk} - 官网1` : '官网1';
//     },
//     meta: [
//         { property: 'keywords', content: `这是一段关键字` },
//         { property: 'description', content: `这是一段文字描述` },
//     ]
//   })
<script>
  import { defineComponent } from 'vue'
  import { ElConfigProvider } from 'element-plus'
  import zhCn from 'element-plus/lib/locale/lang/zh-cn'
  import * as ElementPlusIconsVue from '@element-plus/icons-vue'
  const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
  export default defineComponent({
    components: {
      ElConfigProvider,
      ElementPlusIconsVue
    },
    setup() {
      return {
        locale: zhCn,
      }
    },
  })
</script>
