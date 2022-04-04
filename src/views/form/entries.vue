<template>
  <!-- i had to repeat codes which is against the number 1 rule, dry -->
  <v-container class="justify-center px-0 pt-0">
    <div
      class="
        mx-10 mx-sm-12 mx-md-14
        px-md-0
        mb-10
        pt-md-8
        d-flex
        justify-sm-space-between
      "
      v-if="$vuetify.breakpoint.mdAndUp"
    >
      <h3
        class="text-bold primary--text"
        style="
          font-style: normal;
          font-weight: bold;
          font-size: 32px;
          line-height: 39px;
        "
      >
        Forms
      </h3>
      <v-spacer></v-spacer>
      <v-dialog
        elevation="0"
        v-model="dialog"
        max-width="590"
        overlay-color="#301F78"
        overlay-opacity="0.282397"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            dark
            v-bind="attrs"
            v-on="on"
            class="text-capitalize"
            style="
              width: 209px;
              height: 54px;
              background: var(--v-primary-base);
              box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
              border-radius: 4px;
            "
            :style="{
              width: `${$vuetify.breakpoint.mdAndDown ? '150px' : '209px'}`,
            }"
          >
            <img :src="require('@/assets/pbot_icons/file.svg')" />
            <span
              style="
                padding-left: 8px;
                font-family: Inter;
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 17px;
                text-align: center;
                letter-spacing: 0.636364px;
                color: #ffffff;
              "
            >
              New Form
            </span>
          </v-btn>
        </template>
        <v-card
          max-width=""
          height="300"
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
              >New Form</span
            >
            <v-spacer></v-spacer>
            <v-icon
              tag="button"
              @click="closeFormDialog"
              class="text-bolder"
              color="#596A73"
            >
              mdi-close
            </v-icon>
          </v-card-title>
          <template class="d-flex">
            <span
              style="
                margin-top: 30px;
                margin-left: 37px;
                font-family: Inter;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 18px;
                letter-spacing: 0.45px;
                color: #7f919b;
              "
              >Form Name</span
            >
            <v-text-field
              style="
                margin-left: 37px;
                margin-right: 31px;
                margin-bottom: 30px;
                background: #ffffff;
                border: 1px solid rgba(212, 216, 223, 0.377431);
                border-radius: 3px;
              "
              dense
              :hide-details="true"
              label="Form Name"
              single-line
              outlined
              color="primary"
              v-model="formName"
            ></v-text-field>
          </template>
          <template>
            <v-switch
              class="ml-9"
              v-model="makePayment"
              label="Make Payment"
            ></v-switch>
          </template>
          <template class="mt-6">
            <v-card-actions class="d-flex justify-end mt-2 mr-9">
              <v-btn
                link
                @click="createForm"
                dark
                width="121"
                height="45"
                color="primary"
                class="text-capitalize"
                style="
                  box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
                  border-radius: 4px;
                "
              >
                <v-icon>mdi-chevron-right</v-icon>
                <span>Next</span>
              </v-btn>
            </v-card-actions>
          </template>
        </v-card>
      </v-dialog>
    </div>
    <template>
      <v-container class="pt-8 px-0">
        <v-card
          flat
          elevation="6"
          width="93%"
          min-height="674"
          class="mx-auto my-md-10"
        >
          <v-card
            width="100%"
            height="58px"
            flat
            class="d-flex mx-sm-0 py-0 py-md-2"
            color="#f4f4f4"
          >
            <v-btn
              plain
              @click="$router.go(-1)"
              class="ml-4 text-capitalize"
              style="
                font-family: Inter;
                font-style: normal;
                font-weight: 300;
                font-size: 14px;
                line-height: 19px;
                color: #7f919b;
              "
            >
              <v-icon class="pt-1">mdi-chevron-left</v-icon>
              <span>Back</span>
            </v-btn>
            <span
              class="
                d-inline-block
                text-truncate
                font-weight-bold
                text-capitalize
                my-auto
                px-6
              "
              style="max-width: 416px; color: var(--v-primary-base)"
            >
              {{ formName }}
            </span>
            <v-spacer></v-spacer>
            <div style="width = 10px">
              <v-autocomplete
                class="px-8"
                dense
                hide-details="true"
                v-model="selectedHeaders"
                :items="headers"
                multiple
                return-object
              >
                <template v-slot:selection="{ item, index }">
                  <v-chip small v-if="index < 2">
                    <span>{{ item.text }}</span>
                  </v-chip>
                  <span v-if="index === 2" class="grey--text caption"
                    >(+{{ selectedHeaders.length - 2 }} others)</span
                  >
                </template>
              </v-autocomplete>
            </div>
          </v-card>
          <div class="ma-0 pa-0">
            <template>
              <v-data-table
                :server-items-length="dataEntries.length"
                height="100%"
                ref="myTable"
                :headers="showHeaders"
                :items="dataEntries"
                :items-per-page="10"
                class="elevation-0"
              >
              </v-data-table>
            </template>
          </div>
        </v-card>
      </v-container>
    </template>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "entries",

  data() {
    return {
      dialog: false,
      isClicked: true,
      search: "",
      formName: "",
      dataEntries: [],

      headers: [],

      selectedHeaders: [],
    };
  },
  methods: {
    ...mapActions({
      showToast: "ui/showToast",
      formEntries: "formBuilder/getFormEntries",
    }),
    closeFormDialog() {
      this.dialog = false;
    },
    toggleSearch() {
      this.isClicked = false;
    },
    searchDataTable(e) {
      this.$refs.dataTable.setSearchText(e);
    },
    createForm() {
      if (this.formName != "") {
        // let routeData = this.$router.push(
        //   "/form/create-new-form/?name=" + this.formName
        // );
        let routeData = this.$router.resolve({
          name: "Create-form",
          query: { data: this.formName },
        });
        this.closeFormDialog();
        window.open(routeData.href, "_blank");
      } else {
        this.showToast({
          sclass: "error",
          show: true,
          message: "Form name is required",
          timeout: 3000,
        });
      }
    },
    async fetchEntries() {
      let response = await this.$store.dispatch(
        "formBuilder/getFormEntries",
        this.$route.params.id
      );

      console.log(response.data);

      this.formName = response.data.form_title;
      this.allEntries = response.data.entries;
      this.filterEntries = this.allEntries.filter(
        (e) => e.form_entry.Date !== ""
      );

      //map over the filterEntries form_entry and get the key and value of each obj
      this.dataEntries = this.filterEntries.map((entry) => entry.form_entry);
      console.log(JSON.stringify(this.dataEntries, null, 2));
      //get the first object in the array and get the key each value....

      let firstObj = response.data.form_fields.controls;
      console.log(firstObj);
      //get a {text:'',value:''} to use as the headers for the datatable

      const newNameLabel = Object.keys(firstObj).map((key) => {
        return {
          text: firstObj[key].name,
          value: firstObj[key].name,
        };
      });
      //push it into a new array

      //return the textValue array as the header array
      this.headers = newNameLabel;

      console.log(newNameLabel);
      console.log(this.headers);
    },

    //populate the header array from localstorage
    populateHeaders() {
      let headers = JSON.parse(localStorage.getItem("headers"));
      if (!headers) {
        this.selectedHeaders = this.headers;
      } else {
        this.selectedHeaders = headers;
      }
    },
  },
  computed: {
    makePayment: {
      get() {
        return this.$store.state.formBuilder.makePayment;
      },
      set(value) {
        this.$store.commit("formBuilder/SET_MAKEPAYMENT", value);
      },
    },
    //Done to get the ordered headers
    showHeaders() {
      return this.headers.filter((s) => this.selectedHeaders.includes(s));
    },
  },

  async mounted() {
    await this.fetchEntries();
    this.selectedHeaders = this.headers;
    console.log(this.selectedHeaders);
  },
};
</script>

<style>
.active {
  color: var(--v-primary-base);
}
tbody tr:nth-of-type(odd) {
  background-color: #f8f9fc;
}
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:not(:last-child)
  > td:not(.v-data-table__mobile-row),
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:not(:last-child)
  > th:not(.v-data-table__mobile-row) {
  border-bottom: none;
}
table td,
table th {
  height: 40px;
}
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > thead
  > tr:last-child
  > th {
  border-bottom: none;
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > tbody > tr > th,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > th,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > th {
  padding: 0 36px;
  transition: height 0.2s cubic-bezier(0.4, 0, 0.6, 1);
}

.pageTitle {
  margin-top: 25px;
  margin-bottom: 7px;
  margin-left: 42px;
  padding-left: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 19px;
  letter-spacing: 0.45px;
  color: var(--v-primary-base);
}

.pageDespt {
  margin-bottom: 27px;
  margin-left: 42px;
  padding-left: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 15px;
  color: #7f919b;
}
.v-data-table-header th {
  white-space: nowrap;
}
.v-application .elevation-6 {
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 3%), 0px 6px 10px 0px rgb(0 0 0 / 3%),
    0px 1px 18px 0px rgb(0 0 0 / 3%) !important;
}
</style>
