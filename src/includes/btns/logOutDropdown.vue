<template>
  <v-sheet>
    <v-list width="100%">
      <v-list-item nav link :to="{ name: 'settings.profile' }">
        <v-list-item-title> Profile </v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item nav link to="/settings" class="mx-auto">
        <v-list-item-title> Settings </v-list-item-title>
      </v-list-item>

      <v-list-item @click="logout" class="mx-auto">
        <v-list-item-title>Sign Out</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-sheet>
</template>

<script>
export default {
  name: "logOutBtn",
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped></style>
