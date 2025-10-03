<script setup>
const props = defineProps({
  title: String,
  value: String,
  modelValue: String,
  id: String
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="btn-group" role="group">
    <input
      type="radio"
      class="btn-check"
      :id="id"
      :value="value"
      :checked="modelValue === value"
      @change="$emit('update:modelValue', value)"
    />
    <label class="btn btn-outline-secondary rounded-pill me-2" :for="id">
      {{ title }}
    </label>
  </div>
</template>


<style scoped>
.btn {
  padding: 0.5rem 1rem;
  font-weight: 500;
  border-width: 1.5px;
  transition: all 0.2s ease-in-out;
  font-size: 1.3rem;
}

.btn-check:checked + .btn {
  background-color: #dbeafe;
  color: #1d4ed8;
  border-color: #dbeafe;
}

.btn-check:checked + .btn::before {
  content: "✓ ";
  font-weight: bold;
}

.btn:hover {
  background-color: #f0f9ff;
  border-color: #93c5fd;
  color: #1e3a8a;
  cursor: pointer;
}
</style>
