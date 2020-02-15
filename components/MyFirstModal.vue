<template>
  <div class="p-4">
    <div class="mb-3">
      {{ message }}
      <div>
        <label for="name">Name:</label>
        <input id="name" v-model="name" type="text" class="form-control">
        <button @click="onSave" class="btn btn-info">
          Save
        </button>
      </div>
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
  },
  data: () => ({
    name: ''
  }),
  methods: {
    onSave () {
      this.$eventBus.$emit('save-name', this.name)
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
