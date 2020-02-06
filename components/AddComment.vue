<template>
  <div>
    <h4>Add Comment</h4>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="comment">Comment:</label>
        <textarea id="comment" v-model="comment" class="form-control" placeholder="Enter comment" />
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddComment',
  props: {
    postId: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    comment: ''
  }),
  methods: {
    ...mapActions({
      addComment: 'posts/addComment'
    }),
    async onSubmit () {
      await this.addComment({
        text: this.comment,
        postId: this.postId
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
