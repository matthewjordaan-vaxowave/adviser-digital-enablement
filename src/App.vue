<template>
  <v-app>
    <v-app-bar app clipped-left color="#301934" dark>
      <img src="./assets/omlogo.png" width="45px">
      <div class="dropdown">
        <button class="dropbtn" @click="displayAdvisorLinks">
          Adviser portal
          <span class="arrow down"></span>
        </button>
        <div class="dropdown-content" v-if="showAdvisorLinks" id="advisor">
          <a href="#" v-for="(link, index) in externalLinks" :key="link.title"
            >{{ link.title }}
            <hr class="hr-format" v-if="index != externalLinks.length - 1" />
          </a>
        </div>
      </div>
      <v-spacer></v-spacer>
      <notification />
      <div class="dropdown" style="margin-left: 1em">
        <button class="dropbtn" @click="displayProfileLinks">
          <v-icon>mdi-account-circle-outline</v-icon
          ><label>{{ this.currentUser }}</label
          ><span class="arrow down"></span>
        </button>
        <div class="dropdown-content" v-if="showProfileLinks" id="profile">
          <a href="#" v-for="(link, index) in profileLinks" :key="link.title"
            >{{ link.title }}<v-icon>{{ link.icon }}</v-icon>
            <hr class="hr-format" v-if="index != profileLinks.length - 1" />
          </a>
        </div>
      </div>
    </v-app-bar>
    <v-navigation-drawer app clipped color="#D3D3D3" width="7%" height="100%">
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.path"
        >
          <v-list-item-content>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Notification from "./components/Notification.vue";
export default Vue.extend({
  name: "App",
  components: {
    Notification,
  },
  data() {
    return {
      items: [
        {
          title: "Dashboard",
          icon: "mdi-home",
          path: "/Dashboard",
        },
        { title: "Clients", icon: "mdi-account", path: "/Clients" },
      ],
      externalLinks: [
        { title: "Gateway" },
        { title: "CSI" },
        { title: "Wealth Portal" },
        { title: "OM protect" },
        { title: "XPlan" },
        { title: "MyClient" },
      ],
      profileLinks: [{ title: "Profile" }, { title: "Logout" }],
      showAdvisorLinks: false,
      showProfileLinks: false,
      currentUser: "John Kani",
    };
  },
  methods: {
    displayAdvisorLinks() {
      this.showAdvisorLinks = !this.showAdvisorLinks;
      var element = document.getElementById("advisor");
      if (element) {
        element.style.display = "block";
      }
    },
    displayProfileLinks(): void {
      this.showProfileLinks = !this.showProfileLinks;
      var element = document.getElementById("profile");
      if (element) {
        element.style.display = "block";
      }
    },
  },
});
</script>
<style scoped>
/*Dropdown Button */
.dropbtn {
  border: 2px solid white;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  height: 3em;
}
.arrow {
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin-left: 2em;
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

/* div for drop down content */
.dropdown {
  position: relative;
  display: inline-block;
  margin-left: 5em;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  position: absolute;
  background-color: white;
  color: black;
  width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* drop down links*/
.dropdown-content a {
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  color: black;
}

.hr-format {
  background-color: lightgray;
  border: none;
  height: 1px;
}

/* Change color of links on hover */
.dropdown-content a:hover {
  background-color: #f1f1f1;
}
</style>
