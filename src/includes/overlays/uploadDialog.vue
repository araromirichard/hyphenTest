<template>
  <div>
    <v-dialog
      elevation="0"
      v-model="dialog"
      max-width="590"
      overlay-color="#301F78"
      overlay-opacity="0.282397"
    >
      <v-card
        max-width="587"
        height="317"
        flat
        class="m-0"
        style="background: #f8f7f4; border-radius: 8px"
      >
        <v-card-title
          class="mb-8"
          style="background: #ffffff; border-radius: 8px 8px 0px 0px"
        >
          <span class="modal__title text-primary">Upload invoice</span>
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
            v-model="invoicefile"
            ref="uploadInvoice"
            @click="handleFileImport"
            @drop.prevent="onDroppedFiles"
            @dragover.prevent="dragging = true"
            @dragleave.prevent="dragging = false"
            max-width="515"
            height="126"
            class="mx-4 mx-md-auto justify-center d-flex drop-card"
            :style="{
              border: dragging
                ? '1px dashed #424f95'
                : '1px dashed rgba(127, 145, 155, 0.551929)',
            }"
            flat
          >
            <span class="d-flex mx-auto my-auto drop-card-text"
              >Drag and drop or click to upload <br />
              png/jpg invoice</span
            >
          </v-card>
        </template>
        <template>
          <input
            ref="uploadInvoice"
            class="d-none"
            type="file"
            @change="onFileSelected"
          />
        </template>
        <template class="mt-6">
          <v-card-actions class="d-flex justify-end mt-2 mr-md-9">
            <v-btn
              dark
              width="121"
              height="45"
              class="card-btn"
              color="#19283d"
            >
              <img
                class="p-0 m-0"
                width="16"
                :src="require('@/assets/pbot_icons/uploadArrow.svg')"
              />
              <span class="pl-2 m-0 text-capitalize btn-text">Upload</span>
            </v-btn>
          </v-card-actions>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "uploadDialog",
  props: ["ListMenu"],
  data() {
    return {
      dragging: false,
      dialog: false,
      invoicefile: null,
    };
  },
  methods: {
    closeDialog() {
      this.dialog = false;
    },
    OpenDialog() {
      this.dialog = true;
    },
    onDroppedFiles($event) {
      this.dragging = false;
      let files = [...$event.dataTransfer.items]
        .filter((item) => item.kind === "file")
        .map((item) => item.getAsFile());

      console.table(files);
    },
    handleFileImport() {
      // Trigger click on the FileInput
      this.$refs.uploadInvoice.click();
    },
    onFileSelected(event) {
      this.invoicefile = event.target.files[0];
      console.log(this.invoicefile);
      // this.fileName = this.cac.name;
      // this.isInitial = false;
      // this.isSaving = true;
    },
  },
};
</script>
<style scoped>
.modal__title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #19283d;
}
.drop-card {
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #ffffff;
  box-sizing: border-box;
  border-radius: 8px;
}
.drop-card-text {
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #7f919b;
}
.card-btn {
  box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
  border-radius: 4px;
}
.btn-text {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.636364px;
  color: #ffffff;
}
</style>
