<template>
  <div class="ml-0">
    <div>
      <v-card width="100%" flat class="d-flex" color="#f4f4f4">
        <v-btn
          plain
          @click="goBack"
          class="ml-4 my-2 text-capitalize"
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
          style="max-width: 416px; color: #311b92"
        >
          {{ formName }}
        </span>
        <v-spacer></v-spacer>
        <v-btn
          @click="openEntries"
          elevation="0"
          active-class="active"
          class="ml-4 my-2"
          style="
            font-family: Inter;
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 19px;
            background-color: white;
          "
        >
          <v-icon small>mdi-format-indent-increase</v-icon>
          <span class="pl-2 text-caption" style="font-weight: 700"
            >Entries</span
          >
        </v-btn>
        <v-btn
          elevation="0"
          class="mx-4 my-2"
          style="
            font-family: Inter;
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 19px;
            color: #7f919b;
            background-color: white;
          "
        >
          <v-icon small>mdi-square-edit-outline</v-icon>
          <span class="pa-2 text-caption" style="font-weight: 700">Edit</span>
        </v-btn>
      </v-card>
    </div>

    <div v-if="!formDisplay">
      <div v-if="showEntries">
        <v-data-table
          dense
          :headers="headers"
          :items="inbox"
          hide-default-footer
          disable-pagination
          item-key="iD"
          width="1340"
          class="elevation-0 table-text"
        >
          <template v-slot:[`item.transactionType`]="{ item }">
            <v-chip
              :color="`${item.transactionType === 'expense' ? '#F9EED2' : ''}`"
              :text-color="`${
                item.transactionType === 'expense' ? '#E3AA1C' : ''
              }`"
              x-small
            >
              {{ item.transactionType }}
            </v-chip>
          </template>

          <template v-slot:[`item.status`]="{ item }">
            <v-icon
              small
              :color="`${item.status === 'processed' ? '#2BD5AE' : '#E3AA1C'}`"
            >
              mdi-circle-medium
            </v-icon>
            <span>
              {{ item.status }}
            </span>
          </template>
          <template v-slot:[`item.date`]="{ item }">
            <span>
              {{ item.date | date }}
            </span>
          </template>
        </v-data-table>
      </div>
      <div v-else>
        <div class="mx-0 px-0">
          <h4 class="pageTitle">Your form(s)</h4>
          <p class="pageDespt">
            Build custom forms that trigger process workflows
          </p>
        </div>

        <template>
          <SingleFormCard
            @create-form="buildForm"
            @edit-form="displayForm"
            style="margin-left: 42px"
            :createdAt="dateValue() | date"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import SingleFormCard from "./SingleFormCard.vue";

export default {
  components: { SingleFormCard },
  name: "InboxForm",

  data() {
    return {
      newForm: false,
      formDisplay: false,
      showEntries: false,
      formName: "New Form 1",
      inbox: [
        {
          id: 1,
          transactionType: "expense",
          amount: 300000.0,
          ref: 300000.0,
          requester: "John Bello",
          date: new Date(),
          status: "processing",
        },
        {
          id: 2,
          transactionType: "expense",
          amount: 400000.0,
          ref: 400000.0,
          requester: "Emma Thomas",
          date: new Date(),
          status: "processed",
        },
        {
          id: 3,
          transactionType: "expense",
          amount: 100000.0,
          ref: 100000.0,
          requester: "Sussan Boma",
          date: new Date(),
          status: "processed",
        },
        {
          id: 4,
          transactionType: "expense",
          amount: 250000.0,
          ref: 250000.0,
          requester: "John Bello",
          date: new Date(),
          status: "pending",
        },
        {
          id: 5,
          transactionType: "expense",
          amount: 150000.0,
          ref: 150000.0,
          requester: "Pat Ede",
          date: new Date(),
          status: "processing",
        },
        {
          id: 6,
          transactionType: "expense",
          amount: 3000.0,
          ref: 3000.0,
          requester: "Obinna Nwafor",
          date: new Date(),
          status: "pending",
        },
      ],
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          class: "primary--text",
          value: "id",
        },
        {
          text: "Type",
          class: "primary--text",
          value: "transactionType",
        },
        {
          text: "Amount",
          align: "end",
          sortable: false,
          class: "primary--text",
          value: "amount",
        },
        {
          text: "Currency",
          class: "primary--text",
          value: "currency",
        },
        {
          text: "Ref no.",
          class: "primary--text",
          value: "ref",
        },
        {
          text: "Status",
          class: "primary--text",
          value: "status",
        },
        {
          text: "Requester",
          align: "end",
          sortable: false,
          class: "primary--text",
          value: "requester",
        },
        { text: "Date", class: "primary--text", value: "date" },
        { text: "Action", class: "primary--text", value: "action" },
      ],
    };
  },
  methods: {
    buildForm() {
      this.newForm = true;
    },
    openEntries() {
      this.showEntries = true;
    },
    goBack() {
      this.showEntries = false;
      this.newForm = !this.newForm;
      //this.formDisplay = !this.formDisplay;
    },

    dateValue() {
      return new Date();
    },
    displayForm() {
      this.formDisplay = !this.formDisplay;
      console.log(this.formDisplay);
    },
  },
};
</script>

<style>
.active {
  color: #311b92;
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
  color: #311b92;
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
