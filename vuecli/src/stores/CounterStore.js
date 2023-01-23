import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
    name: "Al Nahian",
  }),

  getters: {
    doubleCount: (state) => state.count * 2,
    remaining: (state) => {
      return 10 - state.count;
    },
  },

  actions: {
    increment() {
      if (this.count < 10) {
        this.count++;
      }
    },
  },
});
