import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: process.env.APP_BASE_PATH || "/",
  title: "Vue 组件库模板",
  description: "A VitePress Site",
  vite: {
    plugins: [
      VueMacros.vite({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vueJsx: vueJsx(),
        },
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/index' },
      { text: '关于', link: '/about' }
    ],

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '组件库模板', link: '/introduction' },
          { text: '关于', link: '/about' },
        ]
      },
      {
        text: '基础组件',
        items: [
          {text: 'Button', link: '/components/button' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SuYxh/vue-ui-template' }
    ]
  }
})
