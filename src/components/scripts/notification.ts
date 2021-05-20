import Vue from "vue";

export default Vue.extend({
 name:'notification',
 data() {
    return {
      show: false,
      messages: 0,
      notifications: [
        {
          message: "Client XY has a birthday, send birthday wishes.",
          id: 1,
          read: false,
          timestamp: "15 May 2021 - 8:30 am",
        },
        {
          message: "Client XY has a birthday,send birthday wishes",
          id: 2,
          read: false,
          timestamp: "11 May 2021 - 8:30 am",
        },
        {
          message: "Client XY has a birthday,send birthday wishes.",
          read: false,
          id: 3,
          timestamp: "10 May 2021 - 8:30 am",
        },
        {
          message: "Client XY has a birthday,send birthday wishes.",
          read: false,
          id: 4,
          timestamp: "9 May 2021 - 8:30 am",
        },
        {
          message: "Client XY has a birthday,send birthday wishes.",
          id: 5,
          read: false,
          timestamp: "8 May 2021 - 8:30 am",
        },
      ],
    };
  },
  methods: {
    markMessageAsRead(id: number) {
      console.log(id); // need to update the message to read
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.messages = this.notifications.filter((x) => x.read == false).length;
    });
  },
})