import { createApp } from 'vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import './style.css'
import App from './App.vue'

let app

function render(props = {}) {
  const target = props.container
    ? props.container.querySelector('#app')
    : document.querySelector('#app')

  if (!target) throw new Error('[my-vue-app] 未找到挂载节点 #app')
  app = createApp(App)
  app.provide('microAppProps', props)
  app.mount(target)
}

renderWithQiankun({
  async bootstrap() {},
  async mount(props) {
    render(props)
  },
  async unmount() {
    app?.unmount()
    app = undefined
  },
  async update() {},
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}
