<template>
  <div class="h-100 d-flex flex-column justify-content-center align-content-center">
    <h3 class="text-center text-danger">
      {{ error.message }}
    </h3>
    <p class="text-center text-info">
      <nuxt-link to="/">
        Back to the home page
      </nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Error',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  created () {
    console.log(this.error)
  }
}
</script>

<style scoped lang="scss">
.h-100 {
  height: 100vh !important;
}
</style>
