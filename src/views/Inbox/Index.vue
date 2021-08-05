<template>
  <div class="container">
    <div v-if="isNotEmpty">
      <v-row align="center" justify="end">
        <v-btn
          class="mr-16"
          color="primary"
          style="
            margin-top: 25px;
            width: 121px;
            height: 54px;
            background: #311b92;
            box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
            border-radius: 4px;
          "
        >
          <img
            :src="require('@/assets/file.svg')"
            alt="A file svg icon"
            style="padding-right: 8px"
          />
          <span
            style="
              font-family: Inter;
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              line-height: 17px;
              text-align: center;
              letter-spacing: 0.636364px;
            "
            class="text-capitalize"
          >
            New
          </span>
        </v-btn>
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
      <v-row align="center">
        <div>
          <h3
            class="text-bold pl-12"
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
        <v-spacer></v-spacer>
        <v-btn
          dense
          class="mr-6"
          color="primary"
          style="
            margin-top: 25px;
            width: 121px;
            height: 54px;
            background: #311b92;
            box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
            border-radius: 4px;
          "
        >
          <img
            :src="require('@/assets/file.svg')"
            alt="A file svg icon"
            style="padding-right: 10px"
          />
          <span
            style="
              font-family: Inter;
              font-style: normal;
              font-weight: 500;
              font-size: 14px;
              line-height: 17px;
              text-align: center;
              letter-spacing: 0.636364px;
            "
          >
            New
          </span>
        </v-btn>
      </v-row>

      <v-card width="1350" height="700" class="ml-14">
        <div class="d-flex mt-12 text-center" justify="center">
          <v-card flat width="1300" class="ml-10">
            <v-tabs v-model="tab">
              <v-tab v-for="item in items" :key="item.tab">{{
                item.tab
              }}</v-tab>

              <v-tab style="color: #ff6a6a"
                ><v-icon left color="#FF6A6A" small class="pr-1"
                  >mdi-stop-circle-outline
                </v-icon>
                EXCEPTION
              </v-tab>
              <v-spacer></v-spacer>
              <v-btn plain
                ><v-icon small left class="pr-1">
                  mdi-account-supervisor-outline
                </v-icon>

                invite</v-btn
              >
              <v-btn plain class="text--disabled">
                search
                <v-icon small right class="pr-1"> mdi-magnify </v-icon>
              </v-btn>
            </v-tabs>
          </v-card>
        </div>
        <div>
          <v-card flat class="switch-card ml-10 d-flex">
            <v-switch
              class="pl-1"
              color="#16be98"
              v-model="autoProcess"
              label="Auto process"
            ></v-switch>
            <v-switch
              class="px-4"
              color="#16be98"
              v-model="sendToWorkflow"
              label="Send to workflow"
            ></v-switch>
            <v-chip class="mt-6" x-small> workflow name… </v-chip>
            <v-spacer></v-spacer>
            <v-btn color="#2BD5AE" class="mt-2 export-btn mr-16" elevation="4"
              ><span class="material-icons"> import_export </span>Export</v-btn
            >
          </v-card>
        </div>
        <component v-bind:is="items[tab].content"></component>
      </v-card>
    </div>
  </div>
</template>

<script>
import TabDataTableAll from "../../components/TabDataTableAll.vue";
import TabDataTableEmail from "../../components/TabDataTableEmail.vue";
import TabDataTableForms from "../../components/TabDataTableForms.vue";
import TabDataTableReviews from "../../components/TabDataTableReviews.vue";

export default {
  components: {
    TabDataTableAll,
    TabDataTableEmail,
    TabDataTableReviews,
    TabDataTableForms,
  },
  name: "",
  data() {
    return {
      autoProcess: true,
      sendToWorkflow: true,
      isNotEmpty: false,
      tab: 0,
      items: [
        { tab: "All", content: "TabDataTableAll" },
        { tab: "Email", content: "TabDataTableEmail" },
        { tab: "Forms", content: "TabDataTableForms" },
        { tab: "Reviews", content: "TabDataTableReviews" },
      ],
    };
  },
};
</script>

<style scoped>
.transTotal {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #7f919b;
}
.switch-card {
  width: 1300px;
  height: 53px;
  background: rgba(127, 145, 155, 0.052607);
}

.switch {
  width: 15.28px;
  height: 15.28px;
}

.export-btn {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  letter-spacing: 0.636364px;

  color: #301f78;
}
.v-data-table > .v-data-table__wrapper > table {
  width: 1300px;
  border-spacing: 0;
}

.v-data-table {
  line-height: 3;
  max-width: 1300px;
}
.v-data-table-header {
  height: 45px;
}

.v-table tbody td {
  height: 40px;
  border: none;
}
.theme--light.v-table tbody tr:not(:last-child) {
  border-bottom: none;
}
</style>
