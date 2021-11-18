<template>
  <div>
    <div>
      <v-card
        width="100%"
        flat
        class="d-flex justify-end"
        style="background: rgba(127, 145, 155, 0.052607)"
      >
        <v-card-actions class="my-1 mr-md-6">
          <v-btn
            @click.stop="dialog = true"
            large
            elevation="6"
            dark
            color="#2BD5AE"
            class="text-capitalize"
            style="color: #301f78"
          >
            <v-icon> mdi-plus </v-icon>
            <span> New Budget </span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <v-container>
      <v-row class="mx-md-13">
        <v-col cols="12" md="10" offset-md="1">
          <v-row class="pa-0">
            <v-col v-for="(card, i) in cards" :key="i" cols="12" md="4">
              <BudgetCard
                :budgetTitle="card.budgetTitle"
                :budgetAmount="card.budgetAmount"
                :percentUsed="card.percentUsed"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
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
                >PAYABLE: New Budget</span
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
            <validation-observer ref="observer" v-slot="{}">
              <form @submit.prevent ref="form">
                <div class="px-8 d-flex" style="background: #fdfaf2">
                  <div>
                    <h5
                      class="pt-5"
                      style="
                        font-family: Inter;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 15px;
                        color: #301f78;
                      "
                    >
                      Budget Title
                    </h5>

                    <span
                      class="pb-5"
                      style="
                        font-family: Inter;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 24px;
                        line-height: 29px;
                        color: #301f78;
                        mix-blend-mode: normal;
                        opacity: 0.5;
                      "
                      >New Budget_</span
                    >
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
                      Edit settings for your budget<strong> New Budget</strong>
                    </p>
                  </div>
                </div>
                <div>
                  <validation-provider
                    v-slot="{ errors }"
                    name="Budget Amount"
                    rules="required"
                  >
                    <v-text-field
                      class="mt-6 mb-3"
                      hide-details="auto"
                      :error-messages="errors"
                      v-model="newBudget.selectPeriod"
                      background-color="#ffffff"
                      style="margin-left: 52px; margin-right: 45px"
                      outlined
                      prefix="#"
                      label="Budget Amount"
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="Budget Reset"
                    rules="required"
                  >
                    <v-select
                      class="my-3"
                      hide-details="auto"
                      :error-messages="errors"
                      background-color="#ffffff"
                      style="margin-left: 52px; margin-right: 45px"
                      outlined
                      label="Budget Reset"
                      placeholder="Select Period"
                      v-model="newBudget.budgetReset"
                      :items="budgetResetPeriods"
                      required
                    ></v-select>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="Co-worker"
                    rules="required"
                  >
                    <v-select
                      class="my-3"
                      hide-details="auto"
                      :error-messages="errors"
                      background-color="#ffffff"
                      style="margin-left: 52px; margin-right: 45px"
                      outlined
                      label="Budget Owner"
                      :items="selectCoworker"
                      v-model="newBudget.selectedCoWorker"
                      placeholder="Select Co-worker"
                    ></v-select>
                  </validation-provider>

                  <validation-provider
                    v-slot="{ errors }"
                    name="budget Overdraft"
                    rules="required|digits"
                  >
                    <v-text-field
                      class="my-3"
                      hide-details="auto"
                      :error-messages="errors"
                      background-color="#ffffff"
                      style="margin-left: 52px; margin-right: 45px"
                      outlined
                      prefix="%"
                      label="Budget Overdraft"
                      v-model="newBudget.budgetOverdraft"
                    ></v-text-field>
                  </validation-provider>
                </div>
                <template>
                  <v-card-actions class="d-flex justify-end align-center mr-9">
                    <v-btn
                      dark
                      @click="submit"
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
                        icon="arrow-right"
                        size="small"
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

                          color: #ffffff;
                        "
                        >Pay</span
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
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { required, digits } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty, select a value",
});
extend("digits", {
  ...digits,
  message: "{_field_} only accept numbers.",
});
import BudgetCard from "./BudgetCard.vue";
export default {
  components: {
    BudgetCard,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      dialog: false,
      disabled: false,
      newBudget: {
        Title: "",
        budgetReset: "",
        selectedCoWorker: "",
        budgetOverdraft: "",
        selectPeriod: "",
      },
      selectCoworker: [],
      budgetResetPeriods: ["Weekly", "Monthly", "Quaterly", "Yearly"],
      cards: [
        {
          budgetTitle: "Marketing",
          percentUsed: "60",
          budgetAmount: "1,234,000",
        },
        {
          budgetTitle: "Transportation ",
          percentUsed: "60",
          budgetAmount: "1,234,000",
        },
        {
          budgetTitle: "Procurement",
          percentUsed: "60",
          budgetAmount: "1,234,000",
        },
      ],
    };
  },
  methods: {
    ...mapActions({ showToast: "ui/showToast" }),
    closeModal() {
      this.dialog = false;
      // this.workflowName = e;
      // console.log(e);
    },
    openTitle() {
      this.disabled = !this.disabled;
    },
    submit() {
      if (this.$refs.observer.validate()) {
        console.log(this.newBudget);
        console.log("newBudget Details", JSON.stringify(this.newBudget));
        this.showToast({
          sclass: "success",
          show: true,
          message: "New budget created",
          timeout: 3000,
        });
      }
    },
  },
};
</script>

<style scoped>
.switch-card {
  height: 53px;
  background: rgba(127, 145, 155, 0.052607);
}

.switch {
  width: 15.28px;
  height: 15.28px;
}

.export-btn {
  font-family: "Inter" sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  letter-spacing: 0.636364px;

  color: #301f78;
}
i.sli-font {
  font-size: 12px;
  display: inline-block;
}
.material-icons {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  color: #301f78;
}
.v-application .elevation-6 {
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 8%),
    0px 6px 10px 0px rgb(0 0 0 / 10%), 0px 1px 18px 0px rgb(0 0 0 / 12%) !important;
}
</style>
