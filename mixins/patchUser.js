export default {
  methods: {
    async patchProfile (data) {
      try {
        await this.$axios.$patch('/users/1', data)
        this.$toast.success('User patched', {
          position: 'top'
        })
      } catch (e) {
        this.$toast.error(e.message, {
          position: 'top'
        })
      }
    }
  }
}
