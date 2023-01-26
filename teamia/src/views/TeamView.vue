<script setup>
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";

import { useTeamStore } from "@/stores/teamStore.js";
let team = useTeamStore();

team.seed();
</script>

<template>
  <TeamHeader />

  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembers />
  </div>

  <TeamFooter />
</template>
