export default {
  template: `
  <section v-if="assignments.length">
        <h3 class="font-bold text-2xl mb-4">{{ title }}</h3>
        <hr />
        <ul :class="{
            'text-xl font-semibold': true,
            'text-slate-500': color === 'blue',
            'text-green-600': color === 'green',
        }">
          <li v-for="(assignment) in assignments" :key="assignment.id">
            <label>
              <input type="checkbox" v-model="assignment.complete" />

              {{ assignment.name }}
            </label>
          </li>
        </ul>
      </section>`,

  props: {
    assignments: Array,
    title: String,
    color: {
      type: String,
      default: "blue",
    },
  },
};
