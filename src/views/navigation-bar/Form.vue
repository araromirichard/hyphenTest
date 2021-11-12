<template>
  <v-container>
    <div
      class="mx-14 my-0 pt-10 d-flex justify-sm-space-between"
      v-if="$vuetify.breakpoint.mdAndUp"
    >
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
        Forms
      </h3>
      <v-spacer></v-spacer>
      <v-btn
        to="/form/create-new-form"
        target="_blank"
        height="54"
        width="121"
        color="primary"
        elevation="20"
        large
        class="text-capitalize mx-auto"
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
        Form
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
export default {
  components: { FormEntriesCards },
  name: "Form",
  data() {
    return {
      isClicked: true,
      search: "",
      tab: 0,
      items: [{ tab: "All", content: "FormEntriesCards" }],
    };
  },
  methods: {
    toggleSearch() {
      this.isClicked = false;
    },
    searchDataTable(e) {
      this.$refs.dataTable.setSearchText(e);
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
