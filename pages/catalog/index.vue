<template>
  <div class="container">
    <h1>Catalog Page</h1>
    <CatalogProductList :products="cart" />
    <hr>
    <CatalogProductList @buy="onBuy" :products="products" />
  </div>
</template>

<script>
import CatalogProductList from '../../components/CatalogProductList'
export default {
  name: 'Catalog',
  components: { CatalogProductList },
  data: () => ({
    cart: []
  }),
  async asyncData ({ $axios }) {
    let products = []
    try {
      products = await $axios.$get('/products')
    } catch (e) {
      console.log(e)
    }
    return { products }
  },
  methods: {
    onBuy (product) {
      this.cart.push(product)
      const index = this.products.findIndex(p => p.id === product.id)
      this.products.splice(index, 1)
    },
    onClick (message, e) {
      this.products.push({
        id: 3,
        title: 'Product 3',
        price: 56
      })
    }
  }
}
</script>

<style>
</style>
