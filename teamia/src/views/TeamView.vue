<script setup>
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";

import { useTeamStore } from "@/stores/teamStore.js";
import { ref } from "vue";
let team = useTeamStore();

team.seed();

let showModal = ref(false);
</script>

<template>
  <TeamHeader />

  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembers />
  </div>

  <TeamFooter />
</template>
