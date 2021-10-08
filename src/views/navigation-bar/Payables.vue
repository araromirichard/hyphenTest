<template>
  <v-container>
    <div>
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
            Payables
            <span class="transTotal align-center">{{ payableRecord }}</span>
          </h3>
        </div>
        <v-spacer></v-spacer>

        <DropDownMenu style="margin-right: 88px" />
      </v-row>

      <v-card
        flat
        elevation="6"
        max-width="1340"
        min-height="674"
        class="ml-14"
      >
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
              <v-btn class="pt-4 mt-1" plain>
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
  name: "payables",
  data() {
    return {
      payableRecord: "234 Records",
      dialog: false,
      noInvoice: false,
      isClicked: true,
      tab: 0,
      search: "",
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
  components: {
    TabDataTableAll,
    TabDataTableEmail,
    TabDataTableReviews,
    TabDataTableForms,
    DropDownMenu,
    SimpleLineIcons,
  },
  methods: {
    toggleSearch() {
      this.isClicked = false;
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
