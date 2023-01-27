import { defineStore } from "pinia";

export const useTeamStore = defineStore("team", {
  state: () => ({
    name: "Teamia",
    spots: 0,
    members: [],
  }),

  actions: {
    // Import/fetch data from api or somewhere
    async seed() {
      let res = await import("@/team.json");
      this.$state = res.default;
    },

    // Pretend to add new team member to `members` array
    add(data) {
      if (!this.spotsUnavailable) {
        return this.members.push(data);
      } else {
        alert("No spots available"); // little validation incase the user bypass disabling the button
      }
    },
  },

  getters: {
    // Determine if any spots available
    // @return boolean
    spotsUnavailable() {
      return this.members.length >= this.spots;
    },

    // Number of spots left
    // @return boolean|string
    spotsLeft() {
      let available = this.spots - this.members.length;
      return available > 0 ? available : "No";
    },
  },
});
