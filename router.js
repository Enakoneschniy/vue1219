import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/index'
import Catalog from './pages/catalog'
import ProductDetail from './pages/catalog/product-detail'
import About from './pages/about'
import Register from './pages/auth/register'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'register',
        path: '/:lang?/register',
        component: Register
      },
      {
        name: 'catalog',
        path: '/:lang?/catalog',
        component: Catalog
      },
      {
        name: 'product',
        path: '/:lang?/catalog/:id',
        component: ProductDetail
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
