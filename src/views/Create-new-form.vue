<template>
  <div>
    <v-row no-gutters>
      <v-col style="padding-top: 64px; padding-left: 64px; padding-right: 64px">
        <FormBuilder v-model="formData"></FormBuilder>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="my-2 d-flex justify-end" style="padding-right: 80px">
        <!-- <Overlaybtns
            @click="saveData"
            width="136"
            height="45"
            btnTitle="save"
            icon="arrow-right"
          /> -->
        <v-btn
          @click="saveData"
          dark
          width="136"
          height="45"
          style="
            padding: 14px;
            background: #16be98;
            box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
            border-radius: 4px;
          "
        >
          <simple-line-icons
            icon="arrow-right"
            color="#FFFFFF"
            style="
              font-family: simple-line-icons;
              font-style: normal;
              font-weight: normal;
              font-size: 12px;
              line-height: 16px;
            "
            no-svg
          />
          <span
            class="text-capitalize py-4 pl-3"
            style="
              font-family: Inter;
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              line-height: 17px;
              text-align: center;
              letter-spacing: 0.636364px;
              color: #ffffff;
            "
            >save form</span
          >
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
//import Overlaybtns from "../includes/btns/Overlaybtns.vue";
export default {
  components: {
    //Overlaybtns
  },
  data() {
    return {
      formData: null,
      formInputData: null,
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
@import "../assets/styles/bootstrap.min.css";
.vue-form-builder .copyright-text {
  display: none !important;
}
.btn-success {
  color: #fff;
  background-color: #16be98 !important;
  border-color: #16be98 !important;
}
.btn {
  width: 136px !important;
  height: 45px !important;
  box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24) !important;
  border-radius: 4px !important;
}
</style>
