<script setup>
import TeamMember from "@/components/Teams/TeamMember.vue";
import { useTeamStore } from "@/stores/teamStore.js";
let team = useTeamStore();
</script>

<template>
  <table class="my-3 table-fixed border-spacing-y-2 border-separate">
    <thead>
      <th class="text-left">Name & Email</th>
      <th class="text-left">Status</th>
    </thead>
    <tbody>
      <TeamMember
        v-for="member in team.members"
        :name="member.name"
        :email="member.email"
        :status="member.status"
      />
    </tbody>
  </table>

  <p
    class="text-right text-red-400 font-medium italic"
    v-show="team.members.length >= team.spots"
  >
    There are no remaining team spots. Upgrade to add more.
  </p>
</template>
