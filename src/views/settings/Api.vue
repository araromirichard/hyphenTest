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
                    <v-spacer></v-spacer>
                    <v-chip
                      color="#D8D8D8"
                      class="my-auto mx-8"
                      v-if="isAnAdmin"
                      small
                      >Admin</v-chip
                    >
                  </v-tabs>
                </v-card>
                <div class="ma-0 pa-0">
                  <v-card
                    height="66px"
                    width="100%"
                    flat
                    class="d-flex my-auto"
                    style="background: rgba(127, 145, 155, 0.052607)"
                  >
                    <v-spacer></v-spacer>
                    <Settings-btn :btnTitle="btnTitle" class="mx-8 my-auto" />
                  </v-card>
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
import apiTab from "@/includes/settings/Api/apiTab.vue";
import BtnCard from "../../includes/settings/btnCard.vue";
import SettingsBtn from "../../includes/btns/settingsBtn.vue";
export default {
  data() {
    return {
      tab: 0,
      isAnAdmin: true,
      btnTitle: "Documentation",
      items: [{ tab: "Api", content: "apiTab" }],
    };
  },
  components: {
    apiTab,
    BtnCard,
    SettingsBtn,
  },
};
</script>

<style scoped>
.v-application .elevation-3 {
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 3%), 0px 6px 10px 0px rgb(0 0 0 / 3%),
    0px 1px 18px 0px rgb(0 0 0 / 3%) !important;
}
</style>
