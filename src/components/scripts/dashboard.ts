import Vue from "vue";
export default Vue.extend({
  name: "Dashboard",
  data() {
    return {
      lastUpdatedDate: new Date(),
    };
  },
});
