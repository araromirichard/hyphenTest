<template>
  <div>
    <v-row style="margin-right: 300px">
      <v-col v-for="(item, i) in actions" :key="i" cols="12" sm="4">
        <v-card
          class="d-flex align-text-center flex-column rounded-lg elevation-0"
          tile
          style="
            width: auto;
            height: 180px;
            background: #ffffff;
            border: 1px solid rgba(49, 27, 146, 0.2);
            box-sizing: border-box;
            border-radius: 8px;
          "
        >
          logo
          <v-card
            dark
            tile
            class="rounded-b-lg elevation-0 text-center"
            style="
              width: 100%;
              height: 78px;
              position: absolute;
              bottom: 0;
              background: #fcfcfc;
              border: 1px solid rgba(49, 27, 146, 0.2);
              box-sizing: border-box;
            "
          >
            <v-card-text
              class="text-primary mx-auto text-center text-break text-body-1"
              style="
                font-family: Inter;
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 18px;
                text-align: center;
                letter-spacing: 0.45px;
                color: #301f78;
                mix-blend-mode: normal;
                opacity: 0.5;
                max-width: 10.5rem;
              "
            >
              {{ item.text }}
            </v-card-text>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ExecuteActions",
  data() {
    return {
      actions: [
        {
          text: `Send
                Payment`,
        },
        {
          text: `Add to 
                Payables`,
        },
        {
          text: `Send 
            Notification`,
        },
        {
          text: `Update 
            ERP/Accounting`,
        },
        {
          text: `Create 
                Document`,
        },
        {
          text: `Add Custom`,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
