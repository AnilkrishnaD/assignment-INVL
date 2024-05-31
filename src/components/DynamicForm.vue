<template>
  <form @submit.prevent="handleSubmit">
    <div v-for="(block, index) in blocks" :key="index" class="field">
      <label :for="block.token">
        {{ block.props.title }}
        <span v-if="block.props.required" class="required-star">*</span>
      </label>
      <Input
        :type="block.type"
        v-model="formData[block.token]"
        :placeholder="block.props.placeholder"
        :id="block.token"
        :class="{ 'p-invalid': block.props.required && !formData[block.token] }"
      />
      <small
        v-if="block.props.required && !formData[block.token]"
        class="p-error"
      >
        {{ block.props.title }} is required
      </small>
    </div>
    <Button label="Submit" type="submit" />
  </form>
</template>

<script setup>
import { ref } from "vue";
import { defineProps } from "vue";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

const props = defineProps({
  config: {
    type: Object,
    required: true,
  },
});

const blocks = ref(props.config.blocks);
const formData = ref({});

function handleSubmit() {
  let isValid = true;
  blocks.value.forEach((block) => {
    if (block.props.required && !formData.value[block.token]) {
      isValid = false;
    }
  });

  if (isValid) {
    alert("Form submitted successfully!");
    console.log(formData.value);
  } else {
    alert("Please fill all required fields.");
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.p-error {
  color: red;
}
.p-invalid {
  border-color: red;
}

.required-star {
  color: red;
}

input {
  padding: 8px !important;
}
</style>
