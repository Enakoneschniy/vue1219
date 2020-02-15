<template>
  <div>
    <modals-container />
    <v-dialog />
    <TheHeader />
    <nuxt />
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'
export default {
  name: 'Default',
  components: { TheFooter, TheHeader },
  created () {
    this.$eventBus.$on('save-name', this.onSaveName)
  },
  destroyed () {
    this.$eventBus.$off('save-name', this.onSaveName)
  },
  methods: {
    onSaveName () {
      window.alert('DEFAULT: ' + name)
    }
  }
}
</script>
