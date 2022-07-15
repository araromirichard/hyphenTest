<template>
  <div>
    <v-card
      elevation="3"
      class="mx-auto py-md-6 px-4"
      flat
      min-height="140"
      :width="cardWidth[$vuetify.breakpoint.name]"
    >
      <v-skeleton-loader width="100%" type="card" :loading="loading">
        <v-row
          class="mx-0 py-4 d-flex justify-center align-center"
          style="width: 100%; height: 100%"
        >
          <v-col class="mx-0 pa-0" cols="3">
            <div
              class="d-flex align-center justify-center"
              style="width: 100%; height: 100%"
            >
              <slot name="avatar" />
            </div>
          </v-col>
          <v-col class="pa-0 mx-0" cols="9">
            <div style="width: 100%; height: 100%">
              <slot name="cardBody" />
            </div>
          </v-col>
        </v-row>
      </v-skeleton-loader>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "singleSummaryCard",
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      cardWidth: {
        xs: "100%",
        md: "630px",
      },
    };
  },
};
</script>

<style scoped>
.v-application .elevation-6 {
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 3%), 0px 6px 10px 0px rgb(0 0 0 / 3%),
    0px 1px 18px 0px rgb(0 0 0 / 3%) !important;
}
.v-application .elevation-3 {
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 3%), 0px 6px 10px 0px rgb(0 0 0 / 3%),
    0px 1px 18px 0px rgb(0 0 0 / 3%) !important;
}
</style>
