<template>
  <div>
    <v-row>
      <v-col class="pt-0">
        <div class="mx-4 mx-md-auto mt-6">
          <v-form>
            <v-row class="mx-md-4 mx-md-10 mb-8">
              <v-col cols="12" md="6">
                <v-text-field
                  ref="firstName"
                  v-model="userDetails.firstName"
                  background-color="#ffffff"
                  outlined
                  hide-details="auto"
                  placeholder="First Name"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  ref="lastName"
                  v-model="userDetails.lastName"
                  background-color="#ffffff"
                  outlined
                  hide-details="auto"
                  placeholder="Last Name"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  ref="email"
                  v-model="userDetails.email"
                  background-color="#ffffff"
                  outlined
                  hide-details="auto"
                  placeholder="Email"
                  type="email"
                  required
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  ref="phone"
                  v-model="userDetails.phone"
                  background-color="#ffffff"
                  outlined
                  hide-details="auto"
                  placeholder="Phone"
                >
                </v-text-field>
              </v-col>
              <div>
                <resetBtn :color="color" :btnTitle="btnTitle" />
              </div>
            </v-row>
            <v-card-actions class="justify-end px-0 pa-md-8 mr-md-4">
              <v-btn
                @click="updateUserDetails"
                class="submit-btn"
                :loading="isSaving"
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
          <!-- <Pre>
            {{ user }}
          </Pre> -->
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import resetBtn from "../../btns/resetBtn.vue";

export default {
  components: { resetBtn },
  data() {
    return {
      userDetails: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },

      isSaving: false,
      btnTitle: "Password reset",
      color: "#525E6E",
    };
  },
  methods: {
    ...mapActions({ showToast: "ui/showToast" }),

    async updateUserDetails() {
      // try {
      //   this.isCreating = true;
      //   await this.$store.dispatch("auth/updateUserDetails", {
      //     userId: this.user.id,
      //     payload: this.userDetails,
      //   });

      //   this.showToast({
      //     sclass: "success",
      //     show: true,
      //     message: "User Details Updated successfully",
      //     timeout: 3000,
      //   });
      // } catch (err) {
      //   this.showToast({
      //     sclass: "error",
      //     show: true,
      //     message: err.msg,
      //     timeout: 3000,
      //   });
      // } finally {
      //   this.isCreating = false;
      // }

      console.log(JSON.stringify(this.userDetails, null, 2));
    },
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
  async mounted() {
    await this.$store
      .dispatch("auth/getUserDetails", this.user.id)
      .then((response) => {
        this.userDetails.firstName = response.first_name;
        this.userDetails.lastName = response.last_name;
        this.userDetails.email = response.email;
        this.userDetails.phone = response.phone;
      });
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
