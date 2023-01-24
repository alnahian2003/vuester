import { defineStore } from "pinia";

export const useTeamStore = defineStore("team", {
  state: () => ({
    name: "Teamia",
    spots: 0,
    members: [],
  }),

  actions: {
    // Import/fetch data from api or somewhere
    seed() {
      import("@/team.json").then((res) => {
        this.$state = res.default;
      });
    },
  },

  getters: {
    spotsAvailable() {
      return this.members.length >= this.spots;
    },

    // Number of spots left
    spotsLeft() {
      let available = this.spots - this.members.length;
      return available > 0 ? available : "No";
    },
  },
});
