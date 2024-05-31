<template>
  <UserListComponent :users="users" />
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import UserListComponent from "../components/UserList.vue";

// Access the store
const store = useStore();

// computed properties
const users = computed(() => {
  console.log("Current users:", store.state.users);
  return store.state.users;
});

// fetching users
const fetchUsers = () => store.dispatch("fetchUsers");

watch(users, (newValue, oldValue) => {
  console.log(newValue, oldValue);
});

// on mounted hook
onMounted(() => {
  fetchUsers();
});
</script>

<style lang="css"></style>
