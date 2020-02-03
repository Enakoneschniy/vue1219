<template>
  <div class="container">
    <pre>
      {{ product }}
    </pre>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  async asyncData ({ $axios, params, error }) {
    try {
      const product = await $axios.$get(`/products/${params.id}`)
      return { product }
    } catch (e) {
      return error(e)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
