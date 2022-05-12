import { defineNuxtConfig } from "nuxt";
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({
  buildModules: [
<<<<<<< HEAD
      '@nuxtjs/tailwindcss',
      '@pinia/nuxt',
  ],
  components: true,
=======
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
>>>>>>> e1e19d3f3e6eea816d7762208e89f4ce24c69fa8
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
<<<<<<< HEAD
},
    // 公共的配置
    publicRuntimeConfig: {
        apiUrl: process.env.API_URL,
    },
=======
  },
  // 公共的配置
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,

  },
>>>>>>> e1e19d3f3e6eea816d7762208e89f4ce24c69fa8
});
