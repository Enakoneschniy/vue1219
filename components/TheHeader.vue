<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <nuxt-link :to="{ name: 'home' }" class="navbar-brand" exact exact-active-class="active">
          eStore
        </nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div id="navbarNavDropdown" class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <nuxt-link :to="{ name: 'home' }" class="nav-link" exact exact-active-class="active">
                Home
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link :to="{ name: 'about' }" class="nav-link" exact exact-active-class="active">
                About
              </nuxt-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <template v-if="!$auth.loggedIn">
              <li class="nav-item">
                <nuxt-link :to="{ name: 'login' }" class="nav-link" exact exact-active-class="active">
                  Login
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link :to="{ name: 'register' }" class="nav-link" exact exact-active-class="active">
                  Register
                </nuxt-link>
              </li>
            </template>
            <template v-else>
              <li class="nav-item">
                <a @click.prevent="onLogout" href="#" class="nav-link">
                  Logout
                </a>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  methods: {
    async onLogout () {
      await this.$auth.logout()
    }
  }
}
</script>

<style scoped lang="scss">

</style>
