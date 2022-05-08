<template>
  <div>
    <v-row>
      <v-col cols="12" class="px-md-14">
        <p class="px-8 pt-md-8 text-caption text-md-body-1 blue-grey--text">
          Hyphen connects to your company bank accounts through our integration
          partners, who are licensed to read your transactions data in a secure
          and compliant way.
        </p>
      </v-col>
      <v-col>
        <single-bank-card />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SingleBankCard from "./SingleBankCard.vue";
export default {
  name: "bankTab",
  components: {
    SingleBankCard,
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
