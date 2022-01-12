<template>
  <v-container class="pa-0">
    <v-row>
      <v-col>
        <div class="pb-2">
          <template>
            <v-card flat>
              <v-card-title>
                <img
                  :src="require('@/assets/Persons.svg')"
                  style="padding: 6px"
                />
                <span class="card-title">Stakeholder</span>
                <v-spacer></v-spacer>
                <v-btn
                  @click.prevent="dialog = true"
                  plain
                  class="text-lowercase"
                >
                  <span class="add pr-5">+add</span>
                </v-btn>
              </v-card-title>
              <div two-line>
                <div>
                  <v-row
                    class="text-h4 pl-6 pb-0 pt-6 card-text text-bold"
                    v-model="payees"
                  >
                    <v-col class="px-2">{{ payees }}</v-col>
                    <v-col class="px-2">{{ coWorkers }}</v-col>
                    <v-spacer></v-spacer>
                    <v-col class="text-right pr-14"
                      ><v-icon color="#7F919B">mdi-chevron-right</v-icon></v-col
                    >
                  </v-row>
                  <v-row class="text-subtitle-1 px-8 py-2 my-0">
                    <p class="pr-6">Payees</p>
                    <p class="pl-6">Co-workers</p>
                  </v-row>
                </div>
              </div>
            </v-card>
          </template>
        </div>
        <div class="pt-2">
          <v-card flat max-height="166">
            <v-card-title>
              <img :src="require('@/assets/Naira.svg')" style="padding: 6px" />
              <span class="card-title">Account Balance</span>
            </v-card-title>
            <div two-line>
              <div>
                <v-row
                  class="text-h5 pl-6 pb-0 pt-6 card-text"
                  v-model="payees"
                >
                  <v-col>{{ bankBalance }}</v-col>
                  <v-spacer></v-spacer>
                  <v-col class="text-right pr-14"
                    ><v-icon color="#7F919B">mdi-chevron-right</v-icon></v-col
                  >
                </v-row>
                <v-row class="text-subtitle-1 px-8 py-2 my-0">
                  <p class="pr-6">Kuda MFB Banks</p>
                  <v-chip
                    color="#D5F7EF"
                    text-color="#2BD4AE"
                    class="pa-2 mx-0"
                    x-small
                  >
                    cash account
                  </v-chip>
                </v-row>
              </div>
            </div>
          </v-card>
        </div>
        <template>
          <div>
            <v-dialog v-model="dialog" max-width="516">
              <v-card color="#FEFCF8" class="rounded-lg">
                <v-card-title
                  style="background: #ffffff; border-radius: 8px 8px 0px 0px"
                >
                  <span
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: 600;
                      font-size: 16px;
                      line-height: 19px;
                      color: #301f78;
                    "
                    >Add a Stakeholder</span
                  >
                  <v-spacer></v-spacer>
                  <v-icon
                    tag="button"
                    @click="dialog = false"
                    class="text-bolder"
                    color="#596A73"
                  >
                    mdi-close
                  </v-icon>
                </v-card-title>
                <validation-observer ref="observer" v-slot="{ invalid }">
                  <form @submit.prevent="sendInvite">
                    <div class="px-8 d-flex" style="background: #fdfaf2">
                      <p
                        style="
                          padding-top: 34px;
                          font-family: Inter;
                          font-style: normal;
                          font-weight: normal;
                          font-size: 12px;
                          line-height: 18px;
                          letter-spacing: 0.45px;
                          color: #7f919b;
                        "
                      >
                        Add details of <strong> Stakeholder</strong>
                      </p>
                    </div>
                    <div>
                      <validation-provider
                        v-slot="{ errors }"
                        name="Full Names"
                        rules="required"
                      >
                        <v-text-field
                          v-model="stakeholder.fullNames"
                          hide-details="auto"
                          class="mb-4"
                          type="text"
                          background-color="#ffffff"
                          style="margin-left: 52px; margin-right: 45px"
                          outlined
                          label="Full Names"
                          :error-messages="errors"
                        >
                        </v-text-field>
                      </validation-provider>
                      <validation-provider
                        v-slot="{ errors }"
                        name="email"
                        rules="required|email"
                      >
                        <v-text-field
                          v-model="stakeholder.email"
                          hide-details="auto"
                          class="mb-4"
                          type="email"
                          background-color="#ffffff"
                          style="margin-left: 52px; margin-right: 45px"
                          outlined
                          label="Email Address"
                          :error-messages="errors"
                        ></v-text-field>
                      </validation-provider>
                      <validation-provider
                        v-slot="{ errors }"
                        name="select"
                        rules="required"
                      >
                        <v-select
                          hide-details="auto"
                          background-color="#ffffff"
                          style="margin-left: 52px; margin-right: 45px"
                          v-model="stakeholder.selectedType"
                          :items="stakeholderTypes"
                          outlined
                          :error-messages="errors"
                          label="Select"
                          data-vv-name="select"
                          required
                        ></v-select>
                      </validation-provider>
                    </div>
                    <template>
                      <v-card-actions
                        class="d-flex justify-end align-center mr-9"
                      >
                        <v-btn
                          @click="sendInvite"
                          :disabled="invalid"
                          type="submit"
                          dark
                          width="121"
                          height="45"
                          style="
                            margin-top: 24px;
                            margin-bottom: 41px;
                            background: #16be98;
                            box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
                            border-radius: 4px;
                          "
                        >
                          <simple-line-icons
                            icon="plus"
                            size="small"
                            style="color: var(--v-primary-base)"
                            no-svg
                          />
                          <span
                            class="pl-4 m-0 text-capitalize"
                            style="
                              font-family: Inter;
                              font-style: normal;
                              font-weight: 500;
                              font-size: 14px;
                              line-height: 17px;
                              text-align: center;
                              letter-spacing: 0.636364px;

                              color: var(--v-primary-base);
                            "
                            >Add</span
                          >
                        </v-btn>
                      </v-card-actions>
                    </template>
                  </form>
                </validation-observer>
              </v-card>
            </v-dialog>
          </div>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { required, email } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});
export default {
  name: "InfoSummary",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      select: null,
      dialog: false,
      payees: "23",
      coWorkers: "5",
      bankBalance: "592,000",
      stakeholder: {
        fullNames: "",
        email: "",
        selectedType: null,
      },
      stakeholderTypes: ["Co-worker", "Payee"],
    };
  },
  methods: {
    sendInvite() {
      console.table(this.stakeholder);
    },
  },
};
</script>

<style scoped>
p {
  font-family: "Inter" sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  color: #7e69d8;
}
.card-title {
  font-family: "Inter" sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 15px;
  /* identical to box height */

  color: #301f78;
}

.add {
  font-family: "Inter" sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  color: #7e69d8;
}

.card-text {
  font-family: "Inter" sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  text-transform: uppercase;
  color: #7f919b;
}
</style>
