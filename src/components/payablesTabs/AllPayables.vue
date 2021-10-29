<template>
  <div>
    <div>
      <v-card
        height="60px"
        width="100%"
        flat
        class="d-flex"
        style="background: rgba(127, 145, 155, 0.052607)"
      >
        <v-switch
          flat
          dense
          class="pl-4 mb-2"
          color="#16be98"
          v-model="autoPlay"
          label="Auto play"
        ></v-switch>
      </v-card>
    </div>
    <v-layout>
      <v-data-table
        dense
        :headers="headers"
        :items="inbox"
        hide-default-footer
        disable-pagination
        item-key="id"
        width="1340px"
        class="elevation-0 table-text"
      >
        <!-- <template v-slot:[`item.id`]="{ item }"> </template> -->
        <template v-slot:[`item.transactionType`]="{ item }">
          <v-chip
            :color="`${
              item.transactionType === 'expense' ? '#F9EED2' : '#D5F7EF'
            }`"
            :text-color="`${
              item.transactionType === 'expense' ? '#E3AA1C' : '#2BD5AE'
            }`"
            x-small
          >
            {{ item.transactionType }}
          </v-chip>
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <div class="d-flex">
            <v-icon
              small
              :color="`${item.status === 'paid' ? '#2BD5AE' : '#E3AA1C'}`"
            >
              mdi-circle-medium
            </v-icon>
            <span>
              {{ item.status }}
            </span>
          </div>
        </template>
        <template v-slot:[`item.date`]="{ item }">
          <span>
            {{ item.date | date }}
          </span>
        </template>
        <template v-slot:[`item.action`]="{}">
          <div class="d-flex">
            <v-btn
              @click.stop="dialog = true"
              exact-path
              rounded
              depressed
              dark
              small
              color="#2BD5AE"
              class="text-lowercase px-2 my-1 mr-2"
              style="color: #311b92"
            >
              view
            </v-btn>
            <v-btn
              rounded
              depressed
              dark
              small
              color="#311B92"
              class="text-lowercase px-2 my-1"
              >review</v-btn
            >
          </div>
        </template>
      </v-data-table>
      <template>
        <div>
          <v-dialog v-model="dialog" max-width="516">
            <v-card color="#FEFCF8" class="rounded-lg">
              <v-card-title
                style="background: #ffffff; border-radius: 8px 8px 0px 0px"
              >
                <span
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 19px;
                    color: #301f78;
                  "
                  >PAYABLE: Details</span
                >
                <v-spacer></v-spacer>
                <v-icon
                  tag="button"
                  @click="dialog = false"
                  class="text-bolder"
                  color="#596A73"
                >
                  mdi-close
                </v-icon>
              </v-card-title>
              <div class="px-8 d-flex" style="background: #fdfaf2">
                <div class="pt-5">
                  <h5
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: normal;
                      font-size: 12px;
                      line-height: 15px;
                      color: #301f78;
                    "
                  >
                    Amount
                  </h5>
                  <p
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: bold;
                      font-size: 18px;
                      line-height: 22px;
                      color: #301f78;
                    "
                  >
                    {{ amount }}
                  </p>
                </div>
                <v-spacer></v-spacer>
                <div class="pt-5">
                  <h5
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: normal;
                      font-size: 12px;
                      line-height: 15px;
                      color: #301f78;
                    "
                  >
                    Due
                  </h5>
                  <p
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: bold;
                      font-size: 12px;
                      line-height: 18px;
                      color: #596a73;
                    "
                  >
                    {{ new Date() | date }}
                  </p>
                </div>
              </div>
              <div>
                <div class="mx-auto px-13 pt-5">
                  <h5
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: normal;
                      font-size: 12px;
                      line-height: 18px;
                      color: #7f919b;
                    "
                  >
                    Ref
                  </h5>
                  <p
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: bold;
                      font-size: 12px;
                      line-height: 18px;
                      color: #7f919b;
                    "
                  >
                    {{ Ref }}
                  </p>
                </div>
                <v-divider
                  class="mx-13"
                  style="
                    padding-top: 10px;
                    padding-bottom: 10px;
                    color: rgba(127, 145, 155, 0.22588);
                  "
                ></v-divider>
                <div class="mx-auto px-13">
                  <h5
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: normal;
                      font-size: 12px;
                      line-height: 18px;
                      color: #7f919b;
                    "
                  >
                    Payee
                  </h5>
                  <p
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: bold;
                      font-size: 12px;
                      line-height: 18px;
                      color: #7f919b;
                    "
                  >
                    {{ Payee }}
                  </p>
                </div>
                <v-divider
                  class="mx-13"
                  style="
                    padding-top: 10px;
                    padding-bottom: 10px;
                    color: rgba(127, 145, 155, 0.22588);
                  "
                ></v-divider>
                <div class="mx-auto px-13">
                  <h5
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: normal;
                      font-size: 12px;
                      line-height: 18px;
                      color: #7f919b;
                    "
                  >
                    Subtotal
                  </h5>
                  <p
                    style="
                      font-family: Inter;
                      font-style: normal;
                      font-weight: bold;
                      font-size: 12px;
                      line-height: 18px;
                      color: #7f919b;
                    "
                  >
                    {{ Subtotal }}
                  </p>
                </div>
              </div>
              <v-card
                @click.native="uploadFile"
                @drop.prevent="onDroppedFiles"
                @dragover.prevent="dragging = true"
                @dragleave.prevent="dragging = false"
                width="412"
                height="126"
                class="mx-13 my-0 justify-center d-flex"
                style="
                  background: #ffffff;
                  border: 1px dashed rgba(127, 145, 155, 0.551929);
                  box-sizing: border-box;
                  border-radius: 8px;
                "
                flat
                :style="{
                  border: dragging
                    ? '1px dashed #424f95'
                    : '1px dashed rgba(127, 145, 155, 0.551929)',
                }"
              >
                <span
                  class="d-flex mx-auto my-auto"
                  style="
                    font-family: Inter;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 18px;
                    text-align: center;
                    color: #7f919b;
                  "
                  >Drag and drop or click to upload <br />
                  png/jpg invoice</span
                >
              </v-card>
              <template>
                <v-card-actions class="d-flex justify-end align-center mr-9">
                  <v-btn
                    dark
                    width="121"
                    height="45"
                    style="
                      margin-right: 12px;
                      margin-top: 24px;
                      margin-bottom: 41px;
                      background: #311b92;
                      box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
                      border-radius: 4px;
                    "
                  >
                    <simple-line-icons icon="pencil" size="small" no-svg />
                    <span
                      class="pl-2 m-0 text-capitalize"
                      style="
                        font-family: Inter;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 17px;
                        text-align: center;
                        letter-spacing: 0.636364px;

                        color: #ffffff;
                      "
                      >Update</span
                    >
                  </v-btn>
                  <v-btn
                    dark
                    width="121"
                    height="45"
                    style="
                      margin-top: 24px;
                      margin-bottom: 41px;
                      background: #16be98;
                      box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
                      border-radius: 4px;
                    "
                  >
                    <simple-line-icons icon="arrow-right" size="small" no-svg />
                    <span
                      class="pl-4 m-0 text-capitalize"
                      style="
                        font-family: Inter;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 17px;
                        text-align: center;
                        letter-spacing: 0.636364px;

                        color: #ffffff;
                      "
                      >Pay</span
                    >
                  </v-btn>
                </v-card-actions>
              </template>
            </v-card>
          </v-dialog>
        </div>
      </template>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      autoPlay: false,
      amount: "N2,300,000",
      Ref: "#EXP084492",
      Payee: "Emmanuel John",
      Subtotal: "172500",
      dragging: false,
      dialog: false,
      inbox: [
        {
          id: 1,
          approvedBy: "John Bull",
          amount: "200,000,000",
          ref: "#EXP084492",
          payee: "John Bello",
          date: new Date(),
          status: "scheduled",
          action: "",
        },
        {
          id: 2,
          approvedBy: "Ken Chibuzor",
          amount: "2,300,000",
          ref: "#EXP084492",
          payee: "Emmanuel John",
          date: new Date(),
          status: "pending",
          action: "",
        },
        {
          id: 3,
          approvedBy: "Durosimi Paul",
          amount: "20,000,000",
          ref: "#EXP084492",
          payee: "Samuel Olawale",
          date: new Date(),
          status: "paid",
          action: "",
        },
        {
          id: 4,
          approvedBy: "Chioma Williams",
          amount: "1,200,500",
          ref: "#EXP084492",
          payee: "FIRS",
          date: new Date(),
          status: "pending",
          action: "",
        },
        {
          id: 5,
          approvedBy: "Bisi Oguntade",
          amount: "200,000,000",
          ref: "#EXP084492",
          payee: "Brain&Hammer Ltd",
          date: new Date(),
          status: "pending",
          action: "",
        },
        {
          id: 6,
          approvedBy: "Julius Obe",
          amount: "11,000,000",
          ref: "#EXP084492",
          payee: "Julius Berger",
          date: new Date(),
          status: "pending",
          action: "",
        },
      ],
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          class: "primary--text",
          value: "id",
        },
        {
          text: "Approved by",
          class: "primary--text",
          value: "approvedBy",
          // width: "50px",
        },
        {
          text: "Amount",
          align: "end",
          sortable: false,
          class: "primary--text",
          value: "amount",
        },
        {
          text: "Currency",
          class: "primary--text",
          value: "currency",
        },
        {
          text: "Ref no.",
          class: "primary--text",
          value: "ref",
        },
        {
          text: "Status",
          class: "primary--text",
          value: "status",
        },
        {
          text: "Payee",
          align: "end",
          sortable: false,
          class: "primary--text",
          value: "payee",
        },
        { text: "Entry Date", class: "primary--text", value: "date" },
        {
          text: "Action",
          class: "primary--text",
          value: "action",
          sortable: false,
          align: "center",
        },
      ],
    };
  },
  methods: {
    closeModal() {
      this.dialog = false;
      // this.workflowName = e;
      // console.log(e);
    },
    onDroppedFiles($event) {
      this.dragging = false;
      let files = [...$event.dataTransfer.items]
        .filter((item) => item.kind === "file")
        .map((item) => item.getAsFile());

      console.table(files);
    },
  },
};
</script>

<style scoped>
.switch-card {
  height: 53px;
  background: rgba(127, 145, 155, 0.052607);
}

.switch {
  width: 15.28px;
  height: 15.28px;
}

.export-btn {
  font-family: "Inter" sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  letter-spacing: 0.636364px;

  color: #301f78;
}
i.sli-font {
  font-size: 12px;
  display: inline-block;
}
.material-icons {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  color: #301f78;
}
</style>
