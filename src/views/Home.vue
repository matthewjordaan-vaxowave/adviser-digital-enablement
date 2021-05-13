<template>
  <div class="home">
    <nav-bar />
    <menu-bar />
    <main-app-area />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue";
import MenuBar from "@/components/MenuBar.vue";
import MainAppArea from "@/components/MainAppArea.vue"; // @ is an alias to /src

@Component({
  components: {
    MainAppArea,
    MenuBar,
    NavBar,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
  .home {
    width: 100%;
    height: 100%;
  }
</style>