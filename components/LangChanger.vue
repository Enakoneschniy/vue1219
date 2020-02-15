<template>
  <b-nav-item-dropdown :text="locale.toUpperCase()" right>
    <b-dropdown-item v-for="locale of locales" :key="locale" @click.prevent="onChangeLocale(locale)">
      {{ locale.toUpperCase() }}
    </b-dropdown-item>
  </b-nav-item-dropdown>
  <!--<b-dropdown id="dropdown-1" text="EN" class="m-md-2">
    <b-dropdown-item>EN</b-dropdown-item>
    <b-dropdown-item>FR</b-dropdown-item>
  </b-dropdown>-->
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LangChanger',
  computed: mapGetters({
    locale: 'localization/locale',
    locales: 'localization/locales'
  }),
  methods: {
    onChangeLocale (locale) {
      let path = this.$nuxt.$route.path.replace(`/${locale}`, '')
      this.locales.forEach((locale) => {
        path = path.replace(`/${locale}`, '')
      })
      if (this.$nuxt.$route.path !== `/${locale}${path}`) {
        console.log(`/${locale}${path}`)
        this.$router.push(`/${locale}${path}`)
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
