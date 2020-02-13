<template>
  <div class="p-4">
    <div class="mb-3">
      {{ message }}
    </div>
    <button @click="$emit('close')" class="btn btn-danger">
      Close
    </button>
  </div>
</template>

<script>
export default {
  name: 'MyFirstModal',
  props: {
    message: {
      type: String,
      default () {
        return 'Default message!'
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
