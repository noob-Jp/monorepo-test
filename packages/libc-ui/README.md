# Vue组件库模板

> 开箱即用



![image-20240507135225311](https://qn.huat.xyz/mac/202405071352780.png)



![image-20240507135254209](https://qn.huat.xyz/mac/202405071352240.png)



## 特点

- 📚新

  使用目前 `Vue3` 周边最新 ，最全技术：`Vue3.3` +`Typescript4` + ` Vite` + `Vitest` + `Vitepress` + `Vue-test-utils2` + `Rollup` +  `Postcss` 一网打尽。

- 💧专业

  大厂前端项目架构设计思想/开发模式/代码规范/流程

- 🌹单元测试

  常年忽略但是非常重要的内容，简历加分项，使用最新的 Vitest，Vue-test-utils2 完成单元测试

- 📚文档生成工具

  组件库打包和发布以及其他周边流程应有尽有，提供一揽子解决方案



## 安装

```bash
npm i @libc/ui --save
```



## 开始使用

### **全局使用**

```ts
// 引入所有组件
import XElement from '@libc/ui'
// 引入样式
import '@libc/ui/dist/index.css'

import App from './App.vue'
// 全局使用
createApp(App).use(XElement).mount('#app')
```

vue

```vue
<template>
  <x-button>我是 Button</x-button>
</template>
```

### **单个导入**

X Element 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。

```vue
<template>
  <Button>我是 Button</Button>
</template>

<script>
  import { Button } from '@libc/ui'
  
  export default {
    components: { Button },
  }
</script>
```
