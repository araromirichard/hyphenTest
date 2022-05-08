<template>
  <v-container>
    <v-row align="center" justify="center" class="d-flex pa-0 ma-0">
      <v-col cols="12" class="px-8 px-md-auto" style="min-height: 100vh">
        <h3
          class="text-center text-h6 text-bold text-md-h4 page__title"
          :style="{
            paddingTop: `${$vuetify.breakpoint.xs ? '38px' : '180px'}`,
            paddingBottom: `${$vuetify.breakpoint.xs ? '8px' : '66px'}`,
          }"
        >
          Switch Organization
        </h3>
        <v-item-group
          active-class="selectedCard"
          @change="selectedAccountTypeChanged"
          v-model="selectedAccountType"
        >
          <v-row class="d-flex mt-4 mt-sm-auto">
            <v-col
              cols="12"
              sm="6"
              md="3"
              class="ma-auto"
              v-for="organization in organizationList"
              :key="organization.name"
            >
              <v-item :value="organization" v-slot:default="{ toggle }">
                <v-card
                  @click="toggle"
                  :ripple="false"
                  rounded
                  outlined
                  class="mb-5 ma-auto"
                  max-width="400"
                >
                  <v-row align="center" justify="center" class="d-flex">
                    <v-col class="ma-0 pa-0 text-center" cols="4">
                      <v-avatar size="54" color="#FDF9EF" class="mx-auto">
                        <v-icon> mdi-{{ organization.icon }}</v-icon>
                      </v-avatar>
                    </v-col>
                    <v-col cols="8" class="pa-0">
                      <p
                        class="
                          ma-0
                          text-subtitle
                          font-weight-bold
                          text-md-h6
                          pt-12
                        "
                        style="color: rgba(0, 35, 56, 0.5)"
                      >
                        {{ organization.name }}
                      </p>
                      <p
                        class="text-caption pt-2 pb-8 text-break"
                        style="max-width: 164px; color: rgba(0, 35, 56, 0.5)"
                      >
                        {{ organization.text }}
                      </p>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-item-group>
        <div class="d-flex justify-center align-center">
          <Button
            absolute
            style="margin-top: 29px"
            class="mx-auto text-md-h5"
            height="54px"
            :width="$vuetify.breakpoint.xs ? '280px' : '390px'"
            label="switch"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Button from "../includes/flat-button.vue";
export default {
  name: "organizationList",
  components: {
    Button,
  },

  data() {
    return {
      organizationList: [
        {
          name: "Advisor",
          icon: "account-outline",

          text: "You provide funding/finance advise services to 5 or more businesses",
        },
        {
          name: "Company ltd",
          icon: "account-outline",

          text: "You work at a company, in a finance or senior executive role",
        },
        {
          name: "AandB Company",
          icon: "account-outline",

          text: "You work at a company, in a finance or senior executive role",
        },
        {
          name: " splitcot Company",
          icon: "account-outline",

          text: "You work at a company, in a finance or senior executive role",
        },
        {
          name: "Uche and sons Company",
          icon: "account-outline",

          text: "You work at a company, in a finance or senior executive role",
        },
      ],
      selectedAccountType: null,
    };
  },

  methods: {
    selectedOrganizationTypeChanged(e) {
      console.table({
        e,
        selectedAccountType: this.selectedAccountType,
        title: e ? e.title : null,
      });
    },
  },
};
</script>

<style scoped>
.page__title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0.646465px;
  color: #596a73;
  max-width: 80%;
  margin: 0 auto;
}

.selectedCard {
  background: #ffffff;
  border: 3px solid #d7a47b;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.0278628);
  border-radius: 7px;
}
</style>
