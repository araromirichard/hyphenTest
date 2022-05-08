<template>
  <div>
    <v-item-group v-model="selected" multiple>
      <v-row>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
          class="px-auto px-md-16 py-0"
        >
          <v-item v-slot="{ active, toggle }">
            <v-hover v-slot:default="{ hover }">
              <v-card
                height="50px"
                class="my-auto mx-md-10"
                :color="hover ? '#c8dce3' : ''"
                tile
                elevation="0"
                style="border-bottom: thin solid rgba(0, 0, 0, 0.12)"
                @click="toggle"
              >
                <v-layout>
                  <v-flex md1 xs6 sm2>
                    <div>
                      <v-btn icon
                        ><img
                          :src="require('@/assets/icons/Money_light.svg')"
                        />
                      </v-btn>
                    </div>
                  </v-flex>
                  <v-flex md9 xs6 sm8>
                    <div>
                      <h5 class="pt-2 bank-name">{{ item.bankName }}</h5>
                      <h6 class="mb-3 bank-account">{{ item.bankAccount }}</h6>
                    </div>
                  </v-flex>
                  <v-flex md2 xs12 sm2>
                    <div class="float-right">
                      <v-btn
                        text
                        :color="active ? '#FF6A6A' : '#2BD5AE'"
                        class="reset-btn text-lowercase"
                      >
                        <span class="pr-2">
                          {{ active ? "disconnect" : "reconnect" }}
                        </span>
                        <simple-line-icons
                          icon="reload"
                          :color="active ? '#FF6A6A' : '#2BD5AE'"
                          style="
                            font-family: simple-line-icons;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 12px;
                            line-height: 16px;
                          "
                          no-svg
                        />
                      </v-btn>
                    </div>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-hover>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      items: [
        {
          bankName: "GT Bank",
          bankAccount: "09282929000",
        },
        {
          bankName: "Kuda MFB",
          bankAccount: "09282929000",
        },
        {
          bankName: "UBA Bank",
          bankAccount: "09282929000",
        },
      ],
    };
  },
};
</script>

<style scoped>
.bank-name {
  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  /* hyphen Blue */

  color: #19283d;
}
.bank-account {
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  /* hyphen Blue */

  color: #19283d;
}
.reset-btn {
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #2bd5ae;
}
</style>
