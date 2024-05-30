<template>
  <div class="user-list">
    <SearchBar @search="filterUsers" />
    <DataTable :value="filteredUsers" :paginator="true" :rows="10">
      <Column field="id" header="ID"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="email" header="Email"></Column>
      <Column field="address.city" header="City"></Column>
    </DataTable>
    <Paginator :totalRecords="totalRecords" :rows="10" @page="paginateUsers" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Paginator from "primevue/paginator";
import SearchBar from "./common/SearchBar.vue"; // Assuming you have a SearchBar component

const props = defineProps({
  users: Array,
});

const filteredUsers = ref([]);
const totalRecords = ref(props.users.length);
const currentPage = ref(1);

function filterUsers(query) {
  const lowerCaseQuery = query.toLowerCase();
  filteredUsers.value = props.users.filter((user) =>
    Object.values(user).some((val) =>
      String(val).toLowerCase().includes(lowerCaseQuery)
    )
  );
  paginateUsers(currentPage.value);
}

function paginateUsers(page) {
  currentPage.value = page;
  const start = (page - 1) * 10;
  const end = start + 10;
  filteredUsers.value = props.users.slice(start, end);
  totalRecords.value = props.users.length;
}
</script>

<style scoped>
.user-list {
  padding: 20px;
}
</style>
