import AssignmentList from "./AssignmentList.js";

export default {
  template: `
    <h1 class="text-4xl text-center font-bold text-green-600">VUE TODO  <small>v2</small></h1>

      <section>
        <form
          class="flex flex-row gap-2 justify-between"
          @submit.prevent="addNewTodo"
        >
          <input
            type="text"
            id="first_name"
            class="bg-slate-700 text-slate-200 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 shrink text-xl outline-none transition-all"
            placeholder="What's you're gonna do next?"
            required
            v-model="newTodo"
          />
          <button
            type="submit"
            class="shrink-0 text-4xl align-middle bg-green-700 text-white rounded-lg p-3"
          >
            +
          </button>
        </form>

        <!-- Default Text -->
        <p
          class="font-bold text-2xl text-gray-700 my-5 text-center"
          v-if="!filters.inProgress.length"
        >
          You don't have any todo yet. Create new!
        </p>
      </section>

      <!-- Assignments In Progress -->
        <assignment-list :assignments="filters.inProgress" title="Assignments In Progress"/>
        
      <!-- Completed Todos -->
        <assignment-list :assignments="filters.completed" color='green' title="Completed Assignments"/>
      `,

  data() {
    return {
      newTodo: "",
      todos: [],
      id: 0,
    };
  },

  methods: {
    addNewTodo() {
      this.todos.push({
        id: this.id++,
        name: this.newTodo,
        complete: false,
      });

      // Clear the input after submit
      this.newTodo = "";
    },
  },

  computed: {
    filters() {
      return {
        inProgress: this.todos.filter((todo) => !todo.complete),

        completed: this.todos.filter((todo) => todo.complete),
      };
    },
  },

  components: {
    AssignmentList,
  },
};
