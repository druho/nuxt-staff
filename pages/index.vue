<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title>Sentry logging</v-card-title>
        <v-card-text>
          <v-btn @click="sentry" color="error">error</v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  methods: {
    sentry() {
      // this.$sentry.captureException(new Error("sentry error"));
      this.$sentry.captureException(new Error("foo exception"));
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
};
</script>