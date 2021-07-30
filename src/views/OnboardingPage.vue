<template>
  <div class="d-flex">
    <div class="justify-center ma-auto">
      <div class="main-title font-weight-black mx-auto">
        Choose your account type
      </div>
      <v-card class="card1 ma-auto" elevation="0" width="400">
        <v-card-text>
          <v-row class="d-flex">
            <v-col class="ma-auto justify-center pl-6" cols="3"
              ><v-avatar size="80" color="#FDF9EF"
                ><v-icon> mdi-account-outline</v-icon></v-avatar
              ></v-col
            >
            <v-col cols="9"
              ><v-card-titile class="card-title pl-4 py-auto"
                >Advisor</v-card-titile
              >
              <v-card-text class="card-text py-auto"
                >You provide funding/finance advise services to 5 or more
                businesses</v-card-text
              ></v-col
            >
          </v-row>
        </v-card-text>
      </v-card>
      <v-card
        elevation="0"
        class="card2 ma-auto flat"
        width="400"
        style="border: 1px solid rgba(49, 27, 146, 0.2)"
      >
        <v-card-text>
          <v-row class="d-flex">
            <v-col class="ma-auto justify-center pl-6" cols="3"
              ><v-avatar size="80" color="#FDF9EF"
                ><v-icon> mdi-account-outline</v-icon></v-avatar
              ></v-col
            >
            <v-col cols="9"
              ><v-card-titile class="card-title pl-4 py-auto"
                >Business</v-card-titile
              >
              <v-card-text class="card-text py-auto"
                >You work at a business, in a finance or senior executive
                role</v-card-text
              ></v-col
            >
          </v-row>
        </v-card-text>
      </v-card>

      <v-router>
        <Button
          class="btn text-md-h5"
          height="54"
          width="400"
          to="Overview"
          label="Next"
        />
      </v-router>
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
    return {
      //
    };
  },
};
</script>

<style scoped>
.main-title {
  position: absolute;
  height: 39px;
  top: 224px;

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  letter-spacing: 1px;

  color: #596a73;
}
.card1 {
  position: absolute;
  height: 130px;
  top: 329px;
  background: #ffffff;
  border-radius: 7px;
}
.card2 {
  position: absolute;
  height: 130px;
  top: 479px;

  background: #ffffff;
  box-sizing: border-box;
  border-radius: 7px;
}
.card-title {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.818182px;

  color: rgba(0, 35, 56, 0.5);
}
.card-text {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  /* or 160% */

  color: rgba(0, 35, 56, 0.5);
}

.card-items {
  padding-left: 84px;
  padding-right: 84px;
}
.btn {
  top: 658px;
}
</style>
