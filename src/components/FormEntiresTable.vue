<template>
  <div>
    <v-hover v-slot:default="{ hover }">
      <v-card
        class="px-2 py-8"
        style="
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1px;
          margin-bottom: 1px;
        "
        :elevation="hover ? 1 : 0"
        :color="id % 2 ? '#f6f6f6' : ''"
      >
        <v-layout row wrap class="align-center">
          <v-flex md2>
            <div class="d-flex align-center">
              <span
                class="mb-0 mx-4"
                style="
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
                >{{ id }}</span
              >
              <span
                class="mb-0 pl-6 pr-4"
                style="
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
                >{{ bankName }}</span
              >
            </div>
          </v-flex>

          <v-flex md2>
            <div class="d-flex align-center">
              <span
                class="mb-0 pl-4"
                style="
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
                >{{ bankAccountNumber }}</span
              >
            </div>
          </v-flex>
          <v-flex md2>
            <div class="d-flex align-center">
              <span
                style="
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
                >{{ bankAccountRoutingNumber }}</span
              >
            </div>
          </v-flex>
          <v-flex md3>
            <div class="d-flex align-center">
              <span
                class="mb-0"
                style="
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
                >{{ bankAddress }}</span
              >
            </div>
          </v-flex>
          <v-flex md1>
            <div>
              <span
                class="mb-0"
                style="
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
                >{{ bankCity }}</span
              >
            </div>
          </v-flex>
          <v-flex md1>
            <div class="d-flex align-center">
              <span
                class="mb-0"
                style="
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
                >{{ bankState }}</span
              >
            </div>
          </v-flex>
          <v-flex md1>
            <div class="d-flex align-center">
              <span
                class="mb-0"
                style="
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
                >{{ bankCountry }}</span
              >
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Object,
    },
    id: {
      type: Number,
    },
    bankName: {
      type: String,
    },
    bankAccountNumber: {
      type: Number,
    },
    bankAccountRoutingNumber: {
      type: Number,
    },
    bankAddress: {
      type: String,
    },
    bankCity: {
      type: String,
    },
    bankState: {
      type: String,
    },
    bankCountry: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.v-application .elevation-1 {
  box-shadow: -6px 3px 1px -2px rgb(0 0 0 / 0%), 0px 2px 2px 0px rgb(0 0 0 / 0%),
    0px 1px 5px 0px rgb(0 0 0 / 7%) !important;
}
</style>
