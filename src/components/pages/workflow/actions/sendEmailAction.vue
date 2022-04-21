<template>
  <v-dialog v-model="dialog" max-width="650px" transition="dialog-transition">
    <div class="action">
      <div class="action__header">
        <div class="b">
          <img class="i" src="@/assets/actions-send-email.svg" alt="" />
          <span class="t">Send Email</span>
        </div>

        <v-btn @click="close" icon color="primary">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="action__content">
        <div class="top">
          <span class="action-title">Send Email</span>
        </div>

        <!-- <span class="action-description"
          >Select the co-worker from who approval is required for this
          stage</span
        > -->

        <div style="margin-top: 30px" class="a-wrapper">
          <v-row>
            <v-col cols="12">
              <v-text-field
                name="Subject"
                label="Subject"
                placeholder="Subject"
                hide-details="auto"
                outlined
                primary
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                outlined
                color="primary"
                label="To:"
                :items="workers"
                hide-details="auto"
                placeholder="To:"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                name="CC"
                label="CC"
                placeholder="Subject"
                hide-details="auto"
                outlined
                primary
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-textarea
                name="Message"
                label="Message"
                placeholder="Message"
                hide-details="auto"
                outlined
                primary
              ></v-textarea>
            </v-col>
          </v-row>
        </div>

        <!-- <span class="note">
          <b>Note:</b> Approval request will be sent to the selected co-worker,
          along with details of this workflow
        </span> -->

        <div class="bottom">
          <v-btn @click="close" large color="primary" outlined>
            <v-icon left>mdi-close</v-icon> Cancel
          </v-btn>

          <v-btn large color="primary" elevation="0">
            <v-icon left>mdi-chevron-right</v-icon> Add to workflow
          </v-btn>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      workers: ["John Doe", "Jane Doe", "Jack Doe", "Jill Doe"],
    };
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
  },
  watch: {
    dialog(val) {
      if (val) {
        this.$emit("open");
      } else {
        this.$emit("close");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.action {
  border-radius: 8px;
  background-color: #fff;


  &__header {
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .b {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .i {
      width: 26px;
      height: 26px;
      object-fit: fit;
    }

    .t {
      color: var(--v-primary-base);
      font-weight: 600;
      font-size: 20px;
    }
  }

  &__content {
    background-color: #fefcf8;
    padding: 20px 50px;

    .top {
      padding: 30px 0px 0px 0px;
      box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);

      .action-title {
        color: var(--v-primary-base);
        text-transform: uppercase;
        font-weight: 600;
        border-bottom: 5px solid var(--v-primary-base);
        font-size: 16px;
        height: 40px;
        padding: 0px 15px;
        display: inline-block;
      }
    }

    .action-description {
      color: var(--v-primary-base);
      display: block;
      padding: 20px 0px;
      font-size: 16px;
    }

    .a-wrapper {
      background-color: #fff;
      padding: 20px;
      border: 1px solid #d9dee1;
      border-radius: 4px;
    }

    .note {
      display: block;
      margin-top: 10px;
      color: #8f96a1;
    }

    .bottom {
      display: flex;
      justify-content: flex-end;
      margin: 30px 0px;
      gap: 20px;
    }
  }
}
</style>
