<template>
  <div class="shift">
    <v-card color="#D3D3D3" class="shift" tile>
      <v-card-title>CLIENTS </v-card-title>
      <v-card class="shift">
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Filter"
            hide-details
            class="search"
            ><v-btn><v-icon>mdi-magnify</v-icon></v-btn></v-text-field
          >
        </v-card-title>
        <v-data-table :headers="headers" :items="data" :search="search"
          ><!-- eslint-disable-next-line -->
          <template v-slot:item.clientProfile="{ item }">
            <v-btn elevation="2" rounded
              >Download
              <v-icon color="green"> mdi-download </v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </v-card>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Clients",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "NAME",
          align: "start",
          sortable: true,
          value: "name",
        },
        { text: "CONTACT DETAILS", value: "contactDetails" },
        { text: "ID NUMBER", value: "Id" },
        { text: "NEXT REVIEW", value: "nextReview" },
        { text: "CLIENT PROFILE", value: "clientProfile", sortable: false },
      ],
      data: [
        {
          name: "Tata Matomane",
          contactDetails: "0662339178",
          Id: "9501180681083",
          nextReview: "20 Jun 2021- 3 days",
          clientProfile: "",
        },
        {
          name: "Mama  Matomane",
          contactDetails: "0662339178",
          Id: "9501180681083",
          nextReview: "20 Jun 2021- 3 days",
          clientProfile: "",
        },
        {
          name: "Sibonelo Matomane",
          contactDetails: "0662339178",
          Id: "9501180681083",
          nextReview: "20 Jun 2021- 3 days",
          clientProfile: "",
        },
        {
          name: "Ntando Matomane",
          contactDetails: "0662339178",
          Id: "9501180681083",
          nextReview: "20 Jun 2021- 3 days",
          clientProfile: "",
        },
        {
          name: "Mlibo Matomane",
          contactDetails: "0662339178",
          Id: "9501180681083",
          nextReview: "20 Jun 2021- 3 days",
          clientProfile: "",
        },
        {
          name: "Asemahle Nondula",
          contactDetails: "0662339178",
          Id: "9501180681083",
          nextReview: "20 Jun 2021- 3 days",
          clientProfile: "",
        },
        {
          name: "Sisi Matomane",
          contactDetails: "0662339178",
          Id: "9501180681083",
          nextReview: "20 Jun 2021- 3 days",
          clientProfile: "",
        },
        {
          name: "Bhuti Matomane",
          contactDetails: "0662339178",
          Id: "9501180681083",
          nextReview: "20 Jun 2021- 3 days",
          clientProfile: "",
        },
        {
          name: "Makazi Matomane",
          contactDetails: "0662339178",
          Id: "9501180681083",
          nextReview: "20 Jun 2021- 3 days",
          clientProfile: "",
        },
        {
          name: "Likho Matomane",
          contactDetails: "0662339178",
          Id: "9501180681083",
          nextReview: "20 Jun 2021- 3 days",
          clientProfile: "",
        },
        {
          name: "Sikho Matomane",
          contactDetails: "0662339178",
          Id: "9501180681083",
          nextReview: "20 Jun 2021- 3 days",
          clientProfile: "",
        },
        {
          name: "S'yanda Matomane",
          contactDetails: "0662339178",
          Id: "9501180681083",
          nextReview: "20 Jun 2021- 3 days",
          clientProfile: "",
        },
      ],
    };
  },
});
</script>
<style scoped>
.search {
  margin-left: 45em;
}

.shift {
  margin-left: 3em;
  margin-top: 3em;
  margin-right: 3em;
  padding-bottom: 4em;
}
</style>
