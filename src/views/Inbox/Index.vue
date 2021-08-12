<template>
  <v-container>
    <div v-if="isNotEmpty">
      <v-row align="center" justify="end">
        <drop-down-menu />
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
      <v-row align="center" class="mx-14">
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
        <v-spacer></v-spacer>

        <drop-down-menu />
      </v-row>

      <v-card flat elevation="6" width="1340" height="674" class="ml-14">
        <div class="d-flex mt-12 text-center" justify="center">
          <v-card
            flat
            width="1340"
            style="border-bottom: 1px solid rgba(127, 145, 155, 0.3)"
          >
            <v-tabs v-model="tab">
              <v-tab
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
                ><v-icon left color="#FF6A6A" small class="pr-1 mr-0"
                  >mdi-stop-circle-outline
                </v-icon>
                EXCEPTION
              </v-tab>
              <v-spacer></v-spacer>
              <v-btn class="pt-4" plain>
                <simple-line-icons left class="pr-1 m-0" icon="people" no-svg />

                <b
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 12px;
                    line-height: 20px;
                    letter-spacing: 0.55px;
                    text-transform: uppercase;
                  "
                  >invite</b
                ></v-btn
              >
              <v-btn
                plain
                class="text-black pt-4"
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
            </v-tabs>
          </v-card>
        </div>
        <div>
          <v-card flat class="switch-card d-flex">
            <v-switch
              dense
              class="pl-4"
              color="#16be98"
              v-model="autoProcess"
              label="Auto process"
            ></v-switch>
            <v-switch
              dense
              class="px-4"
              color="#16be98"
              v-model="sendToWorkflow"
              label="Send to workflow"
            ></v-switch>
            <v-chip class="mt-6" x-small> workflow name… </v-chip>
            <v-spacer></v-spacer>
            <v-btn color="#2BD5AE" class="my-2 export-btn mr-9" elevation="3"
              ><span class="material-icons pr-1"> import_export </span
              ><span
                style="
                  font-family: Inter;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 11px;
                  line-height: 12px;
                  text-align: center;
                  letter-spacing: 0.636364px;
                  color: #301f78;
                "
                >Export</span
              >
            </v-btn>
          </v-card>
        </div>
        <component v-bind:is="items[tab].content" class="ml-0"></component>
      </v-card>
    </div>
    <router-view></router-view>
  </v-container>
</template>

<script>
import TabDataTableAll from "../../components/TabDataTableAll.vue";
import TabDataTableEmail from "../../components/TabDataTableEmail.vue";
import TabDataTableForms from "../../components/TabDataTableForms.vue";
import TabDataTableReviews from "../../components/TabDataTableReviews.vue";
import DropDownMenu from "../../includes/DropDownMenu.vue";
import SimpleLineIcons from "vue-simple-line";

export default {
  components: {
    TabDataTableAll,
    TabDataTableEmail,
    TabDataTableReviews,
    TabDataTableForms,
    DropDownMenu,
    SimpleLineIcons,
  },
  name: "Inbox",
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
  font-family: Inter;
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
