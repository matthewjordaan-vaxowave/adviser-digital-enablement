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
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Dashboard",
  data() {
    return {
      lastUpdatedDate: new Date(),
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
.shift-title-text {
  margin-left: 30em;
  padding-right: 0em;
}
</style>
