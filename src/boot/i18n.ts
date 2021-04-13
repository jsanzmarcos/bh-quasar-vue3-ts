// import messages from 'src/i18n';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'ru',
  messages: {
    en: {
      message: {
        hello: 'hello world',
      },
    },
    ru: {
      message: {
        hello: 'Таки здравствуйте',
      },
    },
  },
  fallbackLocale: 'en',
});

export default i18n;