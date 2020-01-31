import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/index'
import Catalog from './pages/catalog'
import About from './pages/about'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'catalog',
        path: '/:lang?/catalog',
        component: Catalog
      },
      {
        name: 'about',
        path: '/:lang?/about',
        component: About
      },
      {
        name: 'home',
        path: '/:lang?',
        component: Home
      }
    ]
  })
}
