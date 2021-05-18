<template>
  <div class="shift">
    <v-card color="#D3D3D3" class="shift" tile>
      <v-card-title><span>GOALS</span> </v-card-title>
      <v-card class="shift">
        <v-card-title
          >345 Customers
          <span class="shift-title-text"
            >Information as at: {{ lastUpdatedDate | date }}</span
          >
        </v-card-title>
        <v-divider></v-divider>
      </v-card>
    </v-card>
  </div>
</template>
<script lang="ts" src="./scripts/dashboard.ts"></script>
<style scoped src="./stylesheets/dashboard.css"></style>
