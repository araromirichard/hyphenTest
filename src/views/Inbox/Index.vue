<template>
  <v-container>
    <!-- <v-skeleton-loader width="90%" type="table" :loading="loading"> -->
    <v-row>
      <v-col cols="12">
        <!-- inbox title bar and action btn  -->
        <v-row align="center" class="mx-auto mx-md-14 pt-md-10">
          <v-col class="pa-sm-0 d-flex align-center">
            <div class="pa-0">
              <h3 class="text-bold primary--text page__title">
                Inbox
                <span
                  class="transTotal align-center"
                  v-if="invoiceArray && invoiceArray.length > 0"
                  >{{ totalInvoice }} Transaction(s)</span
                >
              </h3>
            </div>

            <v-spacer></v-spacer>
            <DropDownMenu
              btnText="New"
              icon="file"
              width="121px"
              height="54px"
              justify="right"
            />
          </v-col>
        </v-row>

        <!-- instructions when there is no invoice -->

        <no-invoice v-if="invoiceArray == null" />

        <!-- an animated loader component -->
        <div
          class="mx-auto mt-8"
          style="max-width: 250px"
          v-if="invoiceArray == null"
        >
          <v-progress-linear
            width="100%"
            color="primary"
            indeterminate
            rounded
            height="8"
          ></v-progress-linear>
        </div>
      </v-col>
    </v-row>

    <!-- inbox summary Info cards -->
    <InfoSummaryContainer class="mx-md-6" v-if="invoiceArray">
      <template #cardOne>
        <single-summary-card :loading="loading">
          <template #avatar>
            <card-avatar
              :isText="false"
              :style="{ background: avatarBC.one }"
            />
          </template>
          <template #cardBody>
            <div class="pr-2 pl-4">
              <p class="pt-1 my-0 h-card-title">Incoming invoice/bill</p>

              <p
                v-if="organizationToken.data"
                class="pt-1 pr-1 my-md-1 text-wrap h-card-body-bold"
              >
                {{ organizationToken.data.hypn_email }}
              </p>
              <p class="pt-1 text-wrap h-card-body">
                Forward your incoming invoices/bills to this address
              </p>
            </div>
          </template>
        </single-summary-card>
      </template>
      <template #cardTwo>
        <single-summary-card :loading="loading">
          <template #avatar>
            <card-avatar
              :aContent="totalInvoice"
              :style="{ background: avatarBC.two }"
            />
          </template>
          <template #cardBody>
            <div class="pr-8 pl-4">
              <p class="pt-6 my-0 h-card-title">Volume this month</p>
              <p class="pt-2 h-card-body">
                Total invoices/bills received in the last 30days
              </p>
            </div>
          </template>
        </single-summary-card>
      </template>
      <template #cardThree>
        <single-summary-card :loading="loading">
          <template #avatar>
            <card-avatar
              :aContent="NumOfExceptions"
              :style="{ background: avatarBC.three }"
            />
          </template>
          <template #cardBody>
            <div class="pr-8 pl-4">
              <p class="pt-6 my-0 h-card-title">Exceptions</p>
              <p class="pt-2 text-wrap h-card-body">
                Total number of invoices/bills that require manual oversight
              </p>
            </div>
          </template>
        </single-summary-card>
      </template>
    </InfoSummaryContainer>

    <!-- inbox table for desktop screen -->
    <v-row v-if="invoiceArray && invoiceArray.length > 0" class="px-2 px-md-0">
      <v-col cols="12">
        <v-card
          flat
          elevation="6"
          max-width="100%"
          min-width="320px"
          :min-height="$vuetify.breakpoint.xs ? '450px' : '674px'"
          class="mx-auto mx-md-14"
        >
          <v-skeleton-loader width="100%" type="table" :loading="loading">
            <div class="mt-md-12 mx-0">
              <v-card
                flat
                max-width="100%"
                style="border-bottom: 1px solid rgba(127, 145, 155, 0.3)"
              >
                <v-tabs
                  align-with-title
                  slider-size="3"
                  v-model="tab"
                  mobile-breakpoint="5"
                  v-if="$vuetify.breakpoint.mdAndUp"
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
                  >
                    <v-icon
                      v-if="item.tab == 'Exception'"
                      left
                      color="#ff6a6a"
                      small
                      class="pr-1 mr-0"
                    >
                      mdi-stop-circle-outline
                    </v-icon>
                    <span
                      class="font-weight-bold"
                      :style="{
                        color: `${item.tab == 'Exception' ? '#ff6a6a' : ''}`,
                      }"
                      >{{ item.tab }}</span
                    >
                  </v-tab>

                  <v-spacer></v-spacer>
                  <v-btn
                    class="pt-4 mt-1"
                    plain
                    @click.prevent="dialog2 = true"
                  >
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
                    >
                  </v-btn>
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
                      @input="searchDataTable"
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
            <component
              v-bind:is="items[tab].content"
              class="ml-0"
              ref="dataTable"
            ></component>
          </v-skeleton-loader>
        </v-card>
      </v-col>
    </v-row>
    <!-- inbox dialog starts here -->
    <template>
      <div>
        <v-dialog v-model="dialog2" max-width="516">
          <v-card color="#f8f7f4" class="rounded-lg">
            <v-card-title
              style="background: #ffffff; border-radius: 8px 8px 0px 0px"
            >
              <span
                style="
                  font-family: Inter;
                  font-style: normal;
                  font-weight: 600;
                  font-size: 16px;
                  line-height: 19px;
                  color: #19283d;
                "
                >Invite a Stakeholder</span
              >
              <v-spacer></v-spacer>
              <v-icon
                tag="button"
                @click="dialog2 = false"
                class="text-bolder"
                color="#596A73"
              >
                mdi-close
              </v-icon>
            </v-card-title>
            <validation-observer ref="observer" v-slot="{ invalid }">
              <form @submit.prevent="sendInvite">
                <div class="px-8 d-flex" style="background: #fdfaf2">
                  <p
                    style="
                      padding-top: 34px;
                      font-family: Inter;
                      font-style: normal;
                      font-weight: normal;
                      font-size: 12px;
                      line-height: 18px;
                      letter-spacing: 0.45px;
                      color: #7f919b;
                    "
                  >
                    Add details of <strong> Stakeholder</strong>
                  </p>
                </div>
                <div>
                  <validation-provider
                    v-slot="{ errors }"
                    name="First Name"
                    rules="required|alpha"
                  >
                    <v-text-field
                      v-model="stakeholder.firstName"
                      hide-details="auto"
                      class="mb-4"
                      type="text"
                      background-color="#ffffff"
                      style="margin-left: 52px; margin-right: 45px"
                      outlined
                      label="First Name"
                      :error-messages="errors"
                    >
                    </v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="Last Name"
                    rules="required|alpha"
                  >
                    <v-text-field
                      v-model="stakeholder.lastName"
                      hide-details="auto"
                      class="mb-4"
                      type="text"
                      background-color="#ffffff"
                      style="margin-left: 52px; margin-right: 45px"
                      outlined
                      label="Last Name"
                      :error-messages="errors"
                    >
                    </v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="email"
                    rules="required|email"
                  >
                    <v-text-field
                      v-model="stakeholder.email"
                      hide-details="auto"
                      class="mb-4"
                      type="email"
                      background-color="#ffffff"
                      style="margin-left: 52px; margin-right: 45px"
                      outlined
                      label="Email Address"
                      :error-messages="errors"
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="select"
                    rules="required"
                  >
                    <v-select
                      hide-details="auto"
                      background-color="#ffffff"
                      style="margin-left: 52px; margin-right: 45px"
                      v-model="stakeholder.selectedType"
                      :items="stakeholderTypes"
                      outlined
                      :error-messages="errors"
                      label="Select"
                      data-vv-name="select"
                      required
                    ></v-select>
                  </validation-provider>
                </div>
                <template>
                  <v-card-actions class="d-flex justify-end align-center mr-9">
                    <v-btn
                      :loading="isInviting"
                      @click="sendInvite"
                      :disabled="invalid"
                      width="121"
                      color="primary"
                      height="45"
                      style="
                        margin-top: 24px;
                        margin-bottom: 41px;
                        background: #16be98;
                        box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
                        border-radius: 4px;
                      "
                    >
                      <simple-line-icons
                        icon="plus"
                        size="small"
                        style="color: #ffffff"
                        :style="{
                          color: `${invalid ? '#050c13' : ''}`,
                        }"
                        no-svg
                      />
                      <span
                        class="pl-4 m-0 text-capitalize"
                        style="
                          font-family: Inter;
                          font-style: normal;
                          font-weight: 500;
                          font-size: 14px;
                          line-height: 17px;
                          text-align: center;
                          letter-spacing: 0.636364px;

                          color: #ffffff;
                        "
                        :style="{
                          color: `${invalid ? '#050c13' : ''}`,
                        }"
                        >Add</span
                      >
                    </v-btn>
                  </v-card-actions>
                </template>
              </form>
            </validation-observer>
          </v-card>
        </v-dialog>
      </div>
    </template>
    <!-- inbox dialog ends here -->

    <!-- tabs for mobile devices -->
    <v-container class="pa-0" v-if="$vuetify.breakpoint.mdAndDown">
      <v-row v-if="invoiceArray && invoiceArray.length > 0">
        <v-col cols="12">
          <v-bottom-navigation fixed class="pa-0" dark>
            <v-tabs
              centered
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
  </v-container>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import { required, email, alpha } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});
extend("alpha", {
  ...alpha,
  message: "{_field_} can only contain alphabeth",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});
import TabDataTableAll from "../../components/TabDataTableAll.vue";
import TabDataTableException from "../../components/TabDataTableException.vue";
import TabDataTableReviews from "../../components/TabDataTableReviews.vue";
import DropDownMenu from "../../includes/DropDownMenu.vue";
import SimpleLineIcons from "vue-simple-line";
import NoInvoice from "../../components/noInvoice.vue";
import InfoSummaryContainer from "../../components/InfoSummaryContainer.vue";
import SingleSummaryCard from "../../components/SingleSummaryCard.vue";
import CardAvatar from "../../components/CardAvatar.vue";

export default {
  name: "Inbox",
  data() {
    return {
      isInviting: false,
      invoiceArray: null,
      loading: false,
      dialog: false,
      dialog2: false,
      isClicked: true,
      tab: 0,
      tab1: 0,
      search: "",
      stakeholder: {
        firstName: "",
        lastName: "",
        email: "",
        selectedType: null,
      },
      password: "",
      stakeholderTypes: ["Co-worker", "Payee"],
      items: [
        { tab: "All", content: "TabDataTableAll" },
        { tab: "Reviews", content: "TabDataTableReviews" },
        { tab: "Exception", content: "TabDataTableException" },
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
      avatarSizes: {
        xl: 88,
        xs: 40,
        lg: 72,
        md: 64,
        sm: 48,
      },
      iconSizes: {
        xl: "42px",
        xs: "18px",
        lg: "32px",
        md: "24px",
        sm: "22px",
      },
      cardWidth: {
        xs: "100%",

        md: "630px",
      },
      avatarBC: {
        one: "#d5f7ef",
        two: "#eef3fb",
        three: "#f8f7f4",
      },
    };
  },
  components: {
    TabDataTableAll,
    TabDataTableException,
    TabDataTableReviews,
    DropDownMenu,
    SimpleLineIcons,
    ValidationProvider,
    ValidationObserver,
    NoInvoice,
    InfoSummaryContainer,
    SingleSummaryCard,
    CardAvatar,
  },
  methods: {
    ...mapActions({ showToast: "ui/showToast" }),
    toggleSearch() {
      this.isClicked = false;
    },
    searchDataTable(e) {
      this.$refs.dataTable.setSearchText(e);
    },
    async sendInvite() {
      this.isInviting = true;

      const orgId = this.organizationToken.data.organization;
      const payload = {
        username: this.getUsername,
        first_name: this.stakeholder.firstName,
        last_name: this.stakeholder.lastName,
        // role: this.stakeholder.selectedType,
        email: this.stakeholder.email,
        organization: this.organizationToken.data.organization,
      };
      // console.log(JSON.stringify(payload, null, 2));
      console.log(orgId);

      //       {
      //     "first_name":"Michael",
      //     "last_name":"James",
      //     "username":"testcoworker007",
      //     "email":"random007@mailinator.com",
      //     "organization": 2
      // }

      try {
        await this.$store.dispatch(
          "organizations/inviteCoWorker",

          payload
        );

        //show success toast
        this.showToast({
          sclass: "success",
          show: true,
          message: "co-worker successfully created",
          timeout: 3000,
        });
      } catch (error) {
        console.log(JSON.stringify(error, null, 2));
        this.showToast({
          sclass: "error",
          show: true,
          message: error.msg,
          timeout: 3000,
        });
      }
    },

    getOrganizationToken() {
      try {
        return this.$store.dispatch("organizations/getOrganizationToken");
      } catch (error) {
        console.log(JSON.stringify(error, null, 2));
      }
    },
    async getAllInvocies() {
      try {
        const response = await this.$store.dispatch(
          "invoices/FetchAllInvoices",
          this.user.organization.id
        );
        this.invoiceArray = response.data;
        //console.log(JSON.stringify(this.invoiceArray, null, 2));
      } catch (error) {
        console.log(JSON.stringify(error, null, 2));
      }
    },
  },
  async mounted() {
    if (this.getInvoices) {
      return (this.invoiceArray = this.getInvoices);
    } else {
      await this.getOrganizationToken();
      this.loading = true;
      setTimeout(
        () => {
          this.loading = false;
        },
        3000,
        this.getAllInvocies()
      );
    }
    //await this.getAllInvocies();
    console.log(JSON.stringify(this.organizationToken, null, 2));
    console.log(JSON.stringify(this.user, null, 2));
  },

  computed: {
    ...mapGetters({
      user: "auth/user",
      token: "auth/token",
      invoiceArrayStatus: "invoices/checkInvoiceArray",
      totalInvoice: "invoices/numOfInvoices",
      getInvoices: "invoices/getAllInvoices",
      NumOfExceptions: "invoices/checkNumberOfExceptions",
      organizationToken: "organizations/OrganToken",
      //organizationEmail: "organizations/getOrganizationEmail",
    }),
    ...mapState({
      organization: "organization",
      allInvoices: "invoices",
      formCards: "formBuilder",
    }),

    getOrgId() {
      //console.log(this.$store.state.auth.user);
      return this.$store.state.auth.user;
    },
    getUsername() {
      return this.stakeholder.firstName + this.stakeholder.lastName;
    },
  },

  watch: {
    getOrgId: {
      deep: true,
      immediate: true,
      handler(val) {
        if (val != null) {
          //console.log(JSON.stringify(val, null, 2));
          this.$store.dispatch(
            "invoices/FetchAllInvoices",
            val.organization.id
          );
        }
      },
    },
  },
};
</script>

<style scoped>
.h-card-title {
  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: rgba(0, 35, 56, 0.5);
}

.page__title {
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
}

.h-card-body-bold {
  max-width: 16rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
  font-size: 0.8rem;
  line-height: 12px;
  letter-spacing: 0.545455px;
  color: #19283d;
}

.h-card-body {
  max-width: 260px;
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.545455px;
  color: rgba(0, 35, 56, 0.5);
}

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

.v-application .elevation-3 {
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 3%), 0px 6px 10px 0px rgb(0 0 0 / 3%),
    0px 1px 18px 0px rgb(0 0 0 / 3%) !important;
}
</style>
