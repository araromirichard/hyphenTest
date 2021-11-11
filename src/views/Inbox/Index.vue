<template>
  <v-container class="pa-0">
    <div v-if="noInvoice">
      <v-row align="center" justify="end" class="mx-14 pt-md-10">
        <DropDownMenu btnText="New" icon="file" width="121" height="54" />
      </v-row>
      <v-row class="justify-center" style="padding-top: 105px">
        <img :src="require('@/assets/folder.svg')" alt="folder svg" />
      </v-row>
      <v-row class="justify-center" style="padding-top: 40px">
        <p
          style="
            font-family: Inter;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 29px;
            color: #311b92;
          "
        >
          No invoice/transaction is awaiting action
        </p>
      </v-row>
      <v-row class="justify-center pt-0">
        <p
          style="
            font-family: Inter;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 15px;
            color: #596a73;
          "
        >
          Click here to upload an invoice or generate an expense request form
        </p>
      </v-row>
      <v-row class="d-flex justify-center pt-8">
        <v-card
          class="d-flex flex-row"
          elevation="0"
          style="
            width: 414px;
            height: 94px;
            background: #ffffff;
            border: 1px solid #fbf4e4;
            box-sizing: border-box;
            border-radius: 4px;
          "
        >
          <v-avatar
            class="d-flex align-center mx-auto my-auto ml-6"
            style="padding: 8px; margin: 8px"
            color="#F9EED2"
            size="20"
          >
            <img :src="require('@/assets/info.svg')" alt="" />
          </v-avatar>
          <v-card-text
            style="
              font-style: normal;
              font-weight: normal;
              font-size: 12px;
              line-height: 20px;
              color: #596a73;
            "
          >
            To capture invoices sent to email, forward attachements to
            mtn@process.finance or ask your vendors to send directly
          </v-card-text>
        </v-card>
      </v-row>
    </div>
    <div v-else>
      <v-row
        align="center"
        class="d-flex justify-md-space-between mx-14 pt-md-10"
      >
        <div>
          <h3
            class="text-bold"
            style="
              font-style: normal;
              font-weight: bold;
              font-size: 32px;
              line-height: 39px;
              color: #301f78;
            "
          >
            Inbox <span class="transTotal align-center">234 Transactions</span>
          </h3>
        </div>

        <DropDownMenu
          btnText="New"
          icon="file"
          width="121px"
          height="54px"
          justify="end"
        />
      </v-row>

      <v-card flat elevation="6" width="90%" min-height="674" class="mx-14">
        <div class="mt-12" justify="center">
          <v-card
            flat
            max-width="100%"
            style="border-bottom: 1px solid rgba(127, 145, 155, 0.3)"
          >
            <v-tabs v-model="tab">
              <v-tab
                class="mt-2"
                v-for="item in items"
                :key="item.tab"
                style="
                  font-family: Inter;
                  font-style: normal;
                  font-weight: 700;
                  font-size: 12px;
                  line-height: 15px;
                  text-transform: uppercase;
                "
                >{{ item.tab }}</v-tab
              >

              <v-tab style="color: #ff6a6a"
                ><v-icon left color="#FF6A6A" small class="pr-1 mt-2 mr-0"
                  >mdi-stop-circle-outline
                </v-icon>
                <span class="mt-2">EXCEPTION</span>
              </v-tab>
              <v-spacer></v-spacer>
              <v-btn class="pt-4 mt-1" plain @click.prevent="dialog2 = true">
                <simple-line-icons left class="pr-1" icon="people" no-svg />

                <b
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 900;
                    font-size: 12px;
                    line-height: 20px;
                    letter-spacing: 0.55px;
                    text-transform: uppercase;
                  "
                  >invite</b
                ></v-btn
              >
              <v-btn
                v-if="isClicked"
                @click="toggleSearch"
                plain
                class="text-black mt-1 pt-4"
                style="
                  font-family: Inter;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 12px;
                  line-height: 20px;
                  letter-spacing: 0.55px;
                  text-transform: uppercase;
                  color: #7f919b;
                "
              >
                search
                <v-icon small right class="pr-1"> mdi-magnify </v-icon>
              </v-btn>
              <v-expand-x-transition v-else>
                <v-text-field
                  @input="searchDataTable"
                  v-model="search"
                  @blur="isClicked = true && !search"
                  class="seacrh-field mt-2 mr-2"
                  dense
                  clearable
                  autofocus
                  hide-details="true"
                  persistent-placeholder
                  placeholder="Search"
                  append-icon="mdi-magnify"
                  filled
                >
                </v-text-field>
              </v-expand-x-transition>
            </v-tabs>
          </v-card>
        </div>
        <component
          v-bind:is="items[tab].content"
          class="ml-0"
          ref="dataTable"
        ></component>
      </v-card>
    </div>
    <template>
      <div>
        <v-dialog v-model="dialog2" max-width="516">
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
                >Invite a Stakeholder</span
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
            <validation-observer ref="observer" v-slot="{ invalid }">
              <form @submit.prevent="sendInvite">
                <div class="px-8 d-flex" style="background: #fdfaf2">
                  <p
                    style="
                      padding-top: 34px;
                      font-family: Inter;
                      font-style: normal;
                      font-weight: normal;
                      font-size: 12px;
                      line-height: 18px;
                      letter-spacing: 0.45px;
                      color: #7f919b;
                    "
                  >
                    Add details of <strong> Stakeholder</strong>
                  </p>
                </div>
                <div>
                  <validation-provider
                    v-slot="{ errors }"
                    name="Full Names"
                    rules="required"
                  >
                    <v-text-field
                      v-model="stakeholder.fullNames"
                      hide-details="auto"
                      class="mb-4"
                      type="text"
                      background-color="#ffffff"
                      style="margin-left: 52px; margin-right: 45px"
                      outlined
                      label="Full Names"
                      :error-messages="errors"
                    >
                    </v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="email"
                    rules="required|email"
                  >
                    <v-text-field
                      v-model="stakeholder.email"
                      hide-details="auto"
                      class="mb-4"
                      type="email"
                      background-color="#ffffff"
                      style="margin-left: 52px; margin-right: 45px"
                      outlined
                      label="Email Address"
                      :error-messages="errors"
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="select"
                    rules="required"
                  >
                    <v-select
                      hide-details="auto"
                      background-color="#ffffff"
                      style="margin-left: 52px; margin-right: 45px"
                      v-model="stakeholder.selectedType"
                      :items="stakeholderTypes"
                      outlined
                      :error-messages="errors"
                      label="Select"
                      data-vv-name="select"
                      required
                    ></v-select>
                  </validation-provider>
                </div>
                <template>
                  <v-card-actions class="d-flex justify-end align-center mr-9">
                    <v-btn
                      @click="sendInvite"
                      :disabled="invalid"
                      type="submit"
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
                      <simple-line-icons
                        icon="plus"
                        size="small"
                        style="color: #311b92"
                        no-svg
                      />
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

                          color: #311b92;
                        "
                        >Add</span
                      >
                    </v-btn>
                  </v-card-actions>
                </template>
              </form>
            </validation-observer>
          </v-card>
        </v-dialog>
      </div>
    </template>
  </v-container>
</template>

<script>
import { required, email } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});
import TabDataTableAll from "../../components/TabDataTableAll.vue";
import TabDataTableEmail from "../../components/TabDataTableEmail.vue";
import TabDataTableReviews from "../../components/TabDataTableReviews.vue";
import DropDownMenu from "../../includes/DropDownMenu.vue";
import SimpleLineIcons from "vue-simple-line";

export default {
  name: "Inbox",
  data() {
    return {
      dialog: false,
      dialog2: false,
      noInvoice: false,
      isClicked: true,
      tab: 0,
      search: "",
      stakeholder: {
        fullNames: "",
        email: "",
        selectedType: null,
      },
      stakeholderTypes: ["Co-worker", "Payee"],
      items: [
        { tab: "All", content: "TabDataTableAll" },
        { tab: "Email", content: "TabDataTableEmail" },
        //{ tab: "Forms", content: "TabDataTableForms" },
        { tab: "Reviews", content: "TabDataTableReviews" },
      ],
      inboxMenus: [
        {
          title: "Upload",
          subtitle: "pdf or jpg invoice",
          icon: "mdi-tray-arrowDown",
        },
        {
          title: "Form",
          subtitle: "create form",
          icon: "mdi-tray-arrow-down ",
        },
        {
          title: "Bank Account",
          subtitle: "connect your bank account",
          icon: "mdi-tray-arrowDown",
        },
        {
          title: "EMAIL TO:",
          subtitle: "brandname0923@process.finance",
          icon: "",
        },
      ],
    };
  },
  components: {
    TabDataTableAll,
    TabDataTableEmail,
    TabDataTableReviews,
    //TabDataTableForms,
    DropDownMenu,
    SimpleLineIcons,
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    toggleSearch() {
      this.isClicked = false;
    },
    searchDataTable(e) {
      this.$refs.dataTable.setSearchText(e);
    },
    sendInvite() {
      console.table(this.stakeholder);
    },
  },
};
</script>

<style scoped>
.v-input .search-field .v-input__slot:before,
.v-input .search-field .v-input__slot:after {
  border: none !important;
  border-color: transparent !important;
}
.transTotal {
  font-family: "Inter" sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #7f919b;
}

.v-menu__content {
  box-shadow: none;
}

i.sli-font {
  font-size: 12px;
  display: inline-block;
}
.material-icons {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  color: #301f78;
}
th {
  font-family: "Inter" sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  color: #311b92;
}

.v-application .elevation-6 {
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 3%), 0px 6px 10px 0px rgb(0 0 0 / 3%),
    0px 1px 18px 0px rgb(0 0 0 / 3%) !important;
}

</style>
