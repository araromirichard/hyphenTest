<template>
  <v-container>
    <div
      class="
        mx-10 mx-sm-12 mx-md-14
        px-md-0
        my-0
        pt-10
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
              @change="changeValue"
              class="ml-9"
              v-model="payment"
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
    <div class="d-flex" v-if="$vuetify.breakpoint.mdAndDown">
      <p
        :style="{ display: `${isClicked != true ? 'none' : ''}` }"
        class="pt-7 pl-5 primary--text"
        style="
          font-family: Inter;
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 22px;
          letter-spacing: -0.73px;
        "
      >
        Forms
      </p>
      <v-spacer></v-spacer>
      <v-icon v-if="isClicked" @click="toggleSearch" class="pr-4 pt-7">
        mdi-magnify
      </v-icon>
      <v-expand-x-transition v-else>
        <v-text-field
          @input="searchDataTable"
          v-model="search"
          @blur="isClicked = true && !search"
          class="seacrh-field mt-4 mr-2"
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
    </div>
    <div class="py-6">
      <v-card
        flat
        elevation="6"
        width="93%"
        min-height="674"
        class="mx-auto my-md-10"
      >
        <template>
          <v-card
            v-if="$vuetify.breakpoint.mdAndUp"
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

              <v-spacer></v-spacer>

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
          <component
            @open-modal="dialog = true"
            v-bind:is="items[tab].content"
            class="ml-0"
            ref="formCards"
          ></component>
        </template>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import FormEntriesCards from "../../components/FormEntriesCards.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { FormEntriesCards },
  name: "Form",
  data() {
    return {
      dialog: false,
      payment: null,
      isClicked: true,
      search: "",
      formName: "",
      tab: 0,
      items: [{ tab: "All", content: "FormEntriesCards" }],
    };
  },
  computed: {
    ...mapGetters({
      is_payment: "formBuilder/getPaymentStatus",
    }),
  },
  methods: {
    ...mapActions({ showToast: "ui/showToast" }),
    closeFormDialog() {
      this.dialog = false;
    },

    //check and change the store value of is_payment switch
    changeValue() {
      this.$store.dispatch("formBuilder/updatePaymentStatus", this.payment);
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
  },
};
</script>

<style scoped>
.v-application .elevation-6 {
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 3%), 0px 6px 10px 0px rgb(0 0 0 / 3%),
    0px 1px 18px 0px rgb(0 0 0 / 3%) !important;
}
</style>
