<template>
  <div class="error-page">
    <div>
      <span class="d-block text-center h2 font-semibold">An Error Occured</span>
      <v-btn @click="$router.go(-1)" color="primary">
        <v-icon>mdi-refresh</v-icon> Retry</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.error-page {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
