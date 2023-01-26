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
    <template #body></template>
  </Modal>

  <TeamHeader @add="showModal = true" />

  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembers />
  </div>

  <TeamFooter />
</template>
