/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
<template>
 <ThemeProvider :theme="{
    primary: 'palevioletred'
  }">
    <q-layout view="hHh Lpr lFf">
      <q-page-container>
        <q-page>
          <div class="window-height row justify-center items-center bg-main">
            <q-card square class="auth-card bg-divider">
              <q-card-section class="bg-list column justify-center items-center text-center">
                <img src="~assets/eDressage.svg" class="main-logo q-mt-md">
                <StyledHeading no-hover >
                 {{ t('Language') }}
                </StyledHeading>
                <black-horse-one-badge style="height: 20px; width: 80px"
                                       class="absolute-bottom-right q-mr-md offset-bho shadow-1"
                />
              </q-card-section>
              <q-card-section class="q-mt-md">
                <router-view @loading="isLoading = $event" />
              </q-card-section>
              <q-inner-loading :showing="isLoading">
                <q-spinner-cube size="50px" color="primary" />
              </q-inner-loading>
            </q-card>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </ThemeProvider>
</template>

<script>
import BlackHorseOneBadge from 'components/ui/BlackHorseOneBadge.vue';
import StyledHeading from 'components/themed/StyledHeading';
import { ThemeProvider } from 'vue3-styled-components';
// import { ThemeProvider } from 'styled-components';
// import BlackHorseOneBadge from 'Components/ui/BlackHorseOneBadge.vue';
// import VersionCheckerMixin from 'layouts/VersionCheckerMixin.vue';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AuthBase',
  components: {
    BlackHorseOneBadge,
    StyledHeading,
    ThemeProvider,
  },
  setup() {
    return { };
  },
  data() {
    return {
      isLoading: false,
    };
  },
});
</script>
