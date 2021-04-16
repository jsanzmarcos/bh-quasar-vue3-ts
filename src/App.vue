<template>
  <router-view />
</template>
<script lang="ts">
import { createApp } from 'vue';
import messages from 'src/i18n';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'ru',
  messages,
  fallbackLocale: 'en',
});

const app = createApp({
  name: 'App',
});

app.use(i18n);

export default app;
</script>
