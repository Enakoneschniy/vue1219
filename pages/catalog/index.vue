<template>
  <div class="container">
    <h1>Catalog Page</h1>
    <CatalogProductList :products="products" />
  </div>
</template>

<script>
import CatalogProductList from '../../components/CatalogProductList'
export default {
  name: 'Catalog',
  components: { CatalogProductList },
  data: () => ({
    products: [
      {
        id: 1,
        title: 'Product 1',
        price: 123
      },
      {
        id: 2,
        title: 'Product 2',
        price: 657
      },
      {
        id: 3,
        title: 'Product 3',
        price: 56
      },
      {
        id: 4,
        title: 'Product 4',
        price: 56
      },
      {
        id: 5,
        title: 'Product 5',
        price: 56
      }
    ]
  }),
  methods: {
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
