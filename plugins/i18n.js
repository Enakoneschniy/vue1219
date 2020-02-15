import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { localize } from 'vee-validate'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.getters['localization/locale'],
    fallbackLocale: 'en',
    messages: {
      en: require('~/locales/en.json'),
      fr: require('~/locales/fr.json')
    }
  })

  app.i18n.path = (link) => {
    localize(app.i18n.locale)
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}
