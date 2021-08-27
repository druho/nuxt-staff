<template>
  <div>
    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title> typicode</v-card-title>
          <v-card-subtitle class="font-weight-bold red--text"
            >$axios asyncData</v-card-subtitle
          >
          <v-card-text>
            <ul>
              <li v-for="user in users">{{ user.name }}</li>
            </ul></v-card-text
          >
          <v-divider></v-divider>
          <v-card-subtitle class="font-weight-bold red--text"
            >$nuxtApi.loadBeers</v-card-subtitle
          >
          <v-card-text>
            <ul>
              <li v-for="beer in beers">{{ beer.name }}</li>
            </ul></v-card-text
          >
          <v-card-actions>
            <v-btn class="primary" @click="loadBeers">load bears</v-btn>
          </v-card-actions>
          <v-divider></v-divider>
          <v-card-subtitle class="font-weight-bold red--text"
            >$nuxtApi fetch</v-card-subtitle
          >
          <v-card-text>
            <p v-if="$fetchState.pending">Fetching posts...</p>
            <p v-else-if="$fetchState.error">An error occurred :(</p>
            <div v-else>title: {{ post.title }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn class="primary" @click="$fetch">refresh</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- col -->
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title></v-card-title>
          <v-card-text></v-card-text>
          <v-card-actions></v-card-actions> </v-card
      ></v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title> </v-card-title>
          <v-card-text></v-card-text>
          <v-card-actions></v-card-actions> </v-card
      ></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const users = (await context.$axios.$get("/apiTypicode/users")).slice(1, 3);
    console.log(
      `[asyncData - ${process.client ? "client" : "server"}] users.length: ${
        users.length
      }`
    );
    return {
      users,
    };
  },
  async fetch() {
    this.post = await this.$nuxtApi.getPostById(1);
  },
  data: () => ({
    beers: [],
    post: null,
  }),
  methods: {
    getSide() {
      return process.client ? "client" : "server";
    },
    async loadBeers() {
      this.beers = await this.$nuxtApi.getBeers();
    },
  },
};
</script>

<style>
</style>