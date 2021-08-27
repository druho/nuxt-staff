<template>
  <v-app-bar :clipped-left="clipped" fixed app>
    <nuxt-link to="/">
      <v-img src="/logo.svg" max-height="40" max-width="210"></v-img
    ></nuxt-link>

    <v-btn v-for="item in items" :key="item.to" :to="item.to" text class="mx-2">
      {{ item.title }}
    </v-btn>

    <v-spacer />
    <!-- theme switcher -->
    <v-btn
      icon
      large
      :class="getThemeClass()"
      class="mx-2"
      @click="toggleTheme"
    >
      <v-icon dark> {{ getThemeIcon() }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import menuItems from "./menu-items.json";

export default {
  name: "Appbar",

  data: () => ({
    items: menuItems,
    title: "foo title",
    clipped: false,
  }),
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("isDarkTheme", this.$vuetify.theme.dark.toString());
    },
    getThemeIcon() {
      return this.$vuetify.theme.dark
        ? "mdi-moon-waxing-crescent"
        : "mdi-white-balance-sunny";
    },
    getThemeClass() {
      return this.$vuetify.theme.dark
        ? "blue--text darken-3"
        : "orange--text  darken-2";
    },
  },
  mounted() {
    const theme = localStorage.getItem("isDarkTheme");
    if (theme) {
      if (theme == "true") {
        this.$vuetify.theme.dark = true;
      } else this.$vuetify.theme.dark = false;
    }
  },
};
</script>
