<template>
  <div>
    <v-dialog
      elevation="0"
      v-model="dialog"
      max-width="590"
      overlay-color="#301F78"
      overlay-opacity="0.282397"
    >
      <v-card
        max-width=""
        flat
        class="m-0"
        style="background: #f8f7f4; border-radius: 8px"
      >
        <v-card-title
          style="
            background: #ffffff;
            border-radius: 8px 8px 0px 0px;
            height: 54px;
          "
        >
          <img
            :src="require('@/assets/icons/task-square.png')"
            width="20"
            height="20"
          />

          <span class="ml-5 dialog__title">Delete Form</span>
          <v-spacer></v-spacer>
          <v-icon
            tag="button"
            @click="closeFormDialog"
            class="text-bolder"
            color="#596A73"
          >
            mdi-close
          </v-icon>
        </v-card-title>
        <div class="px-16 mt-10 mb-8">
          <span class="py-14 text-h6" style="color: #9e9ebd">
            Are you sure you want to permanently delete this form?
          </span>
        </div>

        <template class="mt-6">
          <v-card-actions class="d-flex justify-end mt-2 mr-14">
            <v-btn
              @click="closeFormDialog"
              dark
              width="121"
              height="45"
              color="#acb2b6"
              elevation="0"
              class="text-capitalize mt-8 mb-16 mr-5"
            >
              <v-icon small color="primary">mdi-close</v-icon>
              <span class="primary--text">Cancel</span>
            </v-btn>
            <v-btn
              link
              @click="deleteForm"
              dark
              height="45"
              color="primary"
              class="text-capitalize mt-8 mb-16 px-4"
            >
              <v-icon>mdi-chevron-right</v-icon>
              <span class="px-1">Delete Form</span>
            </v-btn>
          </v-card-actions>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  components: {
    //
  },
  name: "deleteForm",
  data() {
    return {
      show: false,
      dialog: false,
      deleteIndex: null,
    };
  },
  computed: {
    ...mapState("formBuilder", ["formCards"]),
  },
  methods: {
    ...mapActions({ showToast: "ui/showToast" }),
    closeFormDialog() {
      this.dialog = false;
    },
    //passed the index from the parent component as an parameter ...
    openDialog(index) {
      console.log(index);
      this.dialog = true;

      this.deleteIndex = index;
    },

    async deleteForm() {
      if (this.deleteIndex == null) return;

      //get the index of the particular form card
      //pass this index to a variable
      const id = this.$store.state.formBuilder.formCards[this.deleteIndex].id;

      //delete card from vue data object to reflect on UI
      this.formCards.splice(this.deleteIndex, 1);

      // this.deleteForm(id);

      //delete from server....
      try {
        await this.$store.dispatch("formBuilder/deleteForm", id).then(
          this.showToast({
            sclass: "success",
            show: true,
            message: "deleted Form successfully",
            timeout: 3000,
          })
        );
      } catch (error) {
        console.log(error);
        if (error) {
          this.showToast({
            sclass: "error",
            show: true,
            message:
              "Form " + this.configuration.formName + " could not be deleted",
            timeout: 3000,
          });
        }
      }
      this.dialog = false;
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
.form__field {
  margin-top: 12px;
  margin-left: 67px;
  margin-right: 67px;
  margin-bottom: 60px;
  /* background: #ffffff; */
  /* border: 1px solid rgba(212, 216, 223, 0.377431); */
  border-radius: 3px;
}

.dialog__title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #19283d;
}
</style>
