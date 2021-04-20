import { createI18n } from 'vue-i18n';
import messages from 'src/i18n';

const i18n = createI18n({
  locale: 'ru',
  messages,
  fallbackLocale: 'en',
});

export { i18n };
