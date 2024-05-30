<template>
  <input
    type="text"
    v-model="query"
    @input="emitSearch"
    placeholder="Search..."
  />
</template>

<script setup>
import { defineExpose, defineProps, defineEmits, ref, computed } from "vue";

const query = ref("");
const emit = defineEmits(["search"]);

function emitSearch() {
  emit("search", query.value);
}
</script>

<style scoped>
input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
</style>
