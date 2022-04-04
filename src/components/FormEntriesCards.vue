<template>
  <v-container class="justify-center px-0 pt-0">
    <v-card
      width="100%"
      height="58px"
      flat
      class="d-flex mx-sm-0 py-0 py-md-2"
      color="#f4f4f4"
    >
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
    </v-card>

    <template>
      <v-container class="pt-8 px-0">
        <SingleFormCard
          v-if="showFormCards"
          @create-form="buildForm"
          class="mx-md-10"
        />

       
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
