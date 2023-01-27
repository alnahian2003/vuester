<script setup>
import Modal from "../Modal.vue";
import { useTeamStore } from "@/stores/teamStore.js";
import { ref, reactive } from "vue";
import sample from "lodash/sample"; // to get a random element from collection

let team = useTeamStore();

let showModal = ref(false);

const form = reactive({
  name: "",
  email: "",
  status: sample(["Active", "Inactive", "Busy"]),
});

// Pretend adding a new member

/* KNOWN ISSUE: Adds the same input over and over again */
const addMember = () => {
  if (form.name && form.email) {
    team.members.push(form);
  } else {
    alert("Add your team member details first");
  }
};
</script>

<template>
  <div>
    <button
      @click="showModal = true"
      class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
      :disabled="team.spotsUnavailable"
    >
      Add Member ({{ team.spotsLeft }} Spots Left)
    </button>
  </div>

  <Teleport to="body">
    <Modal :show="showModal" @close="showModal = false">
      <template #head>Add a new team member</template>
      <template #body>
        <form @submit.prevent="addMember">
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Name</label
              >
              <input
                type="text"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="John Doe"
                v-model="form.name"
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Email address</label
              >
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="example@email.com"
                v-model="form.email"
              />
            </div>
          </div>
          <button
            type="submit"
            @click="showModal = false"
            class="text-white bg-green-600 hover:bg-green-700 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </template>
    </Modal>
  </Teleport>
</template>
