<template>
  <v-card class="ma-auto elevation-0" width="514">
    <v-card-title class="card-items text--secondary font-weight-bold">
      Sign in
    </v-card-title>

    <v-card-text class="card-items">
      <v-text-field
        dense
        label="Your Name"
        single-line
        outlined
        class="font-weight-regular text-subtitle-2 label--text"
      ></v-text-field>

      <v-text-field
        dense
        label="Password"
        single-line
        outlined
        hint="Forgot Password?"
        persistent-hint
        class="font-weight-regular text-subtitle-2 label--text"
      ></v-text-field>
    </v-card-text>

    <v-card-actions class="card-items">
      <v-btn block color="primary" elevation="24" large class="text-capitalize">
        Sign in</v-btn
      >
    </v-card-actions>
     
  </v-card>
</template>

<script>
export default {
  name: "Login",

  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.card-items {
  padding-left: 84px;
  padding-right: 84px;
}

.card-input-field {
  background: #ffffff;
  border: 1px solid rgba(49, 27, 146, 0.2);
  box-sizing: border-box;
  border-radius: 3px;
}

.card-text {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
}
</style>
