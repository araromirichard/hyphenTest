<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row align="center" v-if="$vuetify.breakpoint.mdAndUp">
          <v-col class="d-flex justify-center align-center" cols="12">
            <h3
              class="font-weight-bold text-md-h4 primary--text pl-md-14"
              style="line-height: 39px"
            >
              Contacts
              <span
                ><v-icon large class="text--disabled"
                  >mdi-chevron-right</v-icon
                ></span
              >
              <span v-if="!isVendor" class="subtitle">customer</span>
              <span v-else class="subtitle">vendor</span>
            </h3>

            <v-spacer></v-spacer>

            <ContactDropDown
              btnText="Add New"
              icon="contact"
              width="148"
              height="54px"
              style="margin-right: 88px"
            />
          </v-col>
        </v-row>

        <!-- page title for mobile screens -->
        <v-row align="center" v-if="$vuetify.breakpoint.mdAndDown">
          <v-col class="d-flex justify-center align-center" cols="12">
            <h3
              class="mt-6 font-weight-bold text-h5 primary--text pl-2"
              style="line-height: 18px"
            >
              Contacts
              <span
                ><v-icon class="text--disabled">mdi-chevron-right</v-icon></span
              >
              <span v-if="!isVendor" class="ms-2 ms-md-1 text-h6"
                >customer</span
              >
              <span v-else class="ms-2 ms-md-1 text-h6">vendor</span>
            </h3>

            <v-spacer></v-spacer>

            <ContactDropDown
              btnText="Add New"
              icon="contact"
              width="148"
              height="54px"
              style="margin-right: 88px"
            />
          </v-col>
        </v-row>
      </v-col>

      <!-- for customers -->

      <v-container class="mt-10" v-if="!isVendor">
        <v-row class="mx-2 mx-md-12">
          <v-col cols="12" sm="12" md="5">
            <v-card min-height="627px" elevation="3">
              <v-card
                flat
                width="100%"
                style="border-bottom: 1px solid rgba(127, 145, 155, 0.3)"
              >
                <v-tabs v-model="tab" align-with-title slider-size="4">
                  <v-tab class="mt-2 tab">Details</v-tab>

                  <v-spacer></v-spacer>

                  <v-btn
                    depressed
                    outlined
                    small
                    color="#2BD5AE"
                    class="text-capitalize px-3 px-md-6 mt-3 mr-2 rounded"
                    style="color: var(--v-primary-base)"
                  >
                    Block
                  </v-btn>
                  <v-btn
                    @click="editCustomer"
                    outlined
                    depressed
                    small
                    color="primary"
                    class="text-capitalize px-4 mt-3 mr-2 mr-md-7 rounded"
                    >Edit</v-btn
                  >
                </v-tabs>
              </v-card>
              <v-card
                tile
                flat
                width="100%"
                min-height="100px"
                color="seperate-div"
              >
                <v-row>
                  <v-col class="ps-3">
                    <p
                      class="
                        text-caption
                        px-2
                        mt-4
                        mb-1
                        pa-md-0
                        mt-sm-1 mt-md-3
                        mb-sm-0 mb-md-0
                        ml-sm-6 ml-md-8
                        grey--text
                        darken-1
                      "
                    >
                      Total Outstanding
                    </p>
                    <p
                      class="
                        text-h5
                        px-2
                        pa-md-0
                        mt-sm-0 mt-md-0
                        mb-sm-0 mb-md-0
                        ml-sm-6 ml-md-8
                        font-weight-bold
                      "
                      style="color: #596a73"
                    >
                      {{ totalOutstanding }}
                    </p>
                    <v-chip
                      x-small
                      class="ms-2 py-2 small-chip ml-sm-6 ml-md-8"
                    >
                      receivable
                    </v-chip>
                  </v-col>
                  <v-col>
                    <p
                      class="
                        text-right text-caption
                        mt-4
                        px-2
                        mb-1
                        pa-md-0
                        mt-sm-1 mt-md-3
                        mb-sm-0 mb-md-0
                        mr-sm-6 mr-md-8
                        grey--text
                        darken-1
                      "
                    >
                      Customer Wallet
                    </p>
                    <p
                      class="
                        text-right text-caption
                        px-2
                        pa-0
                        mt-1
                        mb-sm-0 mb-md-0
                        mr-sm-6 mr-md-8
                        font-weight-bold
                      "
                    >
                      {{ CustomerWalletNumber }}
                    </p>

                    <v-chip
                      x-small
                      class="mr-4 py-2 mt-1 mr-sm-6 mr-md-8 float-right"
                      style="
                        font-family: Lato;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 10px;
                        line-height: 5px;
                        color: #596a73;
                        background: #d8d8d8;
                      "
                    >
                      {{ bankName }}
                    </v-chip>
                  </v-col>
                </v-row>
                <div>
                  <v-row class="mx-8 mt-6">
                    <v-col class="pa-0" cols="12" md="4">
                      <v-subheader
                        class="primary--text px-0"
                        :style="{
                          fontSize: `${
                            $vuetify.breakpoint.smAndDown ? '0.86rem' : '1rem'
                          }`,
                        }"
                        >Company Name</v-subheader
                      >
                    </v-col>
                    <v-col cols="12" md="8" class="pa-0">
                      <v-text-field
                        class="px-0"
                        v-model="singleCustomerDetails.companyName"
                        hide-details="auto"
                        readonly
                        :background-color="backgroundColor"
                        solo
                        flat
                        dense
                        reverse
                        placeholder="Enter Company Name"
                      ></v-text-field>
                    </v-col>
                    <v-divider
                      inset
                      style="
                        border: 1px solid rgba(48, 31, 120, 0.1);
                        transform: rotate(-0.65deg);
                      "
                    ></v-divider>
                  </v-row>
                  <v-row class="mx-8 mt-6">
                    <v-col class="pa-0" cols="12" md="4">
                      <v-subheader
                        class="primary--text px-0"
                        :style="{
                          fontSize: `${
                            $vuetify.breakpoint.smAndDown ? '0.86rem' : '1rem'
                          }`,
                        }"
                        >Contact Email</v-subheader
                      >
                    </v-col>
                    <v-col cols="12" md="8" class="pa-0">
                      <v-text-field
                        class="px-0"
                        v-model="singleCustomerDetails.contactEmail"
                        hide-details="auto"
                        readonly
                        :background-color="backgroundColor"
                        solo
                        flat
                        dense
                        reverse
                        placeholder="Enter Email"
                      ></v-text-field>
                    </v-col>
                    <v-divider
                      inset
                      style="
                        border: 1px solid rgba(48, 31, 120, 0.1);
                        transform: rotate(-0.65deg);
                      "
                    ></v-divider>
                  </v-row>
                  <v-row class="mx-8 mt-6">
                    <v-col class="pa-0" cols="12" md="4">
                      <v-subheader
                        class="primary--text px-0"
                        :style="{
                          fontSize: `${
                            $vuetify.breakpoint.smAndDown ? '0.86rem' : '1rem'
                          }`,
                        }"
                        >Contact Phone</v-subheader
                      >
                    </v-col>
                    <v-col cols="12" md="8" class="pa-0">
                      <v-text-field
                        class="px-0"
                        v-model="singleCustomerDetails.contactPhone"
                        hide-details="auto"
                        readonly
                        :background-color="backgroundColor"
                        solo
                        flat
                        dense
                        reverse
                        placeholder="Contact Phone"
                      ></v-text-field>
                    </v-col>
                    <v-divider
                      inset
                      style="
                        border: 1px solid rgba(48, 31, 120, 0.1);
                        transform: rotate(-0.65deg);
                      "
                    ></v-divider>
                  </v-row>
                  <v-row class="mx-8 mt-6">
                    <v-col class="pa-0" cols="12" md="4">
                      <v-subheader
                        class="primary--text px-0"
                        :style="{
                          fontSize: `${
                            $vuetify.breakpoint.smAndDown ? '0.86rem' : '1rem'
                          }`,
                        }"
                        >Accounting Code</v-subheader
                      >
                    </v-col>
                    <v-col cols="12" md="8" class="pa-0">
                      <v-text-field
                        class="px-0"
                        v-model="singleCustomerDetails.accountingCode"
                        hide-details="auto"
                        readonly
                        :background-color="backgroundColor"
                        solo
                        flat
                        dense
                        reverse
                        placeholder="Accounting Code"
                      ></v-text-field>
                    </v-col>
                    <v-divider
                      inset
                      style="
                        border: 1px solid rgba(48, 31, 120, 0.1);
                        transform: rotate(-0.65deg);
                      "
                    ></v-divider>
                  </v-row>
                  <v-row class="mx-8 mt-6">
                    <v-col class="pa-0" cols="12" md="4">
                      <v-subheader
                        class="primary--text px-0"
                        :style="{
                          fontSize: `${
                            $vuetify.breakpoint.smAndDown ? '0.86rem' : '1rem'
                          }`,
                        }"
                        >Default Payment Terms</v-subheader
                      >
                    </v-col>
                    <v-col cols="12" md="8" class="pa-0">
                      <v-text-field
                        class="px-0"
                        v-model="singleCustomerDetails.defaultPaymentTerms"
                        hide-details="auto"
                        readonly
                        :background-color="backgroundColor"
                        solo
                        flat
                        dense
                        reverse
                        placeholder="Default Payment Terms"
                      ></v-text-field>
                    </v-col>
                    <v-divider
                      inset
                      style="
                        border: 1px solid rgba(48, 31, 120, 0.1);
                        transform: rotate(-0.65deg);
                      "
                    ></v-divider>
                  </v-row>
                  <v-row class="mx-8 mt-6">
                    <v-col class="pa-0" cols="12" md="4">
                      <v-subheader
                        class="primary--text px-0"
                        :style="{
                          fontSize: `${
                            $vuetify.breakpoint.smAndDown ? '0.86rem' : '1rem'
                          }`,
                        }"
                        >Tags</v-subheader
                      >
                    </v-col>
                    <v-col cols="12" md="8" class="pa-0 d-flex justify-end">
                      <v-chip-group>
                        <v-chip
                          class="float-right py-2"
                          x-small
                          v-for="tag in tags"
                          :key="tag"
                          style="
                            font-family: Lato;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10px;
                            line-height: 5px;
                            color: #2bd5ae;
                            background: #d5f7ef;
                            border-radius: 6px;
                          "
                        >
                          {{ tag }}
                        </v-chip>
                      </v-chip-group>
                    </v-col>
                    <v-divider
                      inset
                      style="
                        border: 1px solid rgba(48, 31, 120, 0.1);
                        transform: rotate(-0.65deg);
                      "
                    ></v-divider>
                  </v-row>
                </div>
              </v-card>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="7" class="">
            <v-card min-height="494px" elevation="3">
              <v-card
                v-if="$vuetify.breakpoint.mdAndUp"
                flat
                width="100%"
                style="border-bottom: 1px solid rgba(127, 145, 155, 0.3)"
              >
                <v-tabs v-model="tab1" align-with-title slider-size="4">
                  <v-tab
                    class="mt-2"
                    v-for="item in items"
                    :key="item.tab1"
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: 800;
                      font-size: 12px;
                      line-height: 15px;
                      text-transform: uppercase;
                    "
                    >{{ item.tab1 }}</v-tab
                  >
                </v-tabs>
              </v-card>
              <v-card width="100%" class="pb-12" flat>
                <component
                  v-bind:is="items[tab1].content"
                  class="ml-0"
                ></component>
              </v-card>
            </v-card>
            <!-- tabs for customer mobile devices -->
            <v-row class="px-0 mx-0" v-if="$vuetify.breakpoint.mdAndDown">
              <v-col class="ma-0 pa-0" cols="12">
                <v-bottom-navigation fixed class="pa-0 mx-0" dark>
                  <v-tabs
                    slider-size="4"
                    center-active
                    class="ma-0"
                    background-color="primary"
                    v-model="tab1"
                  >
                    <v-tab
                      class="mt-2"
                      v-for="item in items"
                      :key="item.tab1"
                      style="
                        font-family: Inter;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 12px;
                        line-height: 15px;
                        text-transform: uppercase;
                      "
                      >{{ item.tab1 }}</v-tab
                    >
                  </v-tabs>
                </v-bottom-navigation>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <!-- for Vendors -->

      <v-container v-else class="mt-10">
        <v-row class="mx-2 mx-md-12">
          <v-col cols="12" sm="12" md="5">
            <v-card
              :min-height="`${
                $vuetify.breakpoint.smAndDown ? '1100px' : '789px'
              }`"
              elevation="3"
            >
              <v-card
                flat
                width="100%"
                style="border-bottom: 1px solid rgba(127, 145, 155, 0.3)"
              >
                <v-tabs v-model="tab" align-with-title slider-size="4">
                  <v-tab class="mt-2 tab">Details</v-tab>

                  <v-spacer></v-spacer>

                  <v-btn
                    depressed
                    outlined
                    small
                    color="#2BD5AE"
                    class="text-capitalize px-3 px-md-6 mt-3 mr-2 rounded"
                    style="color: var(--v-primary-base)"
                  >
                    Block
                  </v-btn>
                  <v-btn
                    @click="editForm"
                    outlined
                    depressed
                    small
                    color="primary"
                    class="text-capitalize px-4 mt-3 mr-2 mr-md-7 rounded"
                    >Edit</v-btn
                  >
                </v-tabs>
              </v-card>
              <div tile flat width="100%" height="100px" color="seperate-div">
                <div
                  class="d-flex align-center"
                  style="
                    height: 60px;
                    background: rgba(127, 145, 155, 0.052607);
                  "
                >
                  <!-- <div>
                    <p
                      class="
                        text-caption
                        px-2
                        mt-4
                        mb-1
                        pa-md-0
                        mt-sm-1 mt-md-3
                        mb-sm-0 mb-md-0
                        ml-sm-6 ml-md-8
                        grey--text
                        darken-1
                      "
                    >
                      Total Outstanding
                    </p>
                    <p
                      class="
                        text-h5
                        px-2
                        pa-md-0
                        mt-sm-0 mt-md-0
                        mb-sm-0 mb-md-0
                        ml-sm-6 ml-md-8
                        font-weight-bold
                      "
                      style="color: #596a73"
                    >
                      {{ totalOutstanding }}
                    </p>
                  </div>
                  <v-spacer></v-spacer>
                  <div>
                    <p
                      class="
                        text-right text-caption
                        px-2
                        mt-4
                        mb-1
                        pa-md-0
                        mt-sm-1 mt-md-3
                        mb-sm-0 mb-md-0
                        mr-sm-6 mr-md-9
                        grey--text
                        darken-1
                      "
                    >
                      Earliest due date
                    </p>
                    <p
                      class="
                        text-right text-caption
                        px-2
                        mt-1
                        mb-sm-0 mb-md-0
                        mr-sm-6 mr-md-8
                        font-weight-bold
                      "
                    >
                      {{ earliestDueDate | date }}
                    </p>
                  </div> -->
                </div>
                <div>
                  <v-row class="mx-8 mt-6">
                    <v-col class="pa-0" cols="12" md="4">
                      <v-subheader
                        class="primary--text px-0"
                        :style="{
                          fontSize: `${
                            $vuetify.breakpoint.smAndDown ? '0.86rem' : '1rem'
                          }`,
                        }"
                        >Company Name</v-subheader
                      >
                    </v-col>
                    <v-col cols="12" md="8" class="pa-0">
                      <v-text-field
                        class="px-0"
                        v-model="singleVendorDetails.company_name"
                        hide-details="auto"
                        readonly
                        :background-color="backgroundColor"
                        solo
                        flat
                        dense
                        reverse
                        placeholder="Vendor Name"
                      ></v-text-field>
                    </v-col>
                    <v-divider
                      inset
                      style="
                        border: 1px solid rgba(48, 31, 120, 0.1);
                        transform: rotate(-0.65deg);
                      "
                    ></v-divider>
                  </v-row>
                  <v-row class="mx-8 mt-6">
                    <v-col class="pa-0" cols="12" md="4">
                      <v-subheader
                        class="primary--text font-weight-bolder px-0"
                        :style="{
                          fontSize: `${
                            $vuetify.breakpoint.smAndDown ? '0.86rem' : '1rem'
                          }`,
                        }"
                        >Contact Person</v-subheader
                      >
                    </v-col>
                    <v-col cols="12" md="8" class="pa-0">
                      <v-text-field
                        class="px-0"
                        v-model="singleVendorDetails.contact_full_name"
                        hide-details="auto"
                        readonly
                        :background-color="backgroundColor"
                        solo
                        flat
                        dense
                        reverse
                        placeholder="Contact Full Name"
                      ></v-text-field>
                    </v-col>
                    <v-divider
                      inset
                      style="
                        border: 1px solid rgba(48, 31, 120, 0.1);
                        transform: rotate(-0.65deg);
                      "
                    ></v-divider>
                  </v-row>
                  <v-row class="mx-8 mt-6">
                    <v-col class="pa-0" cols="12" md="4">
                      <v-subheader
                        class="primary--text px-0"
                        :style="{
                          fontSize: `${
                            $vuetify.breakpoint.smAndDown ? '0.86rem' : '1rem'
                          }`,
                        }"
                        >Contact Email</v-subheader
                      >
                    </v-col>
                    <v-col cols="12" md="8" class="pa-0">
                      <v-text-field
                        class="px-0"
                        v-model="singleVendorDetails.contact_email"
                        hide-details="auto"
                        readonly
                        :background-color="backgroundColor"
                        solo
                        flat
                        dense
                        reverse
                        placeholder="Enter Email"
                      ></v-text-field>
                    </v-col>
                    <v-divider
                      inset
                      style="
                        border: 1px solid rgba(48, 31, 120, 0.1);
                        transform: rotate(-0.65deg);
                      "
                    ></v-divider>
                  </v-row>
                  <v-row class="mx-8 mt-6">
                    <v-col class="pa-0" cols="12" md="4">
                      <v-subheader
                        class="primary--text px-0"
                        :style="{
                          fontSize: `${
                            $vuetify.breakpoint.smAndDown ? '0.86rem' : '1rem'
                          }`,
                        }"
                        >Contact Phone</v-subheader
                      >
                    </v-col>
                    <v-col cols="12" md="8" class="pa-0">
                      <v-text-field
                        class="px-0"
                        v-model="singleVendorDetails.contact_phone"
                        hide-details="auto"
                        readonly
                        :background-color="backgroundColor"
                        solo
                        flat
                        dense
                        reverse
                        placeholder="Contact Phone"
                      ></v-text-field>
                    </v-col>
                    <v-divider
                      inset
                      style="
                        border: 1px solid rgba(48, 31, 120, 0.1);
                        transform: rotate(-0.65deg);
                      "
                    ></v-divider>
                  </v-row>
                  <v-row class="mx-8 mt-6">
                    <v-col class="pa-0" cols="12" md="4">
                      <v-subheader
                        class="primary--text px-0"
                        :style="{
                          fontSize: `${
                            $vuetify.breakpoint.smAndDown ? '0.86rem' : '1rem'
                          }`,
                        }"
                        >Accounting Code</v-subheader
                      >
                    </v-col>
                    <v-col cols="12" md="8" class="pa-0">
                      <v-text-field
                        class="px-0"
                        v-model="singleVendorDetails.accounting_code"
                        hide-details="auto"
                        readonly
                        :background-color="backgroundColor"
                        solo
                        flat
                        dense
                        reverse
                        placeholder="Accounting Code"
                      ></v-text-field>
                    </v-col>
                    <v-divider
                      inset
                      style="
                        border: 1px solid rgba(48, 31, 120, 0.1);
                        transform: rotate(-0.65deg);
                      "
                    ></v-divider>
                  </v-row>
                  <v-row class="mx-8 mt-6">
                    <v-col class="pa-0" cols="12" md="4">
                      <v-subheader
                        class="primary--text px-0"
                        :style="{
                          fontSize: `${
                            $vuetify.breakpoint.smAndDown ? '0.86rem' : '1rem'
                          }`,
                        }"
                        >Default Payment Terms</v-subheader
                      >
                    </v-col>
                    <v-col cols="12" md="8" class="pa-0">
                      <v-text-field
                        class="px-0"
                        v-model="singleVendorDetails.default_payment_terms"
                        hide-details="auto"
                        readonly
                        :background-color="backgroundColor"
                        solo
                        flat
                        dense
                        reverse
                        placeholder="Default Payment Terms"
                      ></v-text-field>
                    </v-col>
                    <v-divider
                      inset
                      style="
                        border: 1px solid rgba(48, 31, 120, 0.1);
                        transform: rotate(-0.65deg);
                      "
                    ></v-divider>
                  </v-row>
                  <v-row class="mx-8 mt-6">
                    <v-col class="pa-0" cols="12" md="4">
                      <v-subheader
                        class="primary--text px-0"
                        :style="{
                          fontSize: `${
                            $vuetify.breakpoint.smAndDown ? '0.86rem' : '1rem'
                          }`,
                        }"
                        >Tags</v-subheader
                      >
                    </v-col>
                    <v-col cols="12" md="8" class="pa-0 d-flex justify-end">
                      <v-chip-group>
                        <v-chip
                          class="py-2"
                          x-small
                          v-for="tag in singleVendorDetails.tags"
                          :key="tag"
                          style="
                            font-family: Lato;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 10px;
                            line-height: 5px;
                            color: #2bd5ae;
                            background: #d5f7ef;
                            border-radius: 6px;
                          "
                        >
                          {{ tag }}
                        </v-chip>
                      </v-chip-group>
                    </v-col>
                    <v-divider
                      inset
                      style="
                        border: 1px solid rgba(48, 31, 120, 0.1);
                        transform: rotate(-0.65deg);
                      "
                    ></v-divider>
                  </v-row>
                  <v-row class="mx-8 mt-6">
                    <v-col class="pa-0" cols="12" md="4">
                      <v-subheader
                        class="primary--text px-0"
                        :style="{
                          fontSize: `${
                            $vuetify.breakpoint.smAndDown ? '0.86rem' : '1rem'
                          }`,
                        }"
                        >Bank Name</v-subheader
                      >
                    </v-col>
                    <v-col cols="12" md="8" class="pa-0">
                      <v-text-field
                        class="px-0"
                        v-model="singleVendorDetails.bankname"
                        hide-details="auto"
                        readonly
                        :background-color="backgroundColor"
                        solo
                        flat
                        dense
                        reverse
                        placeholder="Enter Bank Name"
                      ></v-text-field>
                    </v-col>
                    <v-divider
                      inset
                      style="
                        border: 1px solid rgba(48, 31, 120, 0.1);
                        transform: rotate(-0.65deg);
                      "
                    ></v-divider>
                  </v-row>
                  <v-row class="mx-8 mt-6">
                    <v-col class="pa-0" cols="12" md="4">
                      <v-subheader
                        class="primary--text px-0"
                        :style="{
                          fontSize: `${
                            $vuetify.breakpoint.smAndDown ? '0.86rem' : '1rem'
                          }`,
                        }"
                        >Bank Account</v-subheader
                      >
                    </v-col>
                    <v-col cols="12" md="8" class="pa-0">
                      <v-text-field
                        class="px-0"
                        v-model="singleVendorDetails.bank_account"
                        hide-details="auto"
                        readonly
                        :background-color="backgroundColor"
                        solo
                        flat
                        dense
                        reverse
                        placeholder="Enter Bank Account"
                      ></v-text-field>
                    </v-col>
                    <v-divider
                      inset
                      style="
                        border: 1px solid rgba(48, 31, 120, 0.1);
                        transform: rotate(-0.65deg);
                      "
                    ></v-divider>
                  </v-row>
                  <v-row class="mx-8 mt-6">
                    <v-col class="pa-0" cols="12" md="4">
                      <v-subheader
                        class="primary--text px-0"
                        :style="{
                          fontSize: `${
                            $vuetify.breakpoint.smAndDown ? '0.86rem' : '1rem'
                          }`,
                        }"
                        >Date Added</v-subheader
                      >
                    </v-col>
                    <v-col cols="12" md="8" class="pa-0">
                      <v-text-field
                        v-model="singleVendorDetails.date_added"
                        hide-details="auto"
                        readonly
                        :background-color="backgroundColor"
                        solo
                        flat
                        dense
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
                      >
                      </v-text-field>
                    </v-col>
                    <v-divider
                      inset
                      style="
                        border: 1px dashed rgba(48, 31, 120, 0.1);
                        transform: rotate(-0.65deg);
                      "
                    ></v-divider>
                  </v-row>
                  <div class="mx-8 mt-6">
                    <v-switch
                      label="Approved"
                      color="teal accent-3"
                      v-model="singleVendorDetails.approved"
                    >
                    </v-switch>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="7" class="">
            <v-card min-height="494px" elevation="3">
              <v-card
                v-if="$vuetify.breakpoint.mdAndUp"
                flat
                width="100%"
                style="border-bottom: 1px solid rgba(127, 145, 155, 0.3)"
              >
                <v-tabs v-model="tab1" align-with-title slider-size="4">
                  <v-tab
                    class="mt-2"
                    v-for="item in items"
                    :key="item.tab1"
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: 800;
                      font-size: 12px;
                      line-height: 15px;
                      text-transform: uppercase;
                    "
                    >{{ item.tab1 }}</v-tab
                  >
                </v-tabs>
              </v-card>
              <v-card width="100%" class="pb-12" flat>
                <component
                  v-bind:is="items[tab1].content"
                  class="ml-0"
                ></component>
              </v-card>
            </v-card>
            <!-- tabs for vendor mobile devices -->
            <v-row class="px-0 mx-0" v-if="$vuetify.breakpoint.mdAndDown">
              <v-col class="ma-0 pa-0" cols="12">
                <v-bottom-navigation fixed class="pa-0 mx-0" dark>
                  <v-tabs
                    slider-size="4"
                    center-active
                    class="ma-0"
                    background-color="primary"
                    v-model="tab1"
                  >
                    <v-tab
                      class="mt-2"
                      v-for="item in items"
                      :key="item.tab1"
                      style="
                        font-family: Inter;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 12px;
                        line-height: 15px;
                        text-transform: uppercase;
                      "
                      >{{ item.tab1 }}</v-tab
                    >
                  </v-tabs>
                </v-bottom-navigation>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <edit-vendor ref="EditVendor" />
    <edit-customer ref="EditCustomer" />
  </v-container>
</template>

<script>
import ContactDropDown from "@/includes/ContactDropdown";
import CustomerInvoice from "@/components/Contacts/Customer/Customer-Invoice.vue";
import CustomerPayment from "@/components/Contacts/Customer/Customer-Payment.vue";
import CustomerMandate from "@/components/Contacts/Customer/Customer-Mandate.vue";
import EditVendor from "../../includes/overlays/ContactsMenuModals/EditVendor.vue";
import EditCustomer from "../../includes/overlays/ContactsMenuModals/EditCustomer.vue";

export default {
  name: "singleContact",
  data() {
    return {
      menu: false,
      tab1: 0,
      tab: 0,
      earliestDueDate: new Date(),
      isVendor: true,
      disabledField: true,
      contactRecord: "234 Records",
      totalOutstanding: "460,000.00",
      bankName: "bank name",
      CustomerWalletNumber: "30928292023",
      singleCustomerDetails: {
        company_name: "",
        contact_person: "",
        contact_email: "",
        contactPhone: "",
        accounting_code: "",
        default_payment_terms: "",
        tags: [],
      },
      singleVendorDetails: {
        company_name: "",
        contact_full_name: "",
        contact_email: "",
        contact_phone: "",
        accounting_code: "",
        default_payment_terms: "",
        tags: [],
        bankname: "",
        bank_account: "",
        date_added: null,
        approved: null,
      },

      items: [
        { tab1: "Invoices", content: "CustomerInvoice" },
        { tab1: "Payments", content: "CustomerPayment" },
        { tab1: "Mandates", content: "CustomerMandate" },
      ],
    };
  },
  components: {
    ContactDropDown,
    CustomerInvoice,
    CustomerPayment,
    CustomerMandate,
    EditVendor,
    EditCustomer,
  },
  methods: {
    editForm() {
      this.$refs.EditVendor.show(true);
      console.log(this.$refs);
    },
    editCustomer() {
      this.$refs.EditCustomer.show(true);
      console.log(this.$refs);
    },
    formatDate(date) {
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      return new Date(date).toLocaleDateString("en-GB", options);
    },
  },

  computed: {
    backgroundColor() {
      return this.disabledField ? "transparent" : "#ffffff";
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.isVendor = this.$route.query.vendor || false;
    this.$store.dispatch("contacts/getSingleVendor", id).then((response) => {
      if (response.status == 200) {
        this.singleVendorDetails.company_name = response.data.vendorname;
        this.singleVendorDetails.contact_full_name =
          response.data.contact.first_name +
          " " +
          response.data.contact.last_name;
        this.singleVendorDetails.contact_email = response.data.contact.email;
        this.singleVendorDetails.contact_phone = response.data.contact.phone;
        this.singleVendorDetails.accounting_code = "";
        this.singleVendorDetails.default_payment_terms = response.data.terms;
        this.singleVendorDetails.tags = response.data.tags;
        this.singleVendorDetails.bankname = response.data.bankname;
        this.singleVendorDetails.bank_account = response.data.bankaccount;
      }
      this.singleVendorDetails.date_added = this.formatDate(
        response.data.created_at
      );
      this.singleVendorDetails.approved = response.data.approved;
    });
  },
};
</script>

<style scoped>
.subtitle {
  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  color: #8f96a1;
}

.tab {
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
}

.seperate-div {
  background: rgba(127, 145, 155, 0.052607);
}
.small-chip {
  font-family: "Lato";
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 3px;
  background: #f9eed2;

  color: #e3aa1c;
}
.v-chip.v-size--x-small {
  border-radius: 8px;
  font-size: 10px;
  height: 10px;
}
.theme--light.v-chip:not(.v-chip--active) {
  background: #f9eed2;
}
v-chip.v-size--x-small[data-v-2900d98a] {
  border-radius: 8px;
  font-size: 10px;
  height: 10px;
}
.chipNormal {
  font-family: "Lato" !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-size: 10px !important;
  line-height: 10px !important;
  background: #d8d8d8;
  border-radius: 6px;
  color: #596a73 !important;
}
.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
  > .v-input__control
  > .v-input__slot,
.v-text-field.v-text-field--enclosed .v-text-field__details {
  padding: 0 1px;
}
.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical) {
  margin-left: 1px;
}
.v-divider--inset:not(.v-divider--vertical) {
  max-width: calc(100% - 5px);
}
.v-application .elevation-3 {
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 3%), 0px 6px 10px 0px rgb(0 0 0 / 3%),
    0px 1px 18px 0px rgb(0 0 0 / 3%) !important;
}
.v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)
  > .v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes)
  .v-slide-group__prev {
  /* display: initial; */
  visibility: hidden;
}

.v-subheader {
  align-items: center;
  display: flex;
  height: 48px;
  font-size: 1rem;
  font-weight: 400;
  padding: 0 16px 0 16px;
}
</style>
