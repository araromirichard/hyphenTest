<template>
  <v-container class="pa-0" fluid fill-height>
    <v-row
      :id="
        $vuetify.breakpoint.mdAndUp ? 'settings-page' : 'settings-page-mobile'
      "
      no-gutters
    >
      <v-col cols="12" md="3">
        <div class="setting-nav" style="background: #fdf9ef">
          <SideNav
            :height="navigation.height"
            :width="navigation.width"
            :color="navigation.color"
          />
        </div>
      </v-col>
      <v-col cols="12" md="9" class="">
        <div class="setting-nav">
          <router-view></router-view>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SideNav from "../../includes/settings/SideNav.vue";
export default {
  components: { SideNav },
  name: "settings",
  data() {
    return {
      navigation: {
        height: "100%",
        width: "100%",
        color: "transparent",
      },
    };
  },
};
</script>

<style scoped>
#settings-page {
  min-height: 100vh;

  max-width: 100%;
  padding: 0%;
  margin: 0%;
}
#settings-page-mobile {
  padding: 0%;
  margin: 0%;
}

.setting-container {
  height: 100%;
  padding: 0%;
  margin: 0%;
}
.setting-nav {
  min-height: 100vh;
  height: 100%;
}
.setting-nav-mobile {
  min-height: 100%;
  height: 100%;
}
</style>
