<template>
  <ul class="product-list">
    <CatalogProductListItem
      :product="product"
      v-for="product of products"
      :key="product.id"
    />
  </ul>
</template>

<script>
import CatalogProductListItem from './CatalogProductListItem'
export default {
  name: 'CatalogProductList',
  components: { CatalogProductListItem },
  props: {
    products: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style scoped lang="scss">
.product-list {
  list-style: none;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  padding: 15px 0 0;
}
</style>
