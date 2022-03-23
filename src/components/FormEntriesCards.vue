<template>
  <v-container class="justify-center px-0 pt-0">
    <v-card
      width="100%"
      height="58px"
      flat
      class="d-flex mx-sm-0 py-0 py-md-2"
      color="#f4f4f4"
    >
      <v-btn
        v-if="!showFormCards"
        plain
        @click="showFormCards = true"
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
        v-if="formDisplay"
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
          v-if="!showFormCards"
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

    <template>
      <v-container class="pt-8 px-0">
        <SingleFormCard
          v-if="showFormCards"
          @send-entries="loadEntries"
          @create-form="buildForm"
          @entries="showFormCards = false"
          class="mx-md-10"
        />

        <div class="ma-0 pa-0" v-else>
          <template>
            <v-data-table
              height="100%"
              ref="myTable"
              :headers="showHeaders"
              :items="dataEntries"
              :items-per-page="8"
              class="elevation-0"
            >
            </v-data-table>
          </template>
        </div>
      </v-container>
    </template>
  </v-container>
</template>

<script>
import SingleFormCard from "./SingleFormCard.vue";

export default {
  components: {
    SingleFormCard,
  },
  name: "InboxForm",

  data() {
    return {
      newForm: false,
      formDisplay: false,
      showFormCards: true,
      headers: [],
      selectedHeaders: [],
      dataEntries: [
        {
          vendorEmail: "richjohn@gmail.com",
          contactPerson: "Emmanuel Peace",
          vendorName: "Richard Johnson",
          Date: "21/03/2022",
          vendorPhoneNumber: "+234705647896",
          vendorAddress: "plot 2, make way avenue, solid state, Nigeria",
          courier: "DHL",
          shipToAddress: "2, Ajayi street, Uwasota road, Benin city",
          shipping: "Dispatch",
          contactEmail: "emmapee@yahoo.com",
          contactNumber: "+234804578965",
        },
      ],
      loading: true,

      formName: "New Form 1",
    };
  },
  methods: {
    toggleSearch() {
      this.isClicked = false;
    },
    searchDataTable(e) {
      this.$refs.dataTable.setSearchText(e);
    },
    buildForm() {
      this.newForm = true;
    },

    dateValue() {
      return new Date();
    },
    displayForm() {
      this.formDisplay = !this.formDisplay;
      console.log(this.formDisplay);
    },
    setSearchText(value) {
      this.search = value;
    },
    loadEntries(value) {
      const newValueArray = [];
      for (const key in value) {
        const newValue = {};
        newValue.text = value[key]["name"];
        newValue.value = value[key]["name"];

        newValueArray.push(newValue);
      }
      this.headers = newValueArray;
      console.log(this.headers);
    },
    populateHeaders() {
      let headers = JSON.parse(localStorage.getItem("headers"));
      if (!headers) {
        this.selectedHeaders = this.headers;
      } else {
        this.selectedHeaders = headers;
      }
    },
  },
  async mounted() {
    //
    await this.populateHeaders();
  },
  computed: {
    showHeaders() {
      return this.headers.filter((s) => this.selectedHeaders.includes(s));
    },
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
</style>
