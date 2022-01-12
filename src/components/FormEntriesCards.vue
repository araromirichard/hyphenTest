<template>
  <v-container class="justify-center px-0 pt-0">
    <v-card
      width="100%"
      height="48px"
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
        style="max-width: 416px; color: var(--v-primary-base);"
      >
        {{ formName }}
      </span>
      <v-spacer></v-spacer>
    </v-card>

    <template>
      <v-container class="pt-8">
        <SingleFormCard
          v-if="showFormCards"
          @create-form="buildForm"
          @entries="showFormCards = false"
          class="ml-md-10"
          :createdAt="dateValue() | date"
        />

        <div class="ma-0 pa-0" v-else>
          <v-layout row wrap class="align-center my-2 px-6">
            <v-flex md2>
              <div class="d-flex align-center">
                <p class="mb-0 mr-4 primary--text font-weight-bold">ID</p>
                <p class="mb-0 mx-4 primary--text font-weight-bold">Name</p>
              </div>
            </v-flex>

            <v-flex md2>
              <div class="d-flex align-center">
                <p class="mb-0 primary--text font-weight-bold">
                  Account Number
                </p>
                <v-btn class="ml-1" color="grey lighten-1" icon>
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </div>
            </v-flex>
            <v-flex md2>
              <div class="d-flex align-center">
                <p class="mb-0 primary--text font-weight-bold">Routing No.</p>
              </div>
            </v-flex>
            <v-flex md3>
              <div class="d-flex align-center">
                <p class="mb-0 primary--text font-weight-bold">Address</p>
                <v-btn class="ml-1" color="grey lighten-1" icon>
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </div>
            </v-flex>
            <v-flex md1>
              <div class="d-flex align-center">
                <p class="mb-0 primary--text font-weight-bold">City</p>
                <v-btn class="ml-1" color="grey lighten-1" icon>
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </div>
            </v-flex>
            <v-flex md1>
              <div>
                <p class="mb-0 pl-md-4 primary--text font-weight-bold">State</p>
              </div>
            </v-flex>
            <v-flex md1>
              <div class="d-flex align-center">
                <p class="mb-0 pl-md-8 primary--text font-weight-bold">
                  Country
                </p>
              </div>
            </v-flex>
          </v-layout>
          <v-row>
            <v-col
              cols="12"
              v-for="form in filteredForms"
              :key="form.id"
              class="py-0 ma-0"
            >
              <FormEntiresTable
                :id="form.id"
                :bankName="form.bankName"
                :bankAccountNumber="form.bankAccountNumber"
                :bankAccountRoutingNumber="form.bankAccountRoutingNumber"
                :bankAddress="form.bankAddress"
                :bankCity="form.bankCity"
                :bankCountry="form.bankCountry"
                :bankState="form.bankState"
              />
            </v-col>
          </v-row>
        </div>
      </v-container>
    </template>
  </v-container>
</template>

<script>
import FormEntiresTable from "./FormEntiresTable.vue";
import SingleFormCard from "./SingleFormCard.vue";

export default {
  components: {
    SingleFormCard,
    FormEntiresTable,
  },
  name: "InboxForm",

  data() {
    return {
      newForm: false,
      formDisplay: false,
      showFormCards: true,

      formName: "New Form 1",
      forms: [
        {
          id: 1,
          bankName: "City Pay Bank",
          bankAccountNumber: 123364487,
          bankAccountRoutingNumber: 300000.0,
          bankAddress: "Ojo Bello",
          bankCountry: "Nigeria",
          bankCity: "Ikeja",
          bankState: "Lagos",
        },
        {
          id: 2,
          bankName: "First Bank",
          bankAccountNumber: 11233644,
          bankAccountRoutingNumber: 300000.0,
          bankAddress: "John Peter",
          bankCountry: "Angola",
          bankCity: "Ikeja",
          bankState: "Benin",
        },
        {
          id: 3,
          bankName: "UBA",
          bankAccountNumber: 102336447,
          bankAccountRoutingNumber: 300000.0,
          bankAddress: "John Bello",
          bankCountry: "Nigeria",
          bankCity: "Ikeja",
          bankState: "Lagos",
        },
        {
          id: 4,
          bankName: "City Pay Bank",
          bankAccountNumber: 123364487,
          bankAccountRoutingNumber: 300000.0,
          bankAddress: "John Bello",
          bankCountry: "Nigeria",
          bankCity: "Ikeja",
          bankState: "Lagos",
        },
      ],
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
  },
  computed: {
    filteredForms() {
      if (this.search) {
        return this.forms.filter((form) => {
          return (
            form.bankName.toLowerCase().match(this.search.toLowerCase()) ||
            form.id.toString().match(this.search) ||
            form.bankAccountNumber.toString().includes(this.search)
          );
        });
      } else return this.forms;
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
</style>
