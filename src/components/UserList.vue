<template>
  <div class="user-list">
    <div class="searchbar-button">
      <SearchBar @search="filterUsers" />
      <button class="add-btn" @click="updateShowForm">Add</button>
    </div>
    <DataTable
      :value="paginatedUsers"
      :paginator="true"
      :rows="10"
      :totalRecords="totalRecords"
      @page="paginateUsers"
      showGridlines
      scrollable
      stripedRows
      scrollHeight="350px"
    >
      <Column field="id" header="ID"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="email" header="Email"></Column>
      <Column field="address.city" header="City"></Column>
    </DataTable>
    <Dialog
      header="Add New User"
      v-model:visible="showForm"
      :style="{ width: '50vw' }"
      @hide="showForm.value = false"
    >
      <DynamicForm :config="formConfig" />
    </Dialog>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { defineProps } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Paginator from "primevue/paginator";
import SearchBar from "./common/SearchBar.vue";
import DynamicForm from "./DynamicForm.vue";
import { formConfig } from "../dummyjson";
import Dialog from "primevue/dialog";
import _ from "lodash";

const props = defineProps({
  users: {
    type: Array,
    required: true,
  },
});

const filteredUsers = ref([]);
const paginatedUsers = ref([]);
const totalRecords = ref(props.users.length);
const currentPage = ref(1);
const rowsPerPage = 10;

// show form
const showForm = ref(false);

const updateShowForm = () => {
  showForm.value = true;
};

function filterUsers(query) {
  const lowerCaseQuery = query.toLowerCase();

  filteredUsers.value = _.filter(props.users, (user) =>
    ["name", "username", "email"].some((key) =>
      user[key].toLowerCase().includes(lowerCaseQuery)
    )
  );

  totalRecords.value = filteredUsers.value.length;
  paginateUsers({ first: 0, rows: rowsPerPage });
}

function paginateUsers(event) {
  currentPage.value = event.page;
  const start = event.first;
  const end = start + event.rows;
  paginatedUsers.value = filteredUsers.value.slice(start, end);
}

// this will watch data props and users, triggred when data changes
watch(
  () => props.users,
  (newUsers) => {
    filteredUsers.value = newUsers.slice(0, rowsPerPage);
    paginatedUsers.value = filteredUsers.value.slice(0, rowsPerPage);
    totalRecords.value = newUsers.length;
  },
  { immediate: true }
);
</script>

<style scoped>
.user-list {
  padding: 20px;
}

.searchbar-button {
  display: flex;
  width: 100%;
  gap: 12px;
}

.add-btn {
  padding: 12px !important;
  min-width: 80px;
  max-height: 40px;
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  background-color: green;
  color: white;
  cursor: pointer;
  border: none;
}
</style>
