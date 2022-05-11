import { defineNuxtConfig } from "nuxt";
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
      '@nuxtjs/tailwindcss',
      '@pinia/nuxt',
  ],
  build: {
    transpile: ['vueuc'],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  vite: {
    plugins: [
        Components({
            resolvers: [NaiveUiResolver()], // Automatically register all components in the `components` directory
        }),
    ],
    ssr: {
        noExternal: ['moment', 'naive-ui', '@juggle/resize-observer', ]
    }
},
    // 公共的配置
    publicRuntimeConfig: {
        apiUrl: process.env.API_URL,
    },
});
