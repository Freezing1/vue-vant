import Vue from 'vue'
import Main from './main.vue'

const DialogConstructor = Vue.extend(Main)

let instance
const Dialog = function (options) {
  options = options || {}
  instance = new DialogConstructor({
    data: options
  })
  instance.vm = instance.$mount() // 挂载但是并未插入dom
  document.body.appendChild(instance.vm.$el)
  return instance.vm
}
export default Dialog
