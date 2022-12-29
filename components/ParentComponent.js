import ChildComponent from "./ChildComponent.js";

export default {
  template: `
  <div>
  <h1>This is a parent component</h1>
  <p>
    if you try to click that button below, which is came from a child
    component, it gets triggered by $emit
  </p>
  <ChildComponent @boom="boom">{{ btn }}</ChildComponent>
  </div>
  `,

  methods: {
    boom() {
      this.$emit("boom");
      console.log("Boom Baam Boom 💥💥💥");
      this.btn = "💣💣💣";
    },
  },

  data() {
    return {
      btn: "Boom Baam Boom 💥💥💥",
    };
  },

  components: {
    ChildComponent,
  },
};
