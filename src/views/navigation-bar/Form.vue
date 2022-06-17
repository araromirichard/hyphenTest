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
        <span class="total__form align-center" v-if="entriesCount"
          >{{ entriesCount.total_forms }} Form(s)</span
        >
      </h3>
      <v-spacer></v-spacer>

      <create-form-modal ref="formDialog" />
    </div>
    <div class="" v-if="$vuetify.breakpoint.smAndDown">
      <div class="d-flex mx-2">
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
          <span class="total__form align-center" v-if="entriesCount"
            >{{ entriesCount.total_forms }} Form(s)</span
          >
        </p>
        <v-spacer></v-spacer>
        <create-form-modal ref="formDialog" />
      </div>
      <div class="d-flex">
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
    </div>

    <!-- inbox summary Info cards -->
    <v-row
      class="mt-16 mx-2 px-2 mx-md-0 pl-md-8 pr-md-4"
      align="center"
      justify="center"
    >
      <v-col class="pa-0 my-4 my-md-0 mx-0" cols="12" md="4">
        <v-card
          elevation="3"
          class="ml-md-5 mr-md-2 mx-auto py-md-6 px-4"
          flat
          min-height="174"
          :width="cardWidth[$vuetify.breakpoint.name]"
        >
          <v-skeleton-loader width="100%" type="card" :loading="loading">
            <v-row class="mx-0" style="width: 100%; height: 100%">
              <v-col class="mx-0 pa-0 py-auto" cols="3">
                <div
                  class="d-flex align-center justify-center"
                  style="width: 100%; height: 100%"
                >
                  <v-avatar style="background: #d5f7ef" size="70">
                    <span class="avatar__txt">
                      {{ entriesCount.total_entries }}
                    </span>
                  </v-avatar>
                </div>
              </v-col>
              <v-col class="pa-0 mx-0" cols="9">
                <div style="width: 100%; height: 100%">
                  <div class="pr-8 pl-4">
                    <p class="pt-8 my-0 h-card-title">Total Entries</p>

                    <!-- <p class="pt-2 pr-1 my-md-1 text-wrap h-card-body-bold">
                      xxxxxxxxxxxx
                    </p>  -->
                    <p class="pt-6 text-wrap h-card-body">
                      All entries recieved across all your forms
                    </p>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-skeleton-loader>
        </v-card>
      </v-col>
      <v-col class="pa-0 my-4 my-md-0" cols="12" md="4">
        <v-card
          elevation="3"
          class="mr-md-6 mx-auto ml-md-6 py-md-6 px-4"
          flat
          min-height="174"
          :width="cardWidth[$vuetify.breakpoint.name]"
        >
          <v-skeleton-loader width="100%" type="card" :loading="loading">
            <v-row class="mx-0" style="width: 100%; height: 100%">
              <v-col class="mx-0 pa-0" cols="3">
                <div
                  class="d-flex align-center justify-center"
                  style="width: 100%; height: 100%"
                >
                  <v-avatar style="background: #eef3fb" size="70">
                    <span class="avatar__txt">
                      {{ entriesCount.this_month }}
                    </span>
                  </v-avatar>
                </div>
              </v-col>
              <v-col class="pa-0 mx-0" cols="9">
                <div style="width: 100%; height: 100%">
                  <div class="pr-8 pl-4">
                    <p class="pt-8 my-0 h-card-title">Entries this month</p>
                    <p class="pt-6 h-card-body">
                      Total entries submitted to your forms in the last 30 days
                    </p>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-skeleton-loader>
        </v-card>
      </v-col>
      <v-col class="pa-0 my-4 my-md-0" cols="12" md="4">
        <v-card
          elevation="3"
          class="ml-md-4 mr-md-10 mr-md-6 mx-auto py-md-6 px-4"
          flat
          min-height="174"
          :width="cardWidth[$vuetify.breakpoint.name]"
        >
          <v-skeleton-loader width="100%" type="card" :loading="loading">
            <v-row class="mx-0" style="width: 100%; height: 100%">
              <v-col class="mx-0 pa-0" cols="3">
                <div
                  class="d-flex align-center justify-center"
                  style="width: 100%; height: 100%"
                >
                  <v-avatar style="background: #f8f7f4" size="70">
                    <span class="avatar__txt">
                      {{ entriesCount.total_forms }}
                    </span>
                  </v-avatar>
                </div>
              </v-col>
              <v-col class="pa-0 mx-0" cols="9">
                <div style="width: 100%; height: 100%">
                  <div class="pr-8 pl-4">
                    <p class="pt-8 my-0 h-card-title">Total Forms</p>
                    <p class="pt-6 text-wrap h-card-body">
                      Total number of forms you have created
                    </p>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-skeleton-loader>
        </v-card>
      </v-col>
    </v-row>
    <!-- inbox summary Info cards -->
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
            <v-tabs v-model="tab" slider-size="4" align-with-title>
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
            @open-modal="showModal"
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
import { mapGetters } from "vuex";
import FormEntriesCards from "../../components/FormEntriesCards.vue";
import CreateFormModal from "../../includes/overlays/createFormModal.vue";

export default {
  components: { FormEntriesCards, CreateFormModal },
  name: "Form",
  data() {
    return {
      isClicked: true,
      loading: false,
      show: false,
      search: "",
      tab: 0,
      items: [{ tab: "All", content: "FormEntriesCards" }],
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
    };
  },
  computed: {
    ...mapGetters({
      entriesCount: "formBuilder/entriesCount",
    }),
  },
  methods: {
    toggleSearch() {
      this.isClicked = false;
    },
    searchDataTable(e) {
      this.$refs.dataTable.setSearchText(e);
    },
    showModal() {
      this.$refs.formDialog.openDialog();
    },
  },
  async mounted() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);

    await this.$store.dispatch("formBuilder/getFormEntriesCount");
    // console.log(JSON.stringify());
  },
};
</script>

<style scoped>
.v-application .elevation-6 {
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 3%), 0px 6px 10px 0px rgb(0 0 0 / 3%),
    0px 1px 18px 0px rgb(0 0 0 / 3%) !important;
}
.v-application .elevation-3 {
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 3%), 0px 6px 10px 0px rgb(0 0 0 / 3%),
    0px 1px 18px 0px rgb(0 0 0 / 3%) !important;
}
.v-input .v-label {
  font-size: 12px !important;
}
.field__title {
  padding-bottom: 10px;
  margin-top: 30px;
  margin-left: 67px;
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.45px;
  color: #7f919b;
}
.form__field {
  margin-left: 67px;
  margin-right: 67px;
  margin-bottom: 30px;
  /* background: #ffffff; */
  /* border: 1px solid rgba(212, 216, 223, 0.377431); */
  border-radius: 3px;
}

.h-card-title {
  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
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
  line-height: 14px;
  letter-spacing: 0.545455px;
  color: #19283d;
}
.h-card-body {
  max-width: 260px;
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.545455px;
  color: rgba(0, 35, 56, 0.5);
}

.avatar__txt {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #19283d;
}
.total__form {
  font-family: "Inter" sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #7f919b;
}
</style>
