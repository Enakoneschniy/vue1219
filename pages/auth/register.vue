<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input id="name" v-model="user.name" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input id="email" v-model="user.email" type="email" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
    <hr>
    <ul>
      <li v-for="user of users">
        <span @click.prevent="onShowUser(user)">{{ user.name }} - {{ user.email }}</span>
        <button @click.prevent.stop="onDelete(user)" class="btn btn-sm btn-danger">
          Delete
        </button>
      </li>
    </ul>
    <div v-if="!isHidden && !!currentUser">
      <pre>
        {{ currentUser.name }}
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data: () => ({
    user: {
      name: '',
      email: ''
    },
    isHidden: true,
    currentUser: null
  }),
  async asyncData ({ $axios }) {
    let users = []
    try {
      users = await $axios.$get('/users')
    } catch (e) {
      console.log(e)
    }
    return { users }
  },
  methods: {
    onShowUser (user) {
      this.currentUser = user
      this.isHidden = false
    },
    async onDelete (user) {
      const message = `Delete ${user.name}?`
      if (window.confirm(message)) {
        try {
          await this.$axios.$delete(`/users/${user.id}`)
          const index = this.users.findIndex(u => u.id === user.id)
          this.users.splice(index, 1)
        } catch (e) {
          console.log(e)
        }
      }
    },
    async onSubmit () {
      try {
        const newUser = await this.$axios.$post('/users', this.user)
        this.users.push(newUser)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
