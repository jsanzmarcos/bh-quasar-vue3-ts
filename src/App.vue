<template>
  <router-view />
</template>
<script lang="ts">
import { createApp } from 'vue';
import messages from 'src/i18n';
import { createI18n, useI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'ru',
  messages,
  fallbackLocale: 'en',
});

const app = createApp({
  setup() {
    // `useI18n` return the global composer that is created at `createI18n`
    // `useI18n` must to be called at head of `setup` function
    const t = useI18n();
    return t;
  },
});

app.use(i18n);

export default app;
</script>
