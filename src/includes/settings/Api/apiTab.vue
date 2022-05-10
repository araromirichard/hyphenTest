<template>
  <v-row class="d-flex justify-center align-center">
    <v-col cols="12" class="d-flex justify-center align-center">
      <div class="ma-0" style="width: 85%">
        <p class="my-4 pt-md-8 text-caption text-md-body-1 blue-grey--text">
          You can use your account token to synchronise all your transaction
          data from elsewhere with hyphen workflows
        </p>
      </div>
    </v-col>
    <v-col class="pt-0 px-auto">
      <div class="mx-md-13 mt-6">
        <v-form>
          <v-row class="mx-auto mb-8">
            <v-col cols="12" class="pt-0">
              <v-text-field disabled hide-details="true" label="Host">
                <v-icon tag="button" slot="append" class="pb-8"
                  >mdi-vector-arrange-below
                </v-icon>
              </v-text-field>
            </v-col>
            <v-col cols="12" class="pt-0">
              <v-text-field disabled hide-details="true" label="Key">
                <v-icon tag="button" slot="append" class="pb-8"
                  >mdi-vector-arrange-below
                </v-icon>
              </v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "apiTab",
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
