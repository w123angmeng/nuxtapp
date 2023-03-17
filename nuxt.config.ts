// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
//   plugins: [{ src: "plugins/axios" }],
//   modules: ["@element-plus/nuxt", "@nuxtjs/axios"],
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },
  modules: ["@element-plus/nuxt"],
//   publicRuntimeConfig: {
//     API_BASE: '/api',
//     // axios: {
//     //   baseURL:
//     //     process.env.NODE_ENV === "production"
//     //       ? "/api"
//     //       : "https://console-mock.apipost.cn/mock/e785773a-93f5-48e7-83e0-42f601c97a9b/",
//     // },
//   },
//   alias: {
//     "~": "/<rootDir>",
//     "@": "/<rootDir>",
//     assets: "/<rootDir>/assets",
//     public: "/<rootDir>/public",
//   },
//   build: {
//     analyze: {
//       analyzerMode: "static",
//     },
//   },
  devServer: {
    host: "localhost",
    port: 4000,
    https: false,
    url: "http://localhost:4000",
  },
  appConfig: {
    build: {
      analyze: true,
    },
  },
  app: {
    baseURL: process.env.NODE_ENV === "production" ? "./" : "/",
    //   analyze: {
    //     analyzerMode: 'static'
    //   }
    //   head: {
    //     charset: 'utf-8',
    //     viewport: 'width=500, initial-scale=1',
    //     title: '官网',
    //     meta: [
    //        <meta name="description" content="My amazing site">
    //       { name: 'description', content: '这是一段文字描述' },
    //       { name: 'keywords', content: '这是一段关键字' }
    //     ],
    //   }
  },
  nitro: {
    devProxy: { 
        // '/api': 'https://console-mock.apipost.cn/mock/e785773a-93f5-48e7-83e0-42f601c97a9b/api', 
        '/api': { 
            target: 'https://console-mock.apipost.cn/mock/e785773a-93f5-48e7-83e0-42f601c97a9b/api', changeOrigin: true 
        } 
    }
  }
});
