<template>
  <div class="d-flex">
    <div class="justify-center ma-auto">
      <h3
        class="mb-10 mx-auto"
        style="
          margin-top: 224px;
          font-family: Inter;
          font-style: normal;
          font-weight: 700;
          font-size: 38px;
          line-height: 39px;
          letter-spacing: 0.646465px;
          color: #596a73;
        "
      >
        Choose your account type
      </h3>

      <v-row class="d-flex flex-column">
        <v-card
          outlined
          class="mt-16 mb-5 ma-auto"
          elevation="0"
          max-width="400"
          to="#"
        >
          <v-card-text>
            <v-row class="d-flex">
              <v-col class="ma-auto justify-center pl-6" cols="3">
                <v-avatar size="80" color="#FDF9EF">
                  <v-icon> mdi-account-outline</v-icon>
                </v-avatar>
              </v-col>
              <v-col cols="9">
                <v-card-title class="pl-4 py-auto"> Advisor </v-card-title>
                <v-card-text class="py-auto">
                  You provide funding/finance advise services to 5 or more
                  businesses
                </v-card-text>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-card
          outlined
          to="#"
          elevation="0"
          class="mb-12 ma-auto flat"
          max-width="400"
        >
          <v-card-text>
            <v-row class="d-flex">
              <v-col class="ma-auto justify-center pl-6" cols="3"
                ><v-avatar size="80" color="#FDF9EF"
                  ><v-icon> mdi-account-outline</v-icon></v-avatar
                ></v-col
              >
              <v-col cols="9"
                ><v-card-title class="card-title pl-4 py-auto"
                  >Business</v-card-title
                >
                <v-card-text class="card-text py-auto"
                  >You work at a business, in a finance or senior executive
                  role</v-card-text
                ></v-col
              >
            </v-row>
          </v-card-text>
        </v-card>
        <Button
          absolute
          id="btn"
          class="mx-10 text-md-h5"
          height="54"
          width="330"
          to="welcome"
          label="Next"
        />
      </v-row>
    </div>
  </div>
</template>

<script>
import Button from "../includes/flat-button.vue";
export default {
  components: {
    Button,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
#btn {
  min-width: 400px !important;
}
</style>
