import Vue from 'vue'
import SLink from '../components/s-link'

Vue.component('s-link', SLink)

// ----------------------------------------

const eventBus = {}

eventBus.install = function (Vue) {
  Vue.prototype.$eventBus = new Vue()
}

Vue.use(eventBus)
