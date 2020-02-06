import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/index'
import About from './pages/about'
import User from './pages/user'
import Post from './pages/post'
import Profile from './pages/profile'
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
        name: 'about',
        path: '/:lang?/about',
        component: About
      },
      {
        name: 'user',
        path: '/:lang?/user/:id',
        component: User
      },
      {
        name: 'profile',
        path: '/:lang?/profile',
        component: Profile
      },
      {
        name: 'post',
        path: '/:lang?/post/:id',
        component: Post
      },
      {
        name: 'home',
        path: '/:lang?',
        component: Home
      }
    ]
  })
}
