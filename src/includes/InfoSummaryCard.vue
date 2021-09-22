<template>
  <div style="max-width: 390px">
    <div class="pb-3">
      <template>
        <v-card flat>
          <v-card-title>
            <img :src="require('@/assets/Persons.svg')" style="padding: 6px" />
            <span class="card-title">Stateholder</span>
            <v-spacer></v-spacer>
            <v-btn plain class="text-lowercase">
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
    <div class="pt-3">
      <v-card flat max-height="166">
        <v-card-title>
          <img :src="require('@/assets/Naira.svg')" style="padding: 6px" />
          <span class="card-title">Account Balance</span>
        </v-card-title>
        <div two-line>
          <div>
            <v-row class="text-h5 pl-6 pb-0 pt-6 card-text" v-model="payees">
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
  </div>
</template>

<script>
export default {
  name: "InfoSummary",
  data() {
    return {
      payees: "23",
      coWorkers: "5",
      bankBalance: "592,000",
    };
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
