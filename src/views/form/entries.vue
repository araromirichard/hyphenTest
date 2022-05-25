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
      <create-form-modal ref="formDialog" />
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
            <download-csv class="btn btn-default" :data="dataEntries">
              <v-hover v-slot="{ hover }">
                <v-btn
                  outlined
                  @click="alertCSVDownload"
                  color="primary"
                  class="export-btn mr-9 hover-btn"
                  :style="{
                    'background-color': hover ? '#2bd5ae' : '',
                    border: hover ? 'none' : '',
                  }"
                  elevation="2"
                  ><span class="material-icons pr-1"> import_export </span
                  ><span
                    class="primary--text"
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: 500;
                      font-size: 11px;
                      line-height: 12px;
                      text-align: center;
                      letter-spacing: 0.636364px;
                    "
                    >Export</span
                  >
                </v-btn>
              </v-hover>
            </download-csv>
            <div style="width = 10px">
              <v-autocomplete
                class="px-8"
                dense
                hide-details="true"
                v-model="selectedColumns"
                :items="headers"
                multiple
                return-object
              >
                <template v-slot:selection="{ item, index }">
                  <v-chip small v-if="index < 2">
                    <span>{{ item.text }}</span>
                  </v-chip>
                  <span v-if="index === 2" class="grey--text caption"
                    >(+{{ selectedColumns.length - 2 }} others)</span
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
                :headers="selectedColumns"
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
import { mapActions, mapGetters } from "vuex";
import createFormModal from "../../includes/overlays/createFormModal.vue";
export default {
  components: { createFormModal },
  name: "entries",

  data() {
    return {
      isClicked: true,
      search: "",
      formName: "",
      dataEntries: [],
      hypn_id: null,
      headers: [],
      allEntries: null,
      selectedHeaders: [],
      selectedColumns: [],
    };
  },
  methods: {
    ...mapActions({
      showToast: "ui/showToast",
      formEntries: "formBuilder/getFormEntries",
    }),
    showModal() {
      this.$refs.formDialog.openDialog();
    },
    toggleSearch() {
      this.isClicked = false;
    },
    searchDataTable(e) {
      this.$refs.dataTable.setSearchText(e);
    },
    addColumns(event) {
      console.log(event);
      //this.selectedColumns = event;
      console.log(JSON.stringify(this.selectedColumns, null, 2));
    },
    async fetchFormsById() {
      let response = await this.$store.dispatch(
        "formBuilder/getSingleForm",
        this.$route.params.id
      );
      // console.log(JSON.stringify(response.data.data.form_fields, null, 2));
      // console.log(JSON.stringify(response.data.data.hypn_id, null, 2));

      this.hypn_id = response.data.data.hypn_id;
    },
    async fetchEntries() {
      let response = await this.$store.dispatch(
        "formBuilder/getFormEntries",
        this.hypn_id
      );

      // console.log(JSON.stringify(response.data.data, null, 2));

      // this.formName = response.data.form_title;
      const allEntries = response.data.data;

      //map over the allEntries and get a new array that contains just the form_entry objs
      const formEntryArray = allEntries.map((entry) => entry.form_entry);
      console.log(JSON.stringify(formEntryArray, null, 2));

      this.dataEntries = formEntryArray;

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
      this.selectedColumns = this.headers.slice(0, 5);

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

    //download entries as cvs file
    alertCSVDownload() {
      this.showToast({
        sclass: "success",
        show: true,
        message: "CSV downloaded!",
        timeout: 3000,
      });
    },
  },
  computed: {
    // selectedColumns() {
    //   var x = [];
    //   if (this.selectedHeaders.length > 5) {
    //     x = this.selectedHeaders.slice(0, 5);
    //   }
    //   return x;
    // },
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

    ...mapGetters({
      singleForm: "formBuilder/getSingleForm",
    }),
  },

  async mounted() {
    await this.fetchFormsById();
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
