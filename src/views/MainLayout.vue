<template>
  <div>
    <!-- sideNav for $vuetify.breakpoint.mdAndDown -->

    <div v-if="$vuetify.breakpoint.mdAndDown">
      <template>
        <v-app-bar
          color="primary"
          dark
          v-if="!noNavRoutes.includes($route.name)"
        >
          <v-app-bar-nav-icon
            @click="drawerM = true"
            class="pl-2"
          ></v-app-bar-nav-icon>

          <v-toolbar-title></v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer
          v-if="!noNavRoutes.includes($route.name)"
          v-model="drawerM"
          absolute
          temporary
        >
          <template v-slot:prepend>
            <!-- <v-list-item two-line class="pl-10 justify-center">
              <v-list-item-avatar color="primary" size="46">
                <img :src="require('@/assets/Shape.svg')" class="logo" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title style="padding-top: 6px"
                  ><img :src="require('@/assets/pBot.svg')"
                /></v-list-item-title>
                <v-list-item-subtitle class="ml-6"
                  >on pBot</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item> -->

            <div>
              <img class="logo" :src="require('@/assets/hyphen-logo.png')" />
            </div>
          </template>
          <v-list nav dense flat class="py-4 pl-10">
            <v-list-item-group
              v-model="model"
              active-class="primary--text text--accent-4"
            >
              <v-list-item
                nav
                link
                to="/insight"
                class="mx-auto"
                v-if="version1"
              >
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
                  <v-list-item-title class="text-subtitle-1"
                    >Inbox</v-list-item-title
                  >
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
                  <v-list-item-title class="text-subtitle-1"
                    >Forms</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                nav
                link
                to="/workflow"
                class="mx-auto"
                v-if="version1"
              >
                <v-list-item-icon class="mr-4">
                  <img
                    :src="require('@/assets/pbot_icons/workflow_recycle.svg')"
                    class="navIcon #7F919B"
                  />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="navTxt"
                    >Workflows</v-list-item-title
                  >
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
                  <v-list-item-title class="text-subtitle-1"
                    >Payables</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                nav
                link
                key="Integration"
                to="/integration"
                class="mx-auto"
                v-if="version1"
              >
                <v-list-item-icon class="mr-4">
                  <img
                    :src="require('@/assets/pbot_icons/puzzle_integration.svg')"
                    class="navIcon"
                  />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="navTxt"
                    >Integrations</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-divider
            class="pt-4 mx-md-10"
            v-if="$vuetify.breakpoint.mdAndUp"
          ></v-divider>
          <div class="pt-2">
            <v-list class="pl-10" dense>
              <v-list-item nav link to="#" class="mx-auto">
                <v-list-item-icon class="mr-1">
                  <img
                    :src="require('@/assets/pbot_icons/settings.svg')"
                    class="navIcon"
                  />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="text-subtitle-1"
                    >Settings</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item nav link to="#" class="mx-auto">
                <v-list-item-icon class="mr-1">
                  <img
                    :src="require('@/assets/pbot_icons/agree_help.svg')"
                    class="navIcon"
                  />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="text-subtitle-1"
                    >Help</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
          <template v-slot:append absolute v-if="$vuetify.breakpoint.mdAndDown">
            <div class="pa-14">
              <v-avatar class="mx-auto" color="primary" size="60">
                <span class="white--text text-h5">MA</span>
              </v-avatar>
            </div>
          </template>
        </v-navigation-drawer>
      </template>
    </div>

    <!-- sideNav for $vuetify.breakpoint.mdAndUp -->

    <v-navigation-drawer
      v-if="!noNavRoutes.includes($route.name)"
      app
      fixed
      v-model="drawer"
      class="px-0"
    >
      <template v-slot:prepend>
        <!-- <v-list-item two-line class="pl-10 justify-center">
          <v-list-item-avatar color="primary" size="46">
            <img :src="require('@/assets/Shape.svg')" class="logo" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title style="padding-top: 6px"
              ><img :src="require('@/assets/pBot.svg')"
            /></v-list-item-title>
            <v-list-item-subtitle class="ml-6">on pBot</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item> -->

        <div>
          <img class="logo" :src="require('@/assets/hyphen-logo.png')" />
        </div>
      </template>
      <v-list flat class="py-4 pl-10">
        <v-list-item-group
          v-model="model"
          color="primary"
          active-class="primary--text text--accent-4"
        >
          <v-list-item nav link to="/insight" class="mx-auto" v-if="version1">
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
          <v-list-item nav link to="/workflow" class="mx-auto" v-if="version1">
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
            v-if="version1"
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
      <v-divider
        class="pt-4 mx-md-10"
        v-if="$vuetify.breakpoint.mdAndUp"
      ></v-divider>
      <div class="pt-2">
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
      <template v-slot:append absolute v-if="$vuetify.breakpoint.mdAndUp">
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
      version1: false,
      drawer: null,
      drawerM: false,
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
  width: 65%;
  display: block;
  object-fit: contain;
  margin: 30px auto;
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
  color: var(--v-primary-base);
}
</style>
