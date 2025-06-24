import type { App } from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import Message, { createMessage, closeAll as closeMessageAll } from '@/components/Message'

import './styles/index.css'

library.add(fas)

const components = [ 
  Button,
  Icon,
  Message
]

const install = (app: App) => {
  components.forEach(compoment => {
    app.component(compoment.name!, compoment)
  })
}

export { 
  install, 
  Button,
  Icon,
  Message,
  createMessage,
  closeMessageAll
}
export default {
  install
}
