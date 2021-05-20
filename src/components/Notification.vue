<template>
  <div class="notification">
    <a href="#">
      <div class="notBtn" href="#">
        <v-badge :content="messages" :value="messages" color="green" overlap>
          <v-icon large class="shift-bell"> mdi-bell-outline </v-icon>
        </v-badge>
        <div class="box">
          <div class="display">
            <div class="message">
              <div
                class="section new"
                v-for="(notification, index) in notifications"
                :key="index"
              >
                <a href="#">
                  <div @click="markMessageAsRead(notification.id)">
                    {{ notification.message }}
                  </div>
                  <div class="txt sub">{{ notification.timestamp }}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
<script lang="ts" src="./scripts/notification.ts"></script>
<style scoped src="./stylesheets/notification.css"></style>
