<template>
  <div>
    <v-dialog v-model="dialog" max-width="574">
      <v-card height="722" color="#FEFCF8" class="rounded-lg">
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
            >ACTION: Send Payment</span
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
          <div>
            <h5
              style="
                font-family: Inter;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 15px;
                color: #596a73;
              "
            >
              Wallet Balance
            </h5>
            <p
              style="
                font-family: Inter;
                font-style: normal;
                font-weight: bold;
                font-size: 18px;
                line-height: 22px;
                color: #596a73;
              "
            >
              N 1,400,000
            </p>
          </div>
          <v-spacer></v-spacer>
          <v-btn
            plain
            style="
              font-family: Inter;
              font-style: normal;
              font-weight: 600;
              font-size: 10px;
              line-height: 12px;
              color: #16be98;
            "
          >
            <span>View Wallet</span>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
        <h6
          class="pt-11 ml-12"
          style="
            font-family: Inter;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 15px;
            color: #301f78;
          "
        >
          How should this payment be made?
        </h6>
        <v-card
          height="117px"
          elevation="0"
          class="mx-13"
          style="
            margin-top: 18px;
            background: #ffffff;
            border: 1px solid #f9eed2;
            box-sizing: border-box;
            border-radius: 4px;
          "
        >
          <div class="d-flex">
            <h6
              style="
                padding-top: 22px;
                padding-left: 19px;
                font-family: Inter;
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 15px;
                color: #7f919b;
              "
            >
              Full payment value
            </h6>
            <v-spacer></v-spacer
            ><v-switch
              class="mr-6"
              hide-details="true"
              dense
              v-model="switch1"
              color="#16BE98"
            ></v-switch>
          </div>
          <div style="margin-left: 19px; margin-right: 56px">
            <v-chip-group column mandatory active-class="success--text">
              <v-chip color="#FCFCFC" filter>
                <span class="chipText px-4">Instant</span>
              </v-chip>
              <v-chip color="#FCFCFC" filter>
                <span class="chipText px-4">in 30 days</span>
              </v-chip>
              <v-menu max-width="290">
                <template v-slot:activator="{ on, attrs }">
                  <v-chip
                    color="#FCFCFC"
                    filter
                    v-bind="attrs"
                    v-on="on"
                    slot="activator"
                  >
                    <v-icon left class="pl-4 pr-2"> mdi-calendar-blank </v-icon>
                    <span class="chipText pl-2 pr-4">Custom</span>
                  </v-chip>
                </template>
                <v-date-picker
                  reactive
                  v-model="customDueDate"
                  header-color="success"
                ></v-date-picker>
              </v-menu>
            </v-chip-group>
          </div>
        </v-card>
        <v-card
          height="117px"
          elevation="0"
          class="mx-13"
          style="
            margin-top: 18px;
            background: #ffffff;
            border: 1px solid #f9eed2;
            box-sizing: border-box;
            border-radius: 4px;
          "
        >
          <div class="d-flex">
            <h6
              style="
                padding-top: 22px;
                padding-left: 19px;
                font-family: Inter;
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 15px;
                color: #7f919b;
              "
            >
              Part payment value
            </h6>
            <v-spacer></v-spacer
            ><v-switch
              class="mr-6"
              hide-details="true"
              dense
              v-model="switch2"
              color="#16BE98"
            ></v-switch>
          </div>
          <div style="margin-left: 19px; margin-right: 56px">
            <v-chip-group column active-class="success--text">
              <v-chip color="#FCFCFC" filter>
                <span class="chipText px-4">20%</span>
              </v-chip>
              <v-chip color="#FCFCFC" filter>
                <span class="chipText px-4">50%</span>
              </v-chip>
              <v-chip color="#FCFCFC" filter>
                <span class="chipText pl-2 pr-4">Custom</span>
              </v-chip>
            </v-chip-group>
          </div>
        </v-card>
        <v-card
          height="117px"
          elevation="0"
          class="mx-13"
          style="
            margin-top: 18px;
            background: #ffffff;
            border: 1px solid rgba(127, 145, 155, 0.2);
            box-sizing: border-box;
            border-radius: 4px;
          "
        >
          <div class="d-flex">
            <simple-line-icons
              class="mx-5"
              style="padding-top: 24px; font-size: 12px"
              icon="user"
              size="small"
              color="disabled"
              no-svg
            />
            <h6
              style="
                padding-top: 22px;
                font-family: Inter;
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 15px;
                color: #7f919b;
              "
            >
              Payee Info
            </h6>
            <v-spacer></v-spacer>
            <simple-line-icons
              class="mx-7"
              style="padding-top: 24px"
              icon="arrow-up"
              size="small"
              color="disabled"
              no-svg
            />
          </div>
          <div
            class="d-flex"
            style="
              margin-left: 19px;
              margin-right: 56px;
              padding-top: 16px;
              margin-bottom: 34px;
            "
          >
            <v-radio-group dense v-model="radioGroup">
              <v-radio color="#009688" class="ml-11">
                <template v-slot:label>
                  <div>
                    <span style="font-size: 12px">Verified payee only</span>
                  </div>
                </template>
              </v-radio>
            </v-radio-group>
            <v-btn plain color="success" class="text-lowercase ml-10 mt-3">
              <v-icon x-small>mdi-plus</v-icon>
              <span> add new payee </span>
            </v-btn>
          </div>
        </v-card>
        <v-row class="mx-auto justify-end mt-9">
          <v-btn
            @click="dialog2 = !dialog2"
            dark
            width="121"
            height="45"
            style="
              margin-right: 57px;
              background: #311b92;
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
              class="text-capitalize pl-3"
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
              >save</span
            >
          </v-btn>
        </v-row>
      </v-card>
    </v-dialog>

    <v-dialog :value="dialog2" v-model="dialog2" max-width="574px">
      <v-card height="722" color="#FEFCF8" class="rounded-lg">
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
            >Confirmation</span
          >
          <v-spacer></v-spacer>
          <v-icon
            tag="button"
            @click="dialog2 = false"
            class="text-bolder"
            color="#596A73"
          >
            mdi-close
          </v-icon>
        </v-card-title>
        <div
          class="mx-auto text-center"
          style="
            margin-top: 70px;
            font-family: Inter;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 39px;
            color: #301f78;
          "
        >
          <h4>Completed</h4>

          <v-card-text>
            <v-img
              class="mx-auto justify-center my-8"
              :src="require('@/assets/pbot_icons/confirmation-success.png')"
              alt="confirm image"
              width="180px"
            ></v-img>
          </v-card-text>
        </div>
        <div class="justify-center mt-9">
          <Overlaybtns
            to="/workflow"
            style="margin-left: 221px"
            width="132"
            height="45"
            btn-title="Go Back"
            icon="arrow-left"
          />
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import format from "date-fns/format";
import Overlaybtns from "../../btns/Overlaybtns.vue";

export default {
  components: {
    Overlaybtns,
  },
  data() {
    return {
      dialog: false,
      dialog2: false,
      switch1: false,
      switch2: false,
      radioGroup: null,
      customDueDate: null,
    };
  },
  created() {
    setTimeout(() => {
      this.dialog2 = false;
    }, 3000);
  },
  methods: {
    show(value) {
      this.dialog = value;
    },
  },
  computed: {
    formattedDate() {
      return this.customDueDate ? format(this.customDueDate, "Do MMM YYY") : "";
    },
  },
};
</script>

<style scoped>
.chipText {
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #7f919b;
}
</style>
