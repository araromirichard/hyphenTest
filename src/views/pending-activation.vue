<template>
  <v-container style="background-color: #f8f7f4" fluid class="error-page">
    <div class="title-div">
      <span class="d-block pb-md-3 text-center error-message"
        >Your Account is Pending Activation</span
      >
      <span class="d-block text-center instruction"
        >Please check your email address for activation instructions or pending
        documentation.</span
      >
    </div>
    <div class="d-flex justify-center align-center mt-6 mt-md-10">
      <v-card
        class="d-flex flex-row justify-center align-center info__card"
        elevation="0"
      >
        <v-avatar class="d-flex align-center ma-4" color="#F9EED2" size="40">
          <img :src="require('@/assets/noforminfo.svg')" alt="" />
        </v-avatar>
        <v-card-text class="info__text pl-0" style="background-color: #fff">
          If you are seeing this page, accept our apologies. Please email
          support@tryhyphen.com with your email address registered on Hyphen, to
          fast track activation
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "pending",
};
</script>

<style scoped>
.title-div {
  margin-top: 288px;
}
.error-page {
  width: 100%;
  height: 100vh;
  justify-content: center;
  display: block;
}

.error-message {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 29px;
  letter-spacing: -0.73px;
  color: #19283d;
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

.instruction {
  /* max-width: 417px; */
  margin-bottom: 66px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  color: #596a73;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .errorCode {
    font-size: 150px;
  }
  .error-message {
    font-size: 24px;
  }
  .info__text {
    font-size: 9px;
  }
  .info__card {
    max-width: 360px;
  }
}
</style>
