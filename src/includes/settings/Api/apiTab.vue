<template>
  <div>
    <v-row>
      <v-col cols="12" class="px-0">
        <div class="ma-0" style="width: 85%">
          <p
            class="
              ma-4
              ml-md-16
              pl-md-8
              pt-md-8
              text-caption text-md-body-1
              blue-grey--text
            "
          >
            You can use your account token to synchronise all your transaction
            data from elsewhere with hyphen workflows
          </p>
        </div>
      </v-col>
      <v-col class="pt-0">
        <div class="mx-md-13 mt-6">
          <v-form>
            <v-row class="mx-md-10 mb-8">
              <v-col cols="12" class="pt-0">
                <v-text-field disabled hide-details="auto" label="Host">
                  <v-icon tag="button" slot="append" class="pb-8"
                    >mdi-vector-arrange-below
                  </v-icon>
                </v-text-field>
              </v-col>
              <v-col cols="12" class="pt-0">
                <v-text-field disabled hide-details="auto" label="Key">
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
  </div>
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
