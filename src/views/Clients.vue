<template>
  <clients-view />
</template>

<script lang="ts">
import Vue from "vue";
import ClientsView from "../components/Clients.vue";

export default Vue.extend({
  name: "Clients",

  components: {
    ClientsView,
  },
});
</script>
