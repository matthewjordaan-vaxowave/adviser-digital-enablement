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
        <dashboard-doughnut />
        <p class="shift-button-text">
          10 Customers need an urgent intervention. Help them Get back on track.
          <v-btn class="white-font" rounded color="green">View All </v-btn>
        </p>
      </v-card>
    </v-card>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import DashboardDoughnut from "./Charts/DashboardDoughnut.vue";
export default Vue.extend({
  components: { DashboardDoughnut },
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
.shift-button-text {
  margin-left: 8em;
}

.white-font {
  color: white;
}
.shift-title-text {
  margin-left: 30em;
  padding-right: 0em;
}
</style>
