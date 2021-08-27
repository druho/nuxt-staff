<template>
  <v-navigation-drawer
    v-model="drawerOptions.drawer"
    :mini-variant="drawerOptions.miniVariant"
    :clipped="drawerOptions.clipped"
    app
    permanent
  >
    <v-list-item>
      <v-btn @click="mini" icon class="mx-0 my-0">
        <v-icon>mdi-menu</v-icon></v-btn
      >
    </v-list-item>
    <v-list dense nav>
      <v-list-item-group v-model="selectedItem" color="deep-purple">
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import menuItems from "./menu-items.json";
export default {
  data: () => ({
    selectedItem: 0,
    items: menuItems,
  }),
  props: {
    drawerOptions: {
      type: Object,
      required: true,
    },
  },
  methods: {
    mini() {
      this.drawerOptions.miniVariant = !this.drawerOptions.miniVariant;
      console.log(`mini`);
    },
  },
};
</script>

<style>
</style>