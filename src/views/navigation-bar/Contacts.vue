<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row align="center" v-if="$vuetify.breakpoint.mdAndUp">
          <v-col class="d-flex justify-center align-center" cols="12">
            <h3
              class="font-weight-bold text-md-h4 primary--text pl-md-14"
              style="line-height: 39px"
            >
              Contacts
              <span
                class="pl-5 text-md-subtitle-1"
                style="
                  font-family: Inter;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 16px;
                  line-height: 19px;
                  color: #7f919b;
                  mix-blend-mode: normal;
                  opacity: 0.5;
                "
                >{{ contactRecord }}</span
              >
            </h3>

            <v-spacer></v-spacer>

            <ContactDropDown
              btnText="Add New"
              icon="contact"
              width="148"
              height="54px"
              style="margin-right: 88px"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="d-flex" v-if="$vuetify.breakpoint.mdAndDown">
              <p
                :style="{ display: `${isClicked != true ? 'none' : ''}` }"
                class="pt-7 pl-5 primary--text"
                style="
                  font-family: Inter;
                  font-style: normal;
                  font-weight: bold;
                  font-size: 24px;
                  line-height: 22px;
                  letter-spacing: -0.73px;
                "
              >
                Contacts
              </p>
              <v-spacer></v-spacer>
              <v-icon v-if="isClicked" @click="toggleSearch" class="pr-4 pt-7">
                mdi-magnify
              </v-icon>
              <v-expand-x-transition v-else>
                <v-text-field
                  @input="searchDataTable"
                  v-model="search"
                  @blur="isClicked = true && !search"
                  class="seacrh-field mt-4 mr-2"
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
            </div>
          </v-col>
        </v-row>

        <v-container class="mt-md-12">
          <v-row class="mx-md-10 pa-0">
            <v-col
              class="d-flex flex-column align-center justify-center"
              cols="12"
            >
              <v-card
                v-if="$vuetify.breakpoint.mdAndUp"
                flat
                width="100%"
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
                      font-weight: 800;
                      font-size: 12px;
                      line-height: 15px;
                      text-transform: uppercase;
                    "
                    >{{ item.tab }}</v-tab
                  >

                  <v-spacer></v-spacer>

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

              <v-card width="100%" class="pb-12" flat>
                <component
                  v-bind:is="items[tab].content"
                  class="ml-0"
                ></component>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <!-- tabs for mobile devices -->
    <v-row class="px-0 mx-0" v-if="$vuetify.breakpoint.mdAndDown">
      <v-col class="ma-0 pa-0" cols="12">
        <v-bottom-navigation fixed class="pa-0 mx-0" dark>
          <v-tabs
            center-active
            class="ma-0"
            background-color="primary"
            v-model="tab"
          >
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
          </v-tabs>
        </v-bottom-navigation>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CustomersContact from "@/components/Contacts/CustomersContact.vue";
import ContactDropDown from "@/includes/ContactDropdown";
 import VendorsContact from "@/components/Contacts/VendorsContact.vue";
// import Pending from "../../components/Contacts/Pending.vue";

export default {
  name: "contacts",
  data() {
    return {
      contactRecord: "234 Records",

      isClicked: true,
      tab: 0,
      search: "",
      items: [
        { tab: "Customers", content: "CustomersContact" },
        { tab: "Vendors", content: "VendorsContact" },
        { tab: "Pending", content: "PendingContact" },
      ],
    };
  },
  components: {
    CustomersContact,
    ContactDropDown,
     VendorsContact,
    // Pending,
  },
  methods: {
    toggleSearch() {
      this.isClicked = false;
    },
    searchDataTable(e) {
      this.$refs.dataTable.setSearchText(e);
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
  color: var(--v-primary-base);
}

.v-application .elevation-6 {
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 3%), 0px 6px 10px 0px rgb(0 0 0 / 3%),
    0px 1px 18px 0px rgb(0 0 0 / 3%) !important;
}
.cardTitle {
  margin-top: 32px;
  margin-left: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 22px;
  color: rgba(0, 35, 56, 0.5);
}
.cardSubTitle {
  margin-top: 5px;
  margin-left: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.545455px;
  color: rgba(0, 35, 56, 0.5);
}
#histogram {
  fill: #96ead7 !important;
}
</style>
