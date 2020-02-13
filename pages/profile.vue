<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="name">Name:</label>
        <input id="name" v-model="user.name" class="form-control" type="text" name="name">
      </div>
      <div class="form-group">
        <label for="text">Text A:</label>
        <input id="text" v-model="obj.a" class="form-control" type="text" name="text">
      </div>
      <div class="form-group">
        <label for="text1">Text B:</label>
        <input id="text1" v-model="obj.b" class="form-control" type="text" name="text1">
      </div>
      <!-- <button type="submit" class="btn btn-primary">
        Submit
      </button>-->
    </form>
    <button @click="onShowModal" class="btn btn-primary">
      Show modal
    </button>
  </div>
</template>

<script>
import patchUser from '../mixins/patchUser'
import MyFirstModal from '../components/MyFirstModal'
export default {
  name: 'Profile',
  mixins: [patchUser],
  watch: {
    'user.name' () {
      this.saveData()
    },
    text (newValue, oldValue) {
      console.log(newValue)
    },
    obj: {
      handler (newValue, oldValue) {
        console.log(JSON.stringify(newValue), JSON.stringify(oldValue))
      },
      deep: true
    }
    /* 'obj.a' (newValue, oldValue) {
      console.log(newValue, oldValue)
    },
    'obj.b' (newValue, oldValue) {
      console.log(newValue, oldValue)
    } */
  },
  async asyncData ({ $axios, error }) {
    try {
      const user = await $axios.$get('/users/1')
      return {
        user,
        text: 'asdsada',
        obj: {
          a: 'ssss',
          b: 'vvvv'
        }
      }
    } catch (e) {
      return error(e)
    }
  },
  methods: {
    onShowModal () {
      this.$modal.show(MyFirstModal, {
        message: 'Hello from Modal'
      })
    },
    saveData () {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(async () => {
        await this.patchProfile({
          name: this.user.name
        })
      }, 2000)
    },
    async onSubmit () {
      await this.patchProfile({
        name: this.user.name
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
