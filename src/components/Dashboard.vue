<template>
  <div class="shift">
    <v-card color="#D3D3D3" class="shift" tile>
      <v-card-title><span>GOALS</span> </v-card-title>
      <v-card class="shift">
        <v-card-title
          >60 Customers
          <span class="shift-title-text"
            >Information as at: {{ lastUpdatedDate | date }}</span
          >
        </v-card-title>
        <v-divider></v-divider>
        <dashboard-doughnut />
        <p class="shift-button-text">
          10 Customers need an urgent intervention. Help them Get back on track.
          <v-btn class="white-font" rounded color="green" width="12em">View All </v-btn>
        </p>
      </v-card>
    </v-card>
  </div>
</template>
<script lang="ts" src="./scripts/dashboard.ts"></script>
<style scoped src="./stylesheets/dashboard.css"></style>


