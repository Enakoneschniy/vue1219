<template>
  <nuxt-link :to="to" v-bind="$attrs" class="nav-link" exact exact-active-class="active">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: 'SLink',
  props: {
    to: {
      type: String,
      required: true
    }
  }
}
</script>
