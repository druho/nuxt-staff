<template>
  <v-app dark>
    <nav-side-bar :drawerOptions="drawerOptions" />
    <nav-app-bar />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!footerFixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  watch: {
    drawerOptions() {
      console.log(`[watch] ${JSON.stringify(drawerOptions)}`);
    },
    deep: true,
  },
  data() {
    return {
      drawerOptions: {
        drawer: true,
        miniVariant: true,
        clipped: false,
      },

      footerFixed: false,
      title: "Vuetify.js",
    };
  },
};
</script>
