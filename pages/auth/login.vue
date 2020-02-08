<template>
  <validation-observer ref="loginForm" v-slot="{ handleSubmit }" class="container h-100vh" tag="div">
    <form @submit.prevent="handleSubmit(onSubmit)" class="auth-form">
      <h2 class="text-center">
        Login
      </h2>
      <hr>
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
      <validation-provider v-slot="{ errors, classes }" name="Password" rules="required|min:5" tag="div" class="form-group">
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
        Login
      </button>
      <div class="pt-3 text-center">
        <nuxt-link :to="{ name: 'register' }">
          Go to Registration
        </nuxt-link>
      </div>
    </form>
  </validation-observer>
</template>

<script>
export default {
  name: 'Login',
  layout: 'empty',
  data: () => ({
    user: {
      email: '',
      password: ''
    }
  }),
  methods: {
    async onSubmit () {
      if (await this.$refs.loginForm.validate()) {
        await this.$auth.loginWith('local', {
          data: this.user
        })
        await this.$router.push({ name: 'home' })
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
