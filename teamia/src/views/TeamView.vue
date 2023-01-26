<script setup>
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import Modal from "../components/Modal.vue";

import { useTeamStore } from "@/stores/teamStore.js";
import { ref } from "vue";
let team = useTeamStore();

team.seed();

let showModal = ref(false);
</script>

<template>
  <Modal :show="showModal" @close="showModal = false">
    <template #head>Add a new team member</template>
    <template #body>
      <form @submit.prevent>
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
              required
              autofocus
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
              required
            />
          </div>
        </div>
        <button
          type="submit"
          class="text-white bg-green-600 hover:bg-green-700 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </template>
  </Modal>

  <TeamHeader @add="showModal = true" />

  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembers />
  </div>

  <TeamFooter />
</template>
