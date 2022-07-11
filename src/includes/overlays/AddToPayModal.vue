<template>
  <div>
    <v-dialog elevation="0" v-model="dialog" max-width="590" overlay-color="#301F78" overlay-opacity="0.282397">
      <v-card max-width="" flat class="m-0" style="background: #f8f7f4; border-radius: 8px">
        <v-card-title class="modatTitleCont">
          <!-- <img
            :src="require('@/assets/icons/task-square.png')"
            width="20"
            height="20"
          /> -->
          <span class="ml-5 modalTitle">Add To Payables</span>
          <v-spacer></v-spacer>
          <v-icon tag="button" @click="closeFormDialog" class="text-bolder" color="#596A73">
            mdi-close
          </v-icon>
        </v-card-title>
        <template>
          <v-tabs slider-size="4" background-color="#F6F3EE" v-model="tab" align-with-title
            style="border-bottom: 1px solid #d9dee1">
            <v-tabs-slider color="primary"></v-tabs-slider>

            <v-tab> payable </v-tab>
          </v-tabs>
        </template>
        <v-tabs-items v-model="tab" style="background-color: #f8f7f4">
          <v-tab-item class="mt-8">
            <div class="d-block mx-4 mx-md-10">
              <p class="card__supertitle py-0">invoice total</p>
              <p class="card__title pt-0">{{ singleInvoice.total }} NGN</p>
            </div>
            <div class="mx-4 mx-md-10 mt-10">
              <v-form>
                <v-row>
                  <v-col class="" cols="12">
                    <v-text-field hide-details="auto" background-color="white" label="Invoice Number" outlined readonly
                      v-model="singleInvoice.invoicenumber">
                    </v-text-field>
                  </v-col>
                </v-row>
                <div class="py-5 px-4 mt-4 mb-11" style="position: relative; background: #f6f3ee">
                  <v-row v-for="(fieldRow, index) in fieldRows" :key="index">
                    <v-col class="" cols="12" md="5">
                      <v-text-field hide-details="auto" background-color="white" label="Amount Due" outlined
                        v-model="fieldRows[index].payableData.amount_due" :rules="[rules.required]"></v-text-field>
                    </v-col>
                    <v-col class="" cols="12" md="6">
                      <v-menu ref="menu" v-model="fieldRows[index].menu" :close-on-content-click="true"
                        transition="scale-transition" offset-y min-width="auto"><template
                          v-slot:activator="{ on, attrs }">
                          <v-text-field hide-details="auto" background-color="white" label="Due Date"
                            append-icon="mdi-calendar-blank-outline" outlined readonly v-bind="attrs" v-on="on"
                            v-model="fieldRows[index].payableData.due_date">
                          </v-text-field>
                        </template>
                        <v-date-picker v-model="fieldRows[index].payableData.due_date" no-title scrollable :min="date">
                        </v-date-picker>
                      </v-menu>
                    </v-col>
                    <v-col class="d-flex justify-center align-center" cols="12" md="1">
                      <v-btn icon @click="removeFieldRow(index)">
                        <v-icon class="mx-7" small id="no-background-hover" tag="button" plain color="error">
                          mdi-close
                        </v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-btn color="#19283D" fab dark x-small absolute bottom right @click="addFieldRow">
                    <v-icon x-small>mdi-plus</v-icon>
                  </v-btn>
                </div>
                <v-row>
                  <v-col class="" cols="12">
                    <v-textarea hide-details="auto" background-color="white" label="Description" outlined
                      v-model="description">
                    </v-textarea>
                  </v-col>
                </v-row>
                <template class="mt-6">
                  <v-card-actions class="d-flex mt-2 justify-end px-0">
                    <v-btn dark width="121" height="48" color="primary" class="text-capitalize mt-8 mb-16"
                      :loading="isSending" @click="sendToPayables">
                      <simple-line-icons style="font-size: 14px" class="m-0 text--white" icon="arrow-right" no-svg />
                      <span class="pl-4" style="
                          font-family: Inter;
                          font-style: normal;
                          font-weight: 500;
                          font-size: 14px;
                          line-height: 17px;
                        ">Add</span>
                    </v-btn>
                  </v-card-actions>
                </template>
              </v-form>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import { required } from "vee-validate/dist/rules";
// import {
//   extend,
//   ValidationObserver,
//   ValidationProvider,
//   setInteractionMode,
// } from "vee-validate";

// setInteractionMode("eager");

// extend("required", {
//   ...required,
//   message: "{_field_} can not be empty, select a value",
// });

export default {
  components: {},
  name: "Form",
  data() {
    return {
      show: false,
      dialog: false,
      isSending: false,
      tab: 0,
      modal: false,

      fieldRows: [
        {
          menu: false,
          payableData: {
            due_date: "",
            amount_due: "",
          },
        },
      ],
      date: new Date().toISOString().substr(0, 10),
      min: new Date(Date.now() - 315569260000).toISOString().substr(0, 10),

      description: "",
      rules: {
        required: (value) => !!value || "Required.",
        number: (v) =>
          Number.isInteger(Number(v)) || "The value must be an integer number",
      },
    };
  },

  computed: {
    ...mapGetters({
      singleInvoice: "invoices/getSingleInvoice",
    }),

  },
  methods: {
    ...mapActions({ showToast: "ui/showToast" }),
    closeFormDialog() {
      this.dialog = false;
    },

    allowedDate(date) {
      return date.getTime() >= new Date().getTime();
    },
    openDialog() {
      this.dialog = true;
    },
    addFieldRow() {
      this.fieldRows.push({
        menu: false,
        payableData: {
          due_date: "",
          amount_due: "",
        },
      });
    },
    removeFieldRow(index) {
      if (this.fieldRows.length === 1) {
        return;
      }
      this.fieldRows.splice(index, 1);
    },
    async sendToPayables() {
      // this.isSending = true;
      await this.fieldRows.map((payable) => {
        this.initiateSendToPayable(payable);
      });
    },
    async initiateSendToPayable(payable) {
      let formatted_total = this.singleInvoice.total.replaceAll(",", "");
      const payload = {
        amount_due: payable.payableData.amount_due,
        date_due: payable.payableData.due_date,
        document_id: this.singleInvoice.invoicenumber,
        description: this.description,
        payee: "",
        total: parseInt(formatted_total),
        organization: this.singleInvoice.organization.id.toString(),
        currency: "",
      };

      console.log(JSON.stringify(payload, null, 2));

      try {
        const response = await this.$store.dispatch(
          "payables/addToPayables",
          payload
        );
        console.log(JSON.stringify(response, null, 2));
        this.showToast({
          sclass: "success",
          show: true,
          message: "Sent data to Payables succesfully",
          timeout: 3000,
        });
        this.isSending = false;
        this.changeState = true;
      } catch (error) {
        console.log(JSON.stringify(error, null, 2));
      }
    },
  },
};
</script>

<style scoped>
.v-application .elevation-6 {
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 3%), 0px 6px 10px 0px rgb(0 0 0 / 3%),
    0px 1px 18px 0px rgb(0 0 0 / 3%) !important;
}

.v-input .v-label {
  font-size: 12px !important;
}

.v-btn--fab.v-size--x-small {
  height: 24px !important;
  width: 24px !important;
}

.modatTitleCont {
  background: #ffffff;
  border-radius: 8px 8px 0px 0px;
  height: 54px;
}

.modalTitle {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #19283d;
}

.card__title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  color: #19283d;
}

.card__supertitle {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  /* bodyTxt_old */

  color: #596a73;
}

.field__title {
  margin-bottom: 20px;
  margin-top: 30px;
  margin-left: 32px;
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.45px;
  color: #7f919b;
}

.form__field {
  margin-top: 12px;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 30px;
  /* background: #ffffff; */
  /* border: 1px solid rgba(212, 216, 223, 0.377431); */
  border-radius: 3px;
}

.btn-text {
  padding-left: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.636364px;
  color: #ffffff;
}

@media only screen and (min-width: 600px) {

  /* For tablets: */
  .form__field {
    margin-top: 12px;
    margin-left: 67px;
    margin-right: 67px;
    margin-bottom: 30px;
    /* background: #ffffff; */
    /* border: 1px solid rgba(212, 216, 223, 0.377431); */
    border-radius: 3px;
  }

  .field__title {
    margin-bottom: 20px;
    margin-top: 30px;
    margin-left: 67px;
    font-family: "Inter";
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.45px;
    color: #7f919b;
  }
}

@media only screen and (min-width: 768px) {

  /* For desktop: */
  .form__field {
    margin-top: 12px;
    margin-left: 67px;
    margin-right: 67px;
    margin-bottom: 30px;
    /* background: #ffffff; */
    /* border: 1px solid rgba(212, 216, 223, 0.377431); */
    border-radius: 3px;
  }

  .field__title {
    margin-bottom: 20px;
    margin-top: 30px;
    margin-left: 67px;
    font-family: "Inter";
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.45px;
    color: #7f919b;
  }
}
</style>
