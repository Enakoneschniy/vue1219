<template>
  <validation-observer ref="signUnpForm" v-slot="{ handleSubmit }" class="container h-100vh" tag="div">
    <form @submit.prevent="handleSubmit(onSubmit)" class="auth-form">
      <h2 class="text-center">
        Register
      </h2>
      <hr>
      <validation-provider v-slot="{ errors, classes }" name="Name" rules="required" tag="div" class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="user.name"
          :class="classes"
          name="name"
          type="text"
          class="form-control"
        >
        <div class="invalid-feedback">
          {{ errors[0] }}
        </div>
      </validation-provider>
      <validation-provider v-slot="{ errors, classes }" name="Email address" rules="required|email" tag="div" class="form-group">
        <label for="email">Email address</label>
        <input
          id="email"
          v-model="user.email"
          :class="classes"
          name="email"
          type="text"
          class="form-control"
        >
        <div class="invalid-feedback">
          {{ errors[0] }}
        </div>
      </validation-provider>
      <validation-provider v-slot="{ errors, classes }" name="Password" rules="required|min:6" tag="div" class="form-group">
        <label for="email">Password</label>
        <input
          id="password"
          v-model="user.password"
          :class="classes"
          name="password"
          type="password"
          class="form-control"
        >
        <div class="invalid-feedback">
          {{ errors[0] }}
        </div>
      </validation-provider>
      <button type="submit" class="btn btn-primary btn-block">
        Register
      </button>
      <div class="pt-3 text-center">
        <nuxt-link :to="{ name: 'login' }">Go to Authorization</nuxt-link>
      </div>
    </form>
  </validation-observer>
</template>

<script>
export default {
  name: 'Register',
  layout: 'empty',
  auth: 'guest',
  data: () => ({
    user: {
      name: '',
      email: '',
      password: ''
    }
  }),
  methods: {
    async onSubmit () {
      if (await this.$refs.signUnpForm.validate()) {
        try {
          await this.$axios.$post('/register', this.user)
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.auth-form {
  width: 400px;
  margin: calc(50vh - 250px) auto 0;
}
.h-100vh {
  height: 100vh;
}
</style>
