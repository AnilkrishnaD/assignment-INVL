<!-- src/App.vue -->
<template>
  <RouterView />
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const message = computed(() => store.state.message);

console.log(store, "store");

function changeMessage() {
  store.commit("setMessage", "New Message!");
}
</script>
