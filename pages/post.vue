<template>
  <div class="container">
    <pre>
      {{ post.comments }}
    </pre>
    <AddComment :post-id="post.id" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AddComment from '../components/AddComment'
export default {
  name: 'Post',
  components: { AddComment },
  computed: mapGetters({
    post: 'posts/getPost'
  }),
  async fetch ({ store, params }) {
    await store.dispatch('posts/loadPost', params.id)
  }
}
</script>

<style scoped lang="scss">

</style>
