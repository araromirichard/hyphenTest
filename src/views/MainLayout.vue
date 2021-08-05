<template>
  <div>
    <v-navigation-drawer
      app
      fixed
      height="100%"
      permanent
      v-model="drawer"
      class="px-0"
    >
      <template v-slot:prepend>
        <v-list-item two-line class="pl-10">
          <v-list-item-avatar color="primary" size="60">
            <img :src="require('@/assets/Shape.svg')" class="logo" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title
              ><img :src="require('@/assets/pBot.svg')"
            /></v-list-item-title>
            <v-list-item-subtitle class="ml-6">on pBot</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-list class="py-4 pl-10" dense>
        <v-list-item
          nav
          link
          v-for="item in items"
          :key="item.title"
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon color="#7F919B">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="link-text font-weight-black text-left">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="pt-8">
        <v-list class="pl-10" dense>
          <v-list-item nav link v-for="link in links" :key="link.title">
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title
                ><router-link :to="link.path">{{
                  link.title
                }}</router-link></v-list-item-title
              >
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
  // created() {
  //   return console.log(this.$route);
  // },
  data() {
    return {
      drawer: null,
      items: [
        { title: "Insights", icon: "mdi-trending-up", path: "/insight" },
        { title: "Workflows", icon: "mdi-vector-link", path: "/workflow" },
        { title: "Inbox", icon: "mdi-inbox-arrow-down", path: "/inbox" },
        { title: "Payables", icon: "mdi-cash-multiple", path: "/payable" },
        {
          title: "Integrations",
          icon: "mdi-puzzle-outline",
          path: "/integration",
        },
      ],
      links: [
        { title: "Settings", icon: "mdi-cog-outline", path: "/#" },
        { title: "Help", icon: "mdi-help-circle-outline", path: "/#" },
      ],
    };
  },

  components: {
    //
  },
};
</script>

<style scoped>
.logo {
  height: 75px;
  width: 150px;

  border-radius: 0px;
}
.link-text {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  color: #7f919b;
}
</style>
