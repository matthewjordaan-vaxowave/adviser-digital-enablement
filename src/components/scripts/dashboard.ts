import Vue from "vue";
import DashboardDoughnut from "../Charts/DashboardDoughnut.vue";
export default Vue.extend({
  name: "Dashboard",
  components: { DashboardDoughnut },
  data() {
    return {
      lastUpdatedDate: new Date(),
    };
  },
});
