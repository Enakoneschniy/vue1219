<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <s-link to="/" class="navbar-brand">
          eStore
        </s-link>
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
              <s-link to="/">
                Home
              </s-link>
            </li>
            <li class="nav-item">
              <s-link to="/catalog">
                Catalog
              </s-link>
            </li>
            <li class="nav-item">
              <s-link to="/about">
                About
              </s-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped lang="scss">

</style>
