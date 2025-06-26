import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import { isObject, isFunction } from '@cs-tests/shared'

console.log(isObject(1))
console.log(isFunction(() => {}))

library.add(fas)

import './styles/index.css'

const app = createApp(App)

app.mount('#app')
