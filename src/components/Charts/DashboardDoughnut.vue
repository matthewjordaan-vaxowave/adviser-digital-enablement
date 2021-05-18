<template>
  <div id="chart">
    <template>
      <div class="shift">
        <apexchart
          width="400"
          type="donut"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </template>
  </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  name: "DashboardDoughnut",
  data() {
    return {
      series: [10, 20, 30],
      chartOptions: {
        labels: ["Not On Track", "Slightly Behind", "On Track"],
        colors: ["#FF0000", "#FFA500", "#008000"],
        dataLabels: {
          enabled: false,
          position: "top",
        },
        chart: {
          type: "donut",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
                offsetX: 20,
              },
            },
          },
        ],
      },
    };
  },
});
</script>
<style scoped>
.shift {
  margin-left: 16em;
  margin-top: 3em;
  margin-right: 3em;
  padding-bottom: 4em;
}
</style>
