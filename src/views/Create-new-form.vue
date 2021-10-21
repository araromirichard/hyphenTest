<template>
  <div>
    <v-layout>
      <v-row no-gutters>
        <v-col style="padding-left: 64px; padding-right: 64px">
          <FormBuilder v-model="formData"></FormBuilder>
        </v-col>
        <v-btn @click="saveData"> save </v-btn>
      </v-row>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: null,
      // formInputData: null,
      configuration: {},
    };
  },
  methods: {
    saveData() {
      console.log(JSON.stringify(this.formData));
    },
  },
};
</script>

<style>
.vue-form-builder .copyright-text {
  display: none !important;
}
</style>
