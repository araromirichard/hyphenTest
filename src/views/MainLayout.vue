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
            <div>
              <img class="logo" :src="require('@/assets/icons/newLogo.svg')" />
            </div>
          </template>
          <v-list nav dense flat class="py-4 pl-10">
            <v-list-item-group
              v-model="model"
              active-class="primary--text text--accent-4 link-text"
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
                    :src="require('@/assets/icons/Vector.svg')"
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
                    :src="require('@/assets/icons/forms.svg')"
                    class="navIcon"
                  />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="text-subtitle-1"
                    >Forms</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item nav link to="/workflow" class="mx-auto">
                <v-list-item-icon class="mr-4">
                  <img
                    :src="require('@/assets/icons/forms.svg')"
                    class="navIcon #7F919B"
                  />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="text-subtitle-1"
                    >Workflows</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-divider
                class="pt-4 mx-md-10"
                v-if="$vuetify.breakpoint.mdAndUp"
              ></v-divider>
              <v-list-item nav link to="/payable" class="mx-auto">
                <v-list-item-icon class="mr-4">
                  <img
                    :src="require('@/assets/icons/Vector1.svg')"
                    class="navIcon"
                  />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="text-subtitle-1"
                    >Payables</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item nav link to="/receivables" class="mx-auto">
                <v-list-item-icon class="mr-4">
                  <img
                    :src="require('@/assets/icons/outline/Vector.svg')"
                    class="navIcon"
                  />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="text-subtitle-1"
                    >Receivables</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item nav link to="/contacts" class="mx-auto">
                <v-list-item-icon class="mr-4">
                  <img
                    :src="require('@/assets/icons/User_box_light.svg')"
                    class="navIcon"
                  />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="text-subtitle-1"
                    >Contacts</v-list-item-title
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
            <v-list class="pl-10" nav flat dense>
              <v-list-item-group
                v-model="model"
                active-class="primary--text text--accent-4 link-text"
              >
                <v-list-item v-if="version1" nav link to="#" class="mx-auto">
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
                  <v-list-item-icon class="mr-4">
                    <img
                      :src="require('@/assets/icons/outline/Path.svg')"
                      class="navIcon"
                    />
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="text-subtitle-1"
                      >Help</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
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
        <div>
          <img class="logo" :src="require('@/assets/icons/newLogo.svg')" />
        </div>
      </template>
      <v-list flat class="pt-4 pb-2 pl-10">
        <v-list-item-group
          v-model="model"
          color="primary"
          active-class="primary--text text--accent-4 link-text"
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
                :src="require('@/assets/icons/Vector.svg')"
                class="navIcon"
              />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="navTxt">Inbox</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item nav link to="/form" class="mx-auto">
            <v-list-item-icon class="mr-4">
              <img :src="require('@/assets/icons/forms.svg')" class="navIcon" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="navTxt">Forms</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item nav link to="/workflow" class="mx-auto">
            <v-list-item-icon class="mr-4">
              <img
                :src="require('@/assets/icons/forms.svg')"
                class="navIcon #7F919B"
              />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="navTxt">Workflows</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-divider
        class="pt-4 mx-md-10"
        v-if="$vuetify.breakpoint.mdAndUp"
      ></v-divider>
      <v-list flat class="py-2 pl-10">
        <v-list-item-group
          v-model="model"
          color="primary"
          active-class="primary--text text--accent-4 link-text"
        >
          <v-list-item nav link to="/payable" class="mx-auto">
            <v-list-item-icon class="mr-4">
              <img
                :src="require('@/assets/icons/Vector1.svg')"
                class="navIcon"
              />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="navTxt">Payables</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item nav link to="/receivables" class="mx-auto">
            <v-list-item-icon class="mr-4">
              <img
                :src="require('@/assets/icons/outline/Vector.svg')"
                class="navIcon"
              />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="navTxt">Receivables</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item nav link to="/contacts" class="mx-auto">
            <v-list-item-icon class="mr-4">
              <img
                :src="require('@/assets/icons/User_box_light.svg')"
                class="navIcon"
              />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="navTxt">Contacts</v-list-item-title>
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
          <v-list-item v-if="version1" nav link to="#" class="mx-auto">
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
                :src="require('@/assets/icons/outline/Path.svg')"
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
            <span class="white--text text-h5">{{ getUserInitials }}</span>
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

  computed: {
    getUserInitials() {
      if (this.$store.state.auth.user !== null) {
        const firstName =
          (this.$store.state.auth.user.firstName &&
            this.$store.state.auth.user.firstName.charAt(0)) ||
          "";
        const lastName =
          (this.$store.state.auth.user.lastName &&
            this.$store.state.auth.user.lastName.charAt(0)) ||
          "";
        return (
          firstName + lastName ||
          (this.$store.state.auth.user.username &&
            this.$store.state.auth.user.username.charAt(0)) ||
          ""
        ).toUpperCase();
      }
      return "";
    },
  },
};
</script>

<style scoped>
.v-application--is-ltr .v-list-item__avatar:first-child {
  margin-right: 10px;
  justify-content: center;
}
.logo {
  width: 50%;
  display: block;
  object-fit: contain;
  margin: 30px 0 30px 30px;
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
.link-text {
  text-decoration: underline solid lightseagreen 2px;
}
</style>
