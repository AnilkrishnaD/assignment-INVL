<template>
  <UserListComponent :users="users" />
</template>
<script setup>
import { ref, computed, onMounted } from "vue";

import { useStore } from "vuex";

import UserListComponent from "../components/UserList.vue";
const store = useStore();

console.log(store);
const users = computed(() => store.state.users.users);

console.log(users.value);
// Dispatch home module action
const fetchUsers = () => store.dispatch("users/fetchUsers");

onMounted(() => {
  fetchUsers();
});
</script>
<style lang="css"></style>
