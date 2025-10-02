<template>
  <div class="header d-flex justify-content-between align-items-center mb-3 mt-5">
    <!-- Left side: title + subtitle -->
    <div>
      <h3 class="header-title mb-4">Your Resources</h3>
      <p class="header-subtitle">You may add more or edit your existing resources</p>
    </div>

    <!-- Right side: action icons -->
    <div class="header-actions d-flex align-items-center gap-3">
      <i class="bi bi-pencil"></i>
      <i class="bi bi-plus-lg"></i>
      <i class="bi bi-list-ul"></i>
      <i class="bi bi-arrow-down-up"></i>
    </div>
  </div>
</template>

<style scoped>
.header-title {
  font-weight: 600;
  color: #1d4ed8;
  margin: 0;
  font-size: 2rem;
}

.header-subtitle {
  font-size: 1.25rem;
  color: #6b7280;
  margin: 0;
}

.header-actions i {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background 0.2s ease, color 0.2s ease;
  cursor: pointer;
}

.header-actions i:hover {
  background-color: #dbeafe;
  color: #1d4ed8;
}

</style>
