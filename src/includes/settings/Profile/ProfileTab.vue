<template>
  <div>
    <v-row>
      <v-col class="pt-0">
        <div class="mx-4 ml-md-13 mt-6">
          <v-form>
            <v-row class="mr-md-4 mx-md-10 mb-8">
              <v-col cols="12" md="6">
                <v-text-field
                  ref="firstName"
                  v-model="userDetails.firstName"
                  background-color="#ffffff"
                  outlined
                  hide-details="auto"
                  placeholder="First Name"
                  :rules="rules.firstName"
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
                  :rules="rules.lastName"
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
                  :rules="rules.email"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  ref="phone"
                  :rules="rules.phone"
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
            <v-card-actions class="justify-end pa-md-8">
              <v-btn
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
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
      rules: {
        firstName: [(v) => !!v || "This field is required "],
        lastName: [(v) => !!v || "This field is required "],
        email: [
          (v) => !!v || "E-mail is required",
          (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        phone: [
          (v) => !!v || "This field is required ",
          (v) => v.length == 14 || "Number is invalid",
        ],
      },
      isSaving: false,
      btnTitle: "Password reset",
      color: "#525E6E",
    };
  },
  methods: {
    ...mapActions({ showToast: "ui/showToast" }),
    // async createAccount() {
    consoleLogData() {
      Object.keys(this.form).forEach((f) => {
        //throw error to ui if there is any
        this.$refs[f].validate(true);
      });

      if (this.canCreateOrg) {
        //       try {
        //         this.isCreating = true;
        //         await this.$store.dispatch("auth/register", this.userDetails);
        //   console.log(JSON.stringify(req, null, 2));

        console.log(JSON.stringify(this.userDetails, null, 2));

        this.showToast({
          sclass: "success",
          show: true,
          message: "Account created successfully",
          timeout: 3000,
        });
      }
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
      //   }
    },
  },
  computed: {
    form() {
      return {
        Firstname: this.userDetails.Firstname,
        Lastname: this.userDetails.Lastname,
        email: this.userDetails.email,
        phoneNumber: this.userDetails.phoneNumber,
      };
    },

    canCreateOrg() {
      // loop through rules, if all pass user can create profile
      const rules = Object.keys(this.rules);
      return rules
        .map((rule) => {
          return Object.keys(this.rules[rule])
            .map((field, index) => {
              return this.rules[rule][index](this.userDetails[rule]);
            })
            .every((val) => val == true);
        })
        .every((val) => val == true);
    },
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
