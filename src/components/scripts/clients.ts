import Vue from "vue";
import { ClientService } from "@/services/clientService";

export default Vue.extend({
  name: "Clients",
  data() {
    return {
      search: "",
      rowsPerPageItems: [20, 50, 100],
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
      data: ClientService.getClients(),
    };
  },
});
