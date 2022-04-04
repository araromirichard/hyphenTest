<template>
  <div>
    <v-row>
      <v-col class="pt-0">
        <v-row class="pa-0">
          <v-col class="mx-md-10 pb-0">
            <v-subheader class="mx-md-10 pl-md-6 pt-8 section-title">
              Invocing/Billing
            </v-subheader>
          </v-col>
        </v-row>
        <div class="mx-md-13 mt-6">
          <v-form>
            <v-row class="mx-md-10 mb-8">
              <v-col cols="12">
                <v-text-field
                  v-model="accountDetails.paymentTerms"
                  background-color="#ffffff"
                  outlined
                  hide-details="auto"
                  placeholder="Payment Terms"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="accountDetails.selectedPaymentTerms"
                  :items="paymentTermsArray"
                  background-color="#ffffff"
                  outlined
                  hide-details="auto"
                  placeholder="Payment Terms"
                >
                </v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="accountDetails.selectedChartOfAccount"
                  :items="chartOfAccountArray"
                  background-color="#ffffff"
                  outlined
                  hide-details="auto"
                  placeholder="Chart of Accounts"
                >
                </v-select>
              </v-col>
            </v-row>
            <v-card-actions class="justify-end pa-md-8 mr-md-6">
              <v-btn
                class="submit-btn"
                dark
                :width="$vuetify.breakpoint.smAndDown ? '100%' : '121'"
                height="45"
              >
                <simple-line-icons
                  icon="arrow-right"
                  color="#FFFFFF"
                  style="
                    font-family: simple-line-icons;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 16px;
                  "
                  no-svg
                />
                <span class="btn-name text-capitalize pl-3">Save</span>
              </v-btn>
            </v-card-actions>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accountDetails: {
        PaymentTerms: "",
        selectedPaymentTerms: "",
        selectedChartOfAccount: "",
      },
      paymentTermsArray: [],
      chartOfAccountArray: [],
    };
  },
};
</script>

<style scoped>
.section-title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
}
.v-subheader {
  align-items: center;
  display: flex;
  height: 23px;
  font-size: 0.98rem;
  font-weight: 500;
}
.save-btn {
  background: var(--v-primary-base);
  box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
  border-radius: 4px;
}
.btn-name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.636364px;
  color: #ffffff;
}
</style>
