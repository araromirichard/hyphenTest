<template>
  <v-row>
    <v-col cols="12" class="d-flex justify-center">
      <div v-if="!showReview" class="d-flex justify-center">
        <v-btn @click="showReview = !showReview" text class="text-capitalize">
          <simple-line-icons
            v-if="$vuetify.breakpoint.mdAndUp"
            style="width: 15.98px; height: 15.97px"
            class="mx-1 i.style"
            icon="pencil"
            no-svg
          />
          <span class="text-caption text-capitalize saveInvoiceBtn">Save</span>
        </v-btn>
        <v-btn text class="text-capitalize mx-4">
          <simple-line-icons
            v-if="$vuetify.breakpoint.mdAndUp"
            style="width: 15.98px; height: 15.97px"
            class="mx-1"
            icon="pencil"
            no-svg
          />
          <span class="text- text-capitalize invoiceBtn">Export</span>
        </v-btn>
      </div>
      <div v-else class="d-flex justify-center">
        <v-btn
          text
          @click="(showReview = !showReview), $emit('activate')"
          class="text-capitalize"
        >
          <simple-line-icons
            v-if="$vuetify.breakpoint.mdAndUp"
            style="width: 15.98px; height: 15.97px"
            class="mx-1"
            icon="pencil"
            no-svg
          />
          <span class="text-caption text-capitalize invoiceBtn">Review</span>
        </v-btn>
        <v-btn text class="text-capitalize">
          <simple-line-icons
            v-if="$vuetify.breakpoint.mdAndUp"
            style="width: 15.98px; height: 15.97px"
            class="mx-1"
            icon="pencil"
            no-svg
          />
          <span class="text-caption text-capitalize invoiceBtn">Export</span>
        </v-btn>

        <v-dialog
          elevation="0"
          v-model="dialog"
          max-width="365"
          overlay-color="#301F78"
          overlay-opacity="0.282397"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn text class="text-capitalize" v-bind="attrs" v-on="on">
              <simple-line-icons
                v-if="$vuetify.breakpoint.mdAndUp"
                style="width: 15.98px; height: 15.97px"
                class="mx-1"
                icon="pencil"
                no-svg
              />
              <span class="text-caption text-capitalize invoiceBtn"
                >Attachments</span
              >
            </v-btn>
          </template>

          <v-card
            max-width="362px"
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
                >Attach files to: {{ invoiceId }}</span
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
              <v-text-field
                background-color="#ffffff"
                style="margin-left: 35px; margin-right: 31px; margin-top: 32px"
                placeholder="File title"
                outlined
                hide-details="auto"
                >File title</v-text-field
              >
              <template class="d-flex">
                <v-select
                  hide-details="auto"
                  background-color="#ffffff"
                  :menu-props="{ bottom: true, offsetY: true }"
                  :items="fileUploadCategory"
                  style="
                    margin-left: 35px;
                    margin-right: 31px;
                    margin-top: 42px;
                    border-radius: 3px;

                    height: 40px;
                  "
                  class="justify-center custom-placeholer-color"
                  flat
                  outlined
                  placeholder="Select file category"
                >
                  <template slot="append">
                    <v-btn
                      text
                      fab
                      dark
                      width="20"
                      height="20"
                      class="my-1"
                      style="background: rgba(127, 145, 155, 0.5)"
                    >
                      <v-icon small>mdi-plus</v-icon>
                    </v-btn>
                    <v-icon class="pl-2">mdi-menu-down</v-icon>
                  </template>
                </v-select>
              </template>
              <v-card
                @click.native="onPickFile"
                @drop.prevent="onDroppedFiles"
                @dragover.prevent="dragging = true"
                @dragleave.prevent="dragging = false"
                width="294"
                height="126"
                class="mx-auto justify-center d-flex"
                style="
                  margin-top: 30px;
                  margin-bottom: 30px;
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
              <div v-if="attachedFiles.length" class="text-center">
                <p
                  class="text-caption primary--text px-8 py-4"
                  v-for="file in attachedFiles"
                  :key="file"
                >
                  {{ file.name }}
                </p>
              </div>
              <input
                type="file"
                style="display: none"
                ref="fileInput"
                accept="image/*"
                @change="onFilePicked"
              />
            </template>

            <template class="mt-6">
              <v-card-actions class="d-flex justify-end mt-2 mr-9">
                <v-btn
                  dark
                  width="121"
                  height="45"
                  style="
                    margin-bottom: 49px;
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
    </v-col>
  </v-row>
</template>

<script>
import SimpleLineIcons from "vue-simple-line";
import { mapActions } from "vuex";

export default {
  name: "InvoiceBtn",
  data() {
    return {
      dialog: false,
      dragging: false,
      attachedFiles: [],
      invoiceId: "",
      showReview: true,
      fileUploadCategory: [
        "Purchase order",
        "Reciept",
        "Goods received",
        "Proforma",
      ],
    };
  },
  components: {
    SimpleLineIcons,
  },

  emits: ["activate"],

  methods: {
    ...mapActions({ showToast: "ui/showToast" }),
    closeDialog() {
      return (this.dialog = false);
    },
    onDroppedFiles($event) {
      this.dragging = false;
      let files = [...$event.dataTransfer.items]
        .filter((item) => item.kind === "file")
        .map((item) => item.getAsFile());

      this.attachedFiles.push(files);

      if (this.attachedFiles) {
        this.showToast({
          sclass: "success",
          show: true,
          message: "file attahched successfully",
          timeout: 3000,
        });
      } else
        return this.showToast({
          sclass: "alert",
          show: true,
          message: "no file has been attached",
          timeout: 3000,
        });

      console.table(files);
    },
    onPickFile() {
      this.$refs.fileInput.click();
      console.log(this.$refs);
    },
    onFilePicked(event) {
      {
        this.attachedFiles = event.target.files;
        if (this.attachedFiles) {
          this.showToast({
            sclass: "success",
            show: true,
            message: "file attahched successfully",
            timeout: 3000,
          });
        }
      }
    },
    // uploadFile(e) {
    //   let files = e.target.files || e.dataTransfer.files;
    //   if (!files.length) return;
    //   this.createfile(files[0]);
    // },
    // createfile(file) {
    //   var attachedfile = new attachedfile();
    //   var reader = new FileReader();
    //   var vm = this;

    //   reader.onload = (e) => {
    //     vm.attachedfile = e.target.result;
    //   };
    //   reader.readAsDataURL(file);
    // },
    // removeattachedfile: function (e) {
    //   this.attachedfile = "";
    // },
  },
};
</script>

<style scoped>
i.sli-font {
  font-size: 14px;
  display: inline-block;
  color: #7e69d8;
}

.invoiceBtn {
  color: #7e69d8;
}
.saveInvoiceBtn {
  color: #16be98;
}

i.style {
  width: 15.98px;
  height: 15.97px;
  color: #16be98;
}
</style>
