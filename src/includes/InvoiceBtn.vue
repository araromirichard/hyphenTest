<template>
  <div>
    <div v-if="!showReview">
      <v-btn @click="showReview = !showReview" text class="text-capitalize">
        <simple-line-icons
          style="width: 15.98px; height: 15.97px"
          class="mx-1 i.style"
          icon="pencil"
          no-svg
        />
        <span class="saveInvoiceBtn">Save</span>
      </v-btn>
      <v-btn text class="text-capitalize mx-4">
        <simple-line-icons
          style="width: 15.98px; height: 15.97px"
          class="mx-1"
          icon="pencil"
          no-svg
        />
        <span class="invoiceBtn">Export</span>
      </v-btn>
    </div>
    <div v-else>
      <v-btn
        text
        @click="(showReview = !showReview), $emit('activate')"
        class="text-capitalize"
      >
        <simple-line-icons
          style="width: 15.98px; height: 15.97px"
          class="mx-1"
          icon="pencil"
          no-svg
        />
        <span class="invoiceBtn">Review</span>
      </v-btn>
      <v-btn text class="text-capitalize">
        <simple-line-icons
          style="width: 15.98px; height: 15.97px"
          class="mx-1"
          icon="pencil"
          no-svg
        />
        <span class="invoiceBtn">Export</span>
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
              style="width: 15.98px; height: 15.97px"
              class="mx-1"
              icon="pencil"
              no-svg
            />
            <span class="invoiceBtn">Attachments</span>
          </v-btn>
        </template>

        <v-card
          max-width="362"
          height="508"
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
              >Attach files to: #eroapapa</span
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
              style="margin-left: 37px; margin-right: 31px"
              label="File title"
              placeholder="File title"
              outlined
              >File title</v-text-field
            >
            <template class="d-flex">
              <v-select
                :menu-props="{ bottom: true, offsetY: true }"
                :items="fileDownItems"
                style="
                  margin-left: 37px;
                  margin-right: 31px;
                  background: #ffffff;
                  border: 1px solid rgba(212, 216, 223, 0.377431);
                  box-sizing: border-box;
                  border-radius: 3px;
                  width: 294px;
                  height: 40px;
                "
                class="justify-center mx-8 custom-placeholer-color"
                flat
                dense
                outlined
                placeholder="Select Workflow"
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
          </template>

          <template class="mt-6">
            <v-card-action class="d-flex justify-end mt-2 mr-9">
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
            </v-card-action>
          </template>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import SimpleLineIcons from "vue-simple-line";

export default {
  name: "InvoiceBtn",
  data() {
    return {
      dialog: false,
      showReview: true,
      fileDownItems: ["Purchase order", "Reciept", "Good recieved", "Proforma"],
    };
  },
  components: {
    SimpleLineIcons,
  },

  emits: ["activate"],

  methods: {
    closeDialog() {
      return (this.dialog = false);
    },
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
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #7e69d8;
}
.saveInvoiceBtn {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #16be98;
}

i.style {
  width: 15.98px;
  height: 15.97px;
  color: #16be98;
}
</style>
