<template>
  <v-row>
    <v-col cols="12" v-if="isEmpty">
      <p
        class="
          ml-md-8
          px-4
          pt-4 pt-md-8
          text-caption text-md-body-1
          blue-grey--text
        "
      >
        Hyphen connects to your company bank accounts through our integration
        partners, who are licensed to read your transactions data in a secure
        and compliant way.
      </p>
    </v-col>

    <v-col class="pt-16" cols="12">
      <div class="pa-0 ma-0" style="min-height: 400px">
        <AppCards v-if="!isEmpty" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import AppCards from "./appCards.vue";
export default {
  name: "appTabs",
  components: {
    AppCards,
    //
  },
  data() {
    return {
      isEmpty: true,
      linkedAppsArray: [],
    };
  },
};
</script>

<style scoped>
.centered-input input {
  text-align: right;
}
.v-input input {
  max-height: 64px;
}
.v-label {
  font-weight: 700 !important;
}
.theme--light.v-label {
  color: rgba(0, 0, 0, 0.6);
  font-weight: 700;
}
</style>
