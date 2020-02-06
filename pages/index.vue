<template>
  <div class="container">
    <h1>Home Page</h1>
    <ul>
      <li v-for="post of posts">
        <h3>
          <nuxt-link :to="{ name: 'post', params: { id: post.id } }">
            {{ post.title }}
          </nuxt-link>
          : ({{ post.comments.length }} comments)
        </h3>
        <small>
          <nuxt-link :to="{ name: 'user', params: { id: post.userId } }">
            {{ post.user.name }}
          </nuxt-link>
        </small>
      </li>
    </ul>
    <!-- <input v-model="firstName" type="text">
    <br>
    <input v-model="lastName" type="text">
    <br>
    {{ fullName }}-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  /* data: () => ({
    firstName: 'Vasya',
    lastName: 'Petrov'
  }), */
  computed: {
    ...mapGetters({
      posts: 'posts/getPosts'
    })
    /* fullName () {
      return `${this.firstName} ${this.lastName}`
    } */
  },
  async fetch ({ store }) {
    await store.dispatch('posts/loadPosts')
  }
}
</script>

<style>
</style>
