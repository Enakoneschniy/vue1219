<template>
  <li @click="onGoToDetail" class="card product-item">
    <img src="https://via.placeholder.com/286" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">
        {{ product.title }}
      </h5>
      <div class="card-text product-item-price">
        <strong>
          {{ product.price }} UAH
        </strong>
        <button @click.prevent.stop="onBuy" class="btn btn-outline-primary">
          Buy
        </button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'CatalogProductListItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    onBuy () {
      this.$emit('buy', this.product)
      // console.log(`Buy: ${this.product.id}`)
    },
    onGoToDetail () {
      this.$router.push({
        name: 'product',
        params: {
          id: 23
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.product-item {
  width: 16rem;
  margin-right: 15px;
  margin-bottom: 15px;
  transition: all ease .3s;
  cursor: pointer;

  &-price {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 24px;
    }
  }
  &:hover {
    transform: scale(1.03);
  }
}
</style>
