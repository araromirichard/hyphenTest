<template>
  <v-container>
    <v-row align="center" justify="center" class="d-flex flex-column pa-0 ma-0">
      <v-col cols="12" md="6" class="px-8 px-md-auto" style="min-height: 100vh">
        <h3
          class="text-center text-h6 text-bold text-md-h3"
          style="
            font-family: Inter;
            font-style: normal;
            font-weight: 700;
            line-height: 48px;
            letter-spacing: 0.646465px;
            color: #596a73;
            max-width: 80%;
            margin: 0 auto;
          "
          :style="{
            paddingTop: `${$vuetify.breakpoint.xs ? '38px' : '224px'}`,
            paddingBottom: `${$vuetify.breakpoint.xs ? '8px' : '66px'}`,
          }"
        >
          Choose your account type
        </h3>
        <v-item-group
          @change="selectedAccountTypeChanged"
          v-model="selectedAccountType"
        >
          <v-row class="d-flex flex-column mt-4 mt-sm-auto">
            <v-col
              class="ma-auto"
              v-for="accountType in accountTypes"
              :key="accountType.title"
            >
              <v-item :value="accountType" v-slot:default="{ active, toggle }">
                <v-card
                  :disabled="accountType.disabled"
                  @click="toggle"
                  rounded
                  :outlined="active"
                  class="mb-5 ma-auto"
                  elevation="0"
                  max-width="400"
                  to="#"
                >
                  <v-row align="center" justify="center" class="d-flex">
                    <v-col class="ma-0 pa-0 text-center" cols="4">
                      <v-avatar size="68" color="#FDF9EF" class="mx-auto pa">
                        <v-icon> mdi-{{ accountType.icon }}</v-icon>
                      </v-avatar>
                    </v-col>
                    <v-col cols="8" class="pa-0">
                      <p
                        class="
                          ma-0
                          text-subtitle
                          font-weight-bold
                          text-md-h6
                          pt-8
                        "
                        style="color: rgba(0, 35, 56, 0.5)"
                      >
                        {{ accountType.title }}
                      </p>
                      <p
                        class="text-caption pt-md-1 text-break"
                        style="max-width: 164px; color: rgba(0, 35, 56, 0.5)"
                      >
                        {{ accountType.text }}
                      </p>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
            <v-col class="d-flex justify-center align-center">
              <Button
                absolute
                style="margin-top: 29px"
                class="mx-auto text-md-h5"
                height="54px"
                :width="$vuetify.breakpoint.xs ? '280px' : '390px'"
                to="welcome"
                label="Next"
              />
            </v-col>
          </v-row>
        </v-item-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Button from "../includes/flat-button.vue";
export default {
  components: {
    Button,
  },

  data() {
    return {
      accountTypes: [
        {
          title: "Advisor",
          icon: "account-outline",
          disabled: true,
          text: "You provide funding/finance advise services to 5 or more businesses",
        },
        {
          title: "Company",
          icon: "account-outline",
          disabled: false,
          text: "You work at a company, in a finance or senior executive role",
        },
      ],
      selectedAccountType: null,
    };
  },

  methods: {
    selectedAccountTypeChanged(e) {
      console.table({
        e,
        selectedAccountType: this.selectedAccountType,
        title: e ? e.title : null,
      });
    },
  },
};
</script>

<style scoped></style>
