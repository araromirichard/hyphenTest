<template>
  <div>
    <v-navigation-drawer
      v-if="!noNavRoutes.includes($route.name)"
      app
      fixed
      stateless
      height="100%"
      permanent
      v-model="drawer"
      class="px-0"
    >
      <template v-slot:prepend>
        <v-list-item two-line class="pl-10 justify-center">
          <v-list-item-avatar color="primary" size="46">
            <img :src="require('@/assets/Shape.svg')" class="logo" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title style="padding-top: 6px"
              ><img :src="require('@/assets/pBot.svg')"
            /></v-list-item-title>
            <v-list-item-subtitle class="ml-6">on pBot</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-list flat class="py-4 pl-10">
        <v-list-item-group
          v-model="model"
          color="primary"
          active-class="navlink"
        >
          <v-list-item nav link to="/insight" class="mx-auto">
            <v-list-item-icon class="mr-4">
              <img
                :src="require('@/assets/pbot_icons/insights.svg')"
                class="navIcon"
              />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="navTxt">Insights</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item nav link to="/inbox" class="mx-auto">
            <v-list-item-icon class="mr-4">
              <img
                :src="require('@/assets/pbot_icons/download_import.svg')"
                class="navIcon"
              />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="navTxt">Inbox</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item nav link to="/form" class="mx-auto">
            <v-list-item-icon class="mr-4">
              <img
                :src="require('@/assets/pbot_icons/form.svg')"
                class="navIcon"
              />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="navTxt">Forms</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item nav link to="/workflow" class="mx-auto">
            <v-list-item-icon class="mr-4">
              <img
                :src="require('@/assets/pbot_icons/workflow_recycle.svg')"
                class="navIcon #7F919B"
              />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="navTxt">Workflows</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item nav link to="/payable" class="mx-auto">
            <v-list-item-icon class="mr-4">
              <img
                :src="require('@/assets/pbot_icons/cash.svg')"
                class="navIcon"
              />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="navTxt">Payables</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            nav
            link
            key="Integration"
            to="/integration"
            class="mx-auto"
          >
            <v-list-item-icon class="mr-4">
              <img
                :src="require('@/assets/pbot_icons/puzzle_integration.svg')"
                class="navIcon"
              />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="navTxt">Integrations</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <div class="pt-8">
        <v-list class="pl-10" dense>
          <v-list-item nav link to="#" class="mx-auto">
            <v-list-item-icon class="mr-4">
              <img
                :src="require('@/assets/pbot_icons/settings.svg')"
                class="navIcon"
              />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="navTxt">Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item nav link to="#" class="mx-auto">
            <v-list-item-icon class="mr-4">
              <img
                :src="require('@/assets/pbot_icons/agree_help.svg')"
                class="navIcon"
              />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="navTxt">Help</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      <template v-slot:append absolute>
        <div class="pa-14">
          <v-avatar class="mx-auto" color="primary" size="60">
            <span class="white--text text-h5">MA</span>
          </v-avatar>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: 1,
      drawer: null,
      noNavRoutes: [
        "Login",
        "SignUp",
        "OnBoarding",
        "Create-form",
        "Render-form",
      ],
    };
  },

  components: {
    //
  },
};
</script>

<style scoped>
.v-application--is-ltr .v-list-item__avatar:first-child {
  margin-right: 10px;
  justify-content: center;
}
.logo {
  height: 60px;
  width: 140px;
  border-radius: 0px;
}

.navIcon {
  width: 12px;
  fill: currentColor;
  color: #7f919b;
}

.navTxt {
  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  color: #7f919b;
}

.navlink {
  color: #311b92;
}
</style>
