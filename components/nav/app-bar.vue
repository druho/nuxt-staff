<template>
  <v-app-bar :clipped-left="clipped" fixed app>
    <nuxt-link to="/">
      <v-img src="/logo.svg" max-height="40" max-width="210"></v-img
    ></nuxt-link>

    <v-btn v-for="item in items" :key="item.to" :to="item.to" text class="mx-2">
      {{ item.title }}
    </v-btn>

    <v-spacer />
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
};
</script>
