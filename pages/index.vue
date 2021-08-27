<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>logging</v-card-title>
          <v-card-text>
            <v-btn @click="sentry" color="error"> sentry error</v-btn>
            <v-btn @click="logrocket" color="error"
              >logrocket error (not woring)</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>foo</v-card-title>
          <v-card-text> </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>asyncData typicode</v-card-title>
          <v-card-text
            ><ul>
              <li v-for="user in users">{{ user.name }}</li>
            </ul></v-card-text
          >
          <v-card-actions>
            <v-btn @click="loadPlanets">refresh</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    plantes: [],
  }),
  methods: {
    sentry() {
      // this.$sentry.captureException(new Error("sentry error"));
      this.$sentry.captureException(new Error("foo exception"));
    },
    logrocket() {
      new Error("foo logrocket");
    },
    async loadPlanets() {
      this.plantes = await this.$nuxtApi.getPlanets();
      console.log(JSON.stringify(this.plantes));
    },
  },
  // async asyncData({ params, $sentry, $axios }) {
  //   try {
  //     let { data } = await $axios.get(`https://my-api/posts/${params.id}`);
  //     return { title: data.title };
  //   } catch (error) {
  //     $sentry.captureException(error);
  //   }
  // },
  // async fetch({ $nuxtApi }) {
  //   this.plantes = await $nuxtApi.getPlanets();
  //   console.log(JSON.stringify(this.plantes));
  // },

  async asyncData(context) {
    const users = await context.$axios.$get("/apiTypicode/users");
    return {
      users,
    };
  },
};
</script>