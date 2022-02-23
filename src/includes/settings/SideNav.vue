<template>
  <v-card flat :height="height" :width="width" color="transparent" class="mx-0">
    <v-navigation-drawer class="ma-0" :color="color" permanent>
      <v-list-item>
        <v-list-item-content class="py-0">
          <v-list-item-title class="link-title mt-9 py-4">
            Settings
          </v-list-item-title>
          <v-list-item-subtitle>
            <v-list-item-icon class="mx-0 mb-0">
              <img
                :src="require('@/assets/icons/User_duotone_line.svg')"
              /> </v-list-item-icon
            ><span class="link-text font-weight-bold pb-2">User</span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list dense nav>
        <v-list-item-group active-class="font-weight-bold link-text-active">
          <v-list-item
            v-for="item in navLinks"
            :key="item.title"
            link
            :to="item.link"
            class="pr-0"
          >
            <v-list-item-icon class="mr-1" v-if="item.title == 'Integrations'">
              <img :src="require('@/assets/icons/Line_out_alt_light.svg')" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <span class="link-text"> {{ item.title }}</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "settingNav",
  props: {
    height: String,
    width: String,
    color: String,
    status: String,
  },
  data() {
    return {
      navLinks: [
        { title: "Profile", link: "profile" },
        { title: "Organization", link: "organization" },
        { title: "Security", link: "security" },
        { title: "Integrations", link: "integrations" },
        { title: "Bank", link: "bank" },
        { title: "Apps", link: "apps" },
        { title: "API", link: "api" },
      ],
      right: null,
    };
  },
};
</script>

<style scoped>
.v-list {
  max-width: 100% !important;
}
.link-title {
  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  line-height: 39px;
  color: #19283d;
}
.link-text {
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 15px;
  color: #596a73;
}
.link-text-active {
  font-weight: bold;
  color: #19283d;
}
</style>
