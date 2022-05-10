<template>
  <div>
    <v-row class="justify-center" style="padding-top: 105px">
      <img :src="require('@/assets/folder.svg')" alt="folder svg" />
    </v-row>

    <!-- instructions when there is no invoice -->

    <v-row
      class="justify-center px-8 text-center text-md-start"
      style="padding-top: 40px"
    >
      <p class="noInvoice">No invoice/transaction is awaiting action</p>
    </v-row>

    <!-- instructions when there is no invoice -->
    <v-row class="justify-center pt-0">
      <p class="p-guide">
        Click here to upload an invoice or generate an expense request form
      </p>
    </v-row>
    <v-row class="d-flex justify-center align-center px-8 pt-8">
      <v-card
        class="d-flex flex-row justify-center align-center info__card"
        elevation="0"
      >
        <v-avatar class="d-flex align-center ma-4" color="#F9EED2" size="40">
          <img :src="require('@/assets/info.svg')" alt="info-icon" />
        </v-avatar>
        <v-card-text class="info__text pl-0" style="background-color: #fff">
          To capture invoices sent to email, forward attachements to
          {{ organizationToken.data.hypn_email }} or ask your vendors to send
          directly
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      //
    };
  },

  computed: {
    ...mapGetters({
      organizationToken: "organizations/OrganToken",
    }),
  },
};
</script>

<style scoped>
.noInvoice {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.73px;
  color: #19283d;
}

.p-guide {
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #596a73;
}
.info__card {
  max-width: 455px;
  background: #ffffff;
  border: 1px solid #fbf4e4;
  box-sizing: border-box;
  border-radius: 4px;
}
.info__text {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #596a73;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .errorCode {
    font-size: 150px;
  }
  .errror-message {
    font-size: 24px;
  }
  .info__text {
    font-size: 9px;
  }
  .info__card {
    max-width: 360px;
  }
  .p-guide {
    text-align: center;
    font-size: 9px;
  }
}
</style>
