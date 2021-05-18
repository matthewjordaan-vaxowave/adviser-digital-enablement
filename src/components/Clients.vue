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
<script lang="ts" src="./scripts/clients.ts"></script>
<style scoped src="./stylesheets/clients.css"></style>
