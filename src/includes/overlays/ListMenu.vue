<template>
  <div>
    <v-dialog
      elevation="0"
      v-model="dialog"
      max-width="590"
      overlay-color="#301F78"
      overlay-opacity="0.282397"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-list-item v-bind="attrs" v-on="on" link>
          <v-list-item-content>
            <v-list-item-title
              style="
                font-family: Inter;
                font-style: normal;
                font-weight: 600;
                font-size: 12px;
                line-height: 15px;
                color: #7f919b;
              "
              >Upload</v-list-item-title
            >
            <v-list-item-subtitle
              style="
                font-family: Inter;
                font-style: normal;
                font-weight: normal;
                font-size: 10px;
                line-height: 12px;
                color: #7f919b;
                mix-blend-mode: normal;
                opacity: 0.5;
              "
            >
              pdf or jpg invoice
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-icon small style="mix-blend-mode: normal; opacity: 0.5">
            mdi-file-upload-outline</v-icon
          >
        </v-list-item>
      </template>

      <v-card
        max-width="587"
        height="317"
        flat
        class="m-0"
        style="background: #fefcf8; border-radius: 8px"
      >
        <v-card-title
          class="mb-8"
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
            >Upload invoice</span
          >
          <v-spacer></v-spacer>
          <v-icon
            tag="button"
            @click="closeDialog"
            class="text-bolder"
            color="#596A73"
          >
            mdi-close
          </v-icon>
        </v-card-title>
        <template class="d-flex">
          <v-card
            @drop.prevent="onDroppedFiles"
            @dragover.prevent="dragging = true"
            @dragleave.prevent="dragging = false"
            width="515"
            height="126"
            class="mx-auto justify-center d-flex"
            style="
              margin-top: 30px;
              margin-bottom: 30px;
              background: #ffffff;
              border: ;
              box-sizing: border-box;
              border-radius: 8px;
            "
            :style="{
              border: dragging
                ? '1px dashed #424f95'
                : '1px dashed rgba(127, 145, 155, 0.551929)',
            }"
            flat
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
          </v-card></template
        >

        <template class="mt-6">
          <v-card-actions class="d-flex justify-end mt-2 mr-9">
            <v-btn
              dark
              width="121"
              height="45"
              style="
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
export default {
  props: ["ListMenu"],
  data() {
    return {
      dragging: false,
      dialog: false,
    };
  },
  methods: {
    closeDialog() {
      this.dialog = false;
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
