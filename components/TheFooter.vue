<template>
  <div>
    TheFooter
    <nuxt-link :to="{ name: 'about' }" class="nav-link" exact exact-active-class="active">
      About
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped lang="scss">

</style>
