<template>
  <div>
    <v-hover v-slot:default="{ hover }">
      <v-card
        class="px-6 py-4 my-1"
        style="cursor: pointer; transition: all 0.3s ease"
        :elevation="hover ? 2 : 0"
        :color="id % 2 ? '#f6f6f6' : ''"
      >
        <v-layout row wrap class="align-center">
          <v-flex md1 class="d-flex justify-start">
            <span
              class="mb-0 ml-3 mr-1 pa-0"
              style="
                font-family: Lato;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 14px;
                color: #596a73;
              "
              >{{ id }}</span
            >
          </v-flex>
          <v-flex md3>
            <div class="d-flex justify-start align-center">
              <div
                class="ms-6"
                style="
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
              >
                {{ RefNumber }}
              </div>
            </div>
          </v-flex>

          <v-flex md2>
            <div class="d-flex align-center">
              <span
                style="
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
              >
                <v-icon small :color="stausIcon"> mdi-circle-medium </v-icon>
                {{ status }}</span
              >
            </div>
          </v-flex>
          <v-flex md2>
            <div class="d-flex align-center">
              <span
                class="text-truncate"
                style="
                  max-width: 110px;
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
                >{{ dueDate }}</span
              >
            </div>
          </v-flex>

          <v-flex md4>
            <div class="ms-14 d-flex justify-start">
              <span
                style="
                  font-family: Lato;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  color: #596a73;
                "
                >{{ outstanding }}</span
              >
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-hover>
    <!-- <template>
      <div>
        <v-dialog v-model="dialog" max-width="516">
          <v-card color="#FEFCF8" class="rounded-lg">
            <v-card-title
              style="background: #ffffff; border-radius: 8px 8px 0px 0px"
            >
              <span
                class="primary--text"
                style="
                  font-family: Inter;
                  font-style: normal;
                  font-weight: 600;
                  font-size: 16px;
                  line-height: 19px;
                "
                >PAYABLE: Details</span
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
            <div class="px-8 d-flex" style="background: #fdfaf2">
              <div class="pt-5">
                <h5
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 15px;
                    color: #301f78;
                  "
                >
                  Amount
                </h5>
                <p
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 22px;
                  "
                  class="primary--text"
                >
                  {{ pAmount }}
                </p>
              </div>
              <v-spacer></v-spacer>
              <div class="pt-5">
                <h5
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 15px;
                    color: #301f78;
                  "
                >
                  Due
                </h5>
                <p
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 12px;
                    line-height: 18px;
                    color: #596a73;
                  "
                >
                  {{ new Date() | date }}
                </p>
              </div>
            </div>
            <div>
              <div class="mx-auto px-13 pt-5">
                <h5
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 18px;
                    color: #7f919b;
                  "
                >
                  Ref
                </h5>
                <p
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 12px;
                    line-height: 18px;
                    color: #7f919b;
                  "
                >
                  {{ Ref }}
                </p>
              </div>
              <v-divider
                class="mx-13"
                style="
                  padding-top: 10px;
                  padding-bottom: 10px;
                  color: rgba(127, 145, 155, 0.22588);
                "
              ></v-divider>
              <div class="mx-auto px-13">
                <h5
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 18px;
                    color: #7f919b;
                  "
                >
                  Payee
                </h5>
                <p
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 12px;
                    line-height: 18px;
                    color: #7f919b;
                  "
                >
                  {{ Payee }}
                </p>
              </div>
              <v-divider
                class="mx-13"
                style="
                  padding-top: 10px;
                  padding-bottom: 10px;
                  color: rgba(127, 145, 155, 0.22588);
                "
              ></v-divider>
              <div class="mx-auto px-13">
                <h5
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 18px;
                    color: #7f919b;
                  "
                >
                  Subtotal
                </h5>
                <p
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 12px;
                    line-height: 18px;
                    color: #7f919b;
                  "
                >
                  {{ Subtotal }}
                </p>
              </div>
            </div>
            <v-card
              @click.native="uploadFile"
              @drop.prevent="onDroppedFiles"
              @dragover.prevent="dragging = true"
              @dragleave.prevent="dragging = false"
              width="412"
              height="126"
              class="mx-13 my-0 justify-center d-flex"
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
                    margin-right: 12px;
                    margin-top: 24px;
                    margin-bottom: 41px;
                    background: var(--v-primary-base);
                    box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
                    border-radius: 4px;
                  "
                >
                  <simple-line-icons icon="pencil" size="small" no-svg />
                  <span
                    class="pl-2 m-0 text-capitalize"
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: normal;
                      font-size: 14px;
                      line-height: 17px;
                      text-align: center;
                      letter-spacing: 0.636364px;

                      color: #ffffff;
                    "
                    >Update</span
                  >
                </v-btn>
                <v-btn
                  dark
                  width="121"
                  height="45"
                  style="
                    margin-top: 24px;
                    margin-bottom: 41px;
                    background: #16be98;
                    box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
                    border-radius: 4px;
                  "
                >
                  <simple-line-icons icon="arrow-right" size="small" no-svg />
                  <span
                    class="pl-4 m-0 text-capitalize"
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
                    >Pay</span
                  >
                </v-btn>
              </v-card-actions>
            </template>
          </v-card>
        </v-dialog>
      </div>
    </template> -->
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
    },
    id: {
      type: Number,
    },
    RefNumber: {
      type: String,
    },
    status: {
      type: String,
    },
    dueDate: {
      type: String,
    },
    outstanding: {
      type: String,
    },
  },
  data() {
    return {};
  },

  computed: {
    stausIcon() {
      if (this.status === "due") {
        return "#FF6A6A";
      } else if (this.status === "sent") {
        return "#F7CA40";
      } else return "#2BD5AE";
    },
  },
};
</script>

<style scoped>
.v-application .elevation-2 {
  box-shadow: -6px 3px 1px -2px rgb(0 0 0 / 0%), 0px 2px 2px 0px rgb(0 0 0 / 0%),
    0px 1px 5px 0px rgb(0 0 0 / 7%) !important;
}
v-btn .button {
  transition-duration: 0.4s;
}

v-btn .button:hover {
  background-color: #19283d;
  color: white;
}
</style>
