<template>
  <form @submit="submitInput">
    <div justify-center dense max-height="24px">
      <v-subheader
        class="py-10"
        style="
          margin-left: 48px;
          font-family: Inter;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 19px;
          color: #7f919b;
        "
      >
        Basic Data
      </v-subheader>

      <v-list-item>
        <v-list-item-title
          style="
            margin-left: 84px;
            font-family: Inter;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 15px;
            color: #301f78;
          "
          >Invoice no.</v-list-item-title
        >

        <v-spacer></v-spacer>
        <v-text-field
          v-model="basicDataInput.invoiceNumber"
          hide-details="auto"
          :disabled="changeState"
          :background-color="backgroundColor"
          solo
          flat
          dense
          :class="[!changeState ? changeState : '']"
          reverse
          style="
            font-family: Inter;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 15px;
            color: #7f919b;
          "
          placeholder="Enter Invoice"
        ></v-text-field>
      </v-list-item>
      <v-divider
        inset
        style="
          border: 1px dashed rgba(48, 31, 120, 0.1);
          transform: rotate(-0.65deg);
        "
      ></v-divider>
      <v-list-item>
        <v-list-item-title
          style="
            padding-left: 84px;
            font-family: Inter;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 15px;
            color: #301f78;
          "
          >Date</v-list-item-title
        >

        <v-spacer></v-spacer>
        <v-text-field
          v-model="basicDataInput.date"
          hide-details="auto"
          :disabled="changeState"
          :background-color="backgroundColor"
          solo
          flat
          dense
          :class="[!changeState ? changeState : '']"
          reverse
          style="
            font-family: Inter;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 15px;
            color: #7f919b;
          "
          placeholder="Enter Date"
        ></v-text-field>
      </v-list-item>
      <v-divider
        inset
        style="
          border: 1px dashed rgba(48, 31, 120, 0.1);
          transform: rotate(-0.65deg);
        "
      ></v-divider>
      <v-list-item>
        <v-list-item-title
          style="
            padding-left: 84px;
            font-family: Inter;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 15px;
            color: #301f78;
          "
          >VAT</v-list-item-title
        >

        <v-spacer></v-spacer>
        <v-text-field
          v-model="basicDataInput.vat"
          hide-details="auto"
          :disabled="changeState"
          :background-color="backgroundColor"
          solo
          flat
          dense
          :class="[!changeState ? changeState : '']"
          reverse
          style="
            font-family: Inter;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 15px;
            color: #7f919b;
          "
          placeholder="VAT Amount"
        ></v-text-field>
      </v-list-item>
      <v-divider
        inset
        style="
          border: 1px dashed rgba(48, 31, 120, 0.1);
          transform: rotate(-0.65deg);
        "
      ></v-divider>
      <v-list-item>
        <v-list-item-title
          style="
            padding-left: 84px;
            font-family: Inter;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 15px;
            color: #301f78;
          "
          >Due Date</v-list-item-title
        >

        <v-spacer></v-spacer>
        <v-text-field
          v-model="basicDataInput.dueDate"
          hide-details="auto"
          :disabled="changeState"
          :background-color="backgroundColor"
          solo
          flat
          dense
          :class="[!changeState ? changeState : '']"
          reverse
          style="
            text-align: right;
            font-family: Inter;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 15px;
            color: #7f919b;
          "
          placeholder="Enter Due Date"
        ></v-text-field>
      </v-list-item>
      <v-divider
        inset
        style="
          border: 1px dashed rgba(48, 31, 120, 0.1);
          transform: rotate(-0.65deg);
        "
      ></v-divider>
      <v-divider
        class="mt-8"
        style="
          border: 1px solid rgba(127, 145, 155, 0.107845);
          transform: rotate(-0.65deg);
        "
      ></v-divider>
      <v-subheader
        class="mt-8 pb-10"
        style="
          margin-left: 48px;
          font-family: Inter;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 19px;
          color: #7f919b;
        "
      >
        Vendor
      </v-subheader>

      <v-list-item>
        <v-list-item-title
          style="
            padding-left: 84px;
            font-family: Inter;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 15px;
            color: #301f78;
          "
          >Name</v-list-item-title
        >

        <v-spacer></v-spacer>
        <v-text-field
          v-model="vendorData.name"
          hide-details="auto"
          :disabled="changeState"
          :background-color="backgroundColor"
          solo
          flat
          dense
          :class="[!changeState ? changeState : '']"
          reverse
          style="
            font-family: Inter;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 15px;
            color: #7f919b;
          "
          placeholder="Enter Name"
        ></v-text-field>
      </v-list-item>
      <v-divider
        inset
        style="
          border: 1px dashed rgba(48, 31, 120, 0.1);
          transform: rotate(-0.65deg);
        "
      ></v-divider>
      <v-list-item>
        <v-list-item-title
          style="
            padding-left: 84px;
            font-family: Inter;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 15px;
            color: #301f78;
          "
          >Address</v-list-item-title
        >

        <v-spacer></v-spacer>
        <v-text-field
          v-model="vendorData.address"
          hide-details="auto"
          :disabled="changeState"
          :background-color="backgroundColor"
          solo
          flat
          dense
          :class="[!changeState ? changeState : '']"
          reverse
          style="
            font-family: Inter;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 15px;
            color: #7f919b;
          "
          placeholder="Enter Address"
        ></v-text-field>
      </v-list-item>
      <v-divider
        inset
        style="
          border: 1px dashed rgba(48, 31, 120, 0.1);
          transform: rotate(-0.65deg);
        "
      ></v-divider>
      <v-list-item>
        <v-list-item-title
          style="
            padding-left: 84px;
            font-family: Inter;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 15px;
            color: #301f78;
          "
          >Tax Id.</v-list-item-title
        >

        <v-spacer></v-spacer>
        <v-text-field
          v-model="vendorData.taxId"
          hide-details="auto"
          :disabled="changeState"
          :background-color="backgroundColor"
          solo
          flat
          dense
          :class="[!changeState ? changeState : '']"
          reverse
          style="
            font-family: Inter;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 15px;
            color: #7f919b;
          "
          placeholder="Enter Tax Id."
        ></v-text-field>
      </v-list-item>
      <v-divider
        inset
        style="
          border: 1px dashed rgba(48, 31, 120, 0.1);
          transform: rotate(-0.65deg);
        "
      ></v-divider>
      <v-list-item>
        <v-list-item-title
          style="
            padding-left: 84px;
            font-family: Inter;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 15px;
            color: #301f78;
          "
          >Email</v-list-item-title
        >

        <v-spacer></v-spacer>
        <v-text-field
          v-model="vendorData.email"
          hide-details="auto"
          :disabled="changeState"
          :background-color="backgroundColor"
          solo
          flat
          dense
          :class="[!changeState ? changeState : '']"
          reverse
          style="
            text-align: right;
            font-family: Inter;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 15px;
            color: #7f919b;
          "
          placeholder="Enter your Email"
        ></v-text-field>
      </v-list-item>
      <v-divider
        inset
        style="
          border: 1px dashed rgba(48, 31, 120, 0.1);
          transform: rotate(-0.65deg);
        "
      ></v-divider>
      <v-list-item>
        <v-list-item-title
          style="
            padding-left: 84px;
            font-family: Inter;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 15px;
            color: #301f78;
          "
          >Phone</v-list-item-title
        >

        <v-spacer></v-spacer>
        <v-text-field
          v-model="vendorData.phone"
          hide-details="auto"
          :disabled="changeState"
          :background-color="backgroundColor"
          solo
          flat
          dense
          :class="[!changeState ? changeState : '']"
          reverse
          style="
            text-align: right;
            font-family: Inter;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 15px;
            color: #7f919b;
          "
          placeholder="Enter Phone"
        ></v-text-field>
      </v-list-item>
      <v-divider
        inset
        style="
          border: 1px dashed rgba(48, 31, 120, 0.1);
          transform: rotate(-0.65deg);
        "
      ></v-divider>
      <v-btn
        type="submit"
        width="300"
        dark
        block
        color="#311B92"
        class="mt-16"
        style="
          margin-left: 76px;
          width: 350px;
          height: 54px;
          box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
          border-radius: 4px;
        "
      >
        <simple-line-icons
          style="width: 15.98px; height: 15.97px"
          class="m-0 text--white"
          icon="cursor"
          no-svg
        />
        <span
          class="pl-3 text-capitalize"
          style="
            font-family: Inter;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            text-align: center;
            letter-spacing: 0.636364px;
          "
          >Send to Payables</span
        >
      </v-btn>

      <div class="d-flex justify-left mt-12 ml-14">
        <InvoiceBtn @activate="activateField" />
      </div>
    </div>
  </form>
</template>

<script>
import SimpleLineIcons from "vue-simple-line";
import InvoiceBtn from "./InvoiceBtn.vue";

export default {
  name: "BasicData",
  data() {
    return {
      changeState: true,
      basicDataInput: {
        invoiceNumber: "",
        vat: "",
        date: "",
        dueDate: "",
      },
      vendorData: {
        name: "",
        address: "",
        taxId: "",
        email: "",
        phone: "",
      },
    };
  },
  components: {
    SimpleLineIcons,
    InvoiceBtn,
  },

  methods: {
    activateField() {
      return (this.changeState = !this.changeState);
    },
    submitInput(e) {
      e.preventDefault();
      console.log("Basic Data", JSON.stringify(this.basicDataInput));
      console.log("Vendor Data", JSON.stringify(this.vendorData));
    },
  },

  computed: {
    backgroundColor() {
      return this.changeState ? "transparent" : "#ffffff";
    },
  },
};
</script>

<style scoped>
.v-text-field {
  width: 260px;
}
.centered-input input {
  text-align: right;
}
i.sli-font {
  font-size: 16px;
  display: inline-block;
}

.v-btn--block {
  display: flex;
  flex: 1 0 auto;
  min-width: 380px !important;
  max-width: auto;
}
.changeState {
  background: #ffffff;
  border: 1px solid rgba(48, 31, 120, 0.07);
}
.defaultState {
  background: transparent;
  border: none;
}
</style>
