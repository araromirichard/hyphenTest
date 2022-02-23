<template>
  <v-container>
    <v-row>
      <v-col class="d-flex flex-column align-center justify-center" cols="12">
        <v-container class="mt-md-12">
          <v-row class="mx-md-8 pa-0">
            <v-col
              class="d-flex flex-column align-center justify-center"
              cols="12"
            >
              <v-card
                :width="$vuetify.breakpoint.smAndDown ? '100%' : '75%'"
                elevation="3"
              >
                <v-card
                  flat
                  style="border-bottom: 1px solid rgba(127, 145, 155, 0.3)"
                >
                  <v-tabs v-model="tab" align-with-title>
                    <v-tab
                      class="mt-2"
                      v-for="item in items"
                      :key="item.tab"
                      style="
                        font-family: Inter;
                        font-style: normal;
                        font-weight: 800;
                        font-size: 12px;
                        line-height: 15px;
                        text-transform: uppercase;
                      "
                      >{{ item.tab }}</v-tab
                    >
                  </v-tabs>
                </v-card>
                <div class="ma-0 pa-0">
                  <Btn-card />
                </div>
                <v-card width="100%" class="pb-12" flat>
                  <component
                    v-bind:is="items[tab].content"
                    class="ml-0"
                  ></component>
                </v-card>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import OrganTab from "@/includes/settings/organ/OrganTab.vue";
import AccountTab from "@/includes/settings/organ/AccountTab.vue";
import BtnCard from "../../includes/settings/btnCard.vue";
export default {
  data() {
    return {
      tab: 0,

      items: [
        { tab: "Organization", content: "OrganTab" },
        { tab: "Account", content: "AccountTab" },
      ],
    };
  },
  components: {
    OrganTab,
    AccountTab,
    BtnCard,
  },
};
</script>

<style scoped>
.v-application .elevation-3 {
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 3%), 0px 6px 10px 0px rgb(0 0 0 / 3%),
    0px 1px 18px 0px rgb(0 0 0 / 3%) !important;
}
</style>
