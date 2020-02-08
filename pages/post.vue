<template>
  <div class="container">
    <h1>{{ post.title }}</h1>
    <div v-html="post.description" class="description" />
    <AddComment v-if="$auth.loggedIn" :post-id="post.id" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AddComment from '../components/AddComment'
export default {
  name: 'Post',
  auth: false,
  components: { AddComment },
  computed: mapGetters({
    post: 'posts/getPost'
  }),
  async fetch ({ store, params }) {
    await store.dispatch('posts/loadPost', params.id)
  },
  async created () {
    try {
      const comments = await this.$axios.$get('/comments')
      console.log(comments)
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
