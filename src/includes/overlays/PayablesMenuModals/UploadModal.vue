<template>
  <div>
    <v-dialog v-model="dialog" max-width="587">
      <v-card color="#FEFCF8" class="rounded-lg">
        <v-card-title
          style="background: #ffffff; border-radius: 8px 8px 0px 0px"
        >
          <span
            style="
              font-family: Inter;
              font-style: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 19px;
              color: #301f78;
            "
            >Upload CSV</span
          >
          <v-spacer></v-spacer>
          <v-icon
            tag="button"
            @click="dialog = false"
            class="text-bolder"
            color="#596A73"
          >
            mdi-close
          </v-icon>
        </v-card-title>
        <p
          class="text-center pb-4 ma-0"
          style="
            padding-top: 24px;
            font-family: Inter;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 24px;
            color: #7f919b;
          "
        >
          You can save an excel file as CSV or use download and use <br />
          this <strong>template payable file</strong>
        </p>

        <v-card
          @click.native="uploadFile"
          @drop.prevent="onDroppedFiles"
          @dragover.prevent="dragging = true"
          @dragleave.prevent="dragging = false"
          width="530"
          height="126"
          class="mx-auto my-0 justify-center d-flex"
          style="
            background: #ffffff;
            border: 1px dashed rgba(127, 145, 155, 0.551929);
            box-sizing: border-box;
            border-radius: 8px;
          "
          flat
          :style="{
            border: dragging
              ? '1px dashed #424f95'
              : '1px dashed rgba(127, 145, 155, 0.551929)',
          }"
        >
          <span
            class="d-flex mx-auto my-auto"
            style="
              font-family: Inter;
              font-style: normal;
              font-weight: normal;
              font-size: 12px;
              line-height: 18px;
              text-align: center;
              color: #7f919b;
            "
            >Drag and drop or click to upload <br />
            png/jpg invoice</span
          >
        </v-card>
        <template>
          <v-card-actions class="d-flex justify-end align-center mr-9">
            <v-btn
              dark
              width="121"
              height="45"
              style="
                margin-top: 24px;
                margin-bottom: 41px;
                background: #311b92;
                box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
                border-radius: 4px;
              "
            >
              <img
                class="p-0 m-0"
                width="16"
                :src="require('@/assets/pbot_icons/uploadArrow.svg')"
              />
              <span
                class="pl-2 m-0 text-capitalize"
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
                >Upload</span
              >
            </v-btn>
          </v-card-actions>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
//import Overlaybtns from "../../btns/Overlaybtns.vue";
export default {
  components: {
    //Overlaybtns
  },
  data() {
    return {
      dialog: false,
      dragging: false,
    };
  },
  methods: {
    closeDialog() {
      return (this.dialog = false);
    },
    show(value) {
      this.dialog = value;
    },
    onDroppedFiles($event) {
      this.dragging = false;
      let files = [...$event.dataTransfer.items]
        .filter((item) => item.kind === "file")
        .map((item) => item.getAsFile());

      console.table(files);
    },
  },
};
</script>

<style scoped></style>
