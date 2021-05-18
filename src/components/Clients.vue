<template>
  <div>
    <v-card color="#D3D3D3" class="tableShift" tile fluid>
      <v-card-title>CLIENTS </v-card-title>
      <v-card class="tableShift">
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Filter"
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="data"
          :search="search"
        ><!-- eslint-disable-next-line --> 
        <template v-slot:item.clientProfile="{ item }">
         <v-btn
         elevation="2"
         rounded
         >Download
         <v-icon color="green">
          mdi-download
         </v-icon>
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
          clientProfile: "download",
        },
        {
          name: "Mama  Matomane",
          contactDetails: "0662339178",
          Id: "9501180681083",
          nextReview: "20 Jun 2021- 3 days",
          clientProfile: "download",
        },
        {
          name: "Sibonelo Matomane",
          contactDetails: "0662339178",
          Id: "9501180681083",
          nextReview: "20 Jun 2021- 3 days",
          clientProfile: "download",
        },
        {
          name: "Ntando Matomane",
          contactDetails: "0662339178",
          Id: "9501180681083",
          nextReview: "20 Jun 2021- 3 days",
          clientProfile: "download",
        },
        {
          name: "Mlibo Matomane",
          contactDetails: "0662339178",
          Id: "9501180681083",
          nextReview: "20 Jun 2021- 3 days",
          clientProfile: "download",
        },
        {
          name: "Asemahle Nondula",
          contactDetails: "0662339178",
          Id: "9501180681083",
          nextReview: "20 Jun 2021- 3 days",
          clientProfile: "download",
        },
        {
          name: "Sisi Matomane",
          contactDetails: "0662339178",
          Id: "9501180681083",
          nextReview: "20 Jun 2021- 3 days",
          clientProfile: "download",
        },
        {
          name: "Bhuti Matomane",
          contactDetails: "0662339178",
          Id: "9501180681083",
          nextReview: "20 Jun 2021- 3 days",
          clientProfile: "download",
        },
        {
          name: "Makazi Matomane",
          contactDetails: "0662339178",
          Id: "9501180681083",
          nextReview: "20 Jun 2021- 3 days",
          clientProfile: "download",
        },
        {
          name: "Likho Matomane",
          contactDetails: "0662339178",
          Id: "9501180681083",
          nextReview: "20 Jun 2021- 3 days",
          clientProfile: "download",
        },
        {
          name: "Sikho Matomane",
          contactDetails: "0662339178",
          Id: "9501180681083",
          nextReview: "20 Jun 2021- 3 days",
          clientProfile: "download",
        },
        {
          name: "S'yanda Matomane",
          contactDetails: "0662339178",
          Id: "9501180681083",
          nextReview: "20 Jun 2021- 3 days",
          clientProfile: "download",
        },
      ],
    };
  },
});
</script>
<style scoped>
.search {
  margin-left: 80em;
}

.tableShift {
  margin-left: 4em;
  margin-top: 3em;
  margin-right: 5em;
  padding-bottom: 3em;
}
</style>
