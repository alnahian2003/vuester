export default {
  template: `
  <div>
    <button @click="$emit('boom')"><slot/></button>
  </div>
  `,
};
