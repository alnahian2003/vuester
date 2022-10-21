export default {
  template: `<button :class="{
    'text-white px-4 py-3 text-xl rounded': true,

    'bg-[#25925f] hover:bg-green-700': type === 'primary',
    
    'bg-indigo-600 hover:bg-indigo-700': type === 'secondary',

    'bg-gray-500 hover:bg-gray-300': type === 'muted',
  }"><slot/></button>`,

  props: {
    type: {
      type: String,
      default: "primary",
    },
  },
};
