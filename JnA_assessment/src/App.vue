<script setup>
import { ref, computed, watch } from 'vue'
import { cards, filterOptions } from './mocks/mockData'
import Card from './components/Card.vue'
import Filter from './components/Filter.vue'
import Header from './components/Header.vue'
import imageOne from './assets/one.jpg'

// Control selected filter
const selected = ref('ALL')

const showAll = ref(false)

//Reset showAll upon changing filter
watch(selected, () => {
  showAll.value = false
})

// Filtering + limiting displayed cards
const filterCards = computed(() => {
  let filtered = selected.value === 'ALL'
    ? cards
    : cards.filter(card => card.category.includes(selected.value)) //Check whether the card's category consist the word on the filter

  return showAll.value ? filtered : filtered.slice(0, 6); //Only showing 6 tiles by default
})
</script>

<template>
  <!-- Centered wrapper -->
  <div class="wrap1">
    <div class="wrap2">

      <!-- Header -->
      <Header />

      <!-- Filter buttons -->
      <div class="filter_div d-flex flex-wrap mb-5">
        <!-- Reusable Filter component -->
        <Filter
          v-for="f in filterOptions"
          :key="f.id"
          :title="f.title"
          :value="f.value"
          :id="f.id"
          v-model="selected"
        />
      </div>

      <!-- Card list -->
        <transition-group name="fade" tag="div" class="card-grid">
          <!-- Reusable Card component -->
          <Card
            v-for="card in filterCards"
            :key="card.id"
            :title="card.title"
            :category="card.category"
            :image="card.image"
          />
        </transition-group>

      <!-- Show more button -->
      <div class="show-more-container" v-if="filterCards.length > 5">
        <button v-if="!showAll" class="show-more-btn" @click="showAll = true">
          <i class="bi bi-chevron-down"></i>
          Show More
        </button>
        <button v-else class="show-more-btn" @click="showAll = false">
          <i class="bi bi-chevron-up"></i>
          Show Less
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 480px));
  gap: 1.5rem;
  width: 100%;
  max-height: calc(100vh - 30%);
  overflow-y:auto;
}

.wrap1 {
  display: flex;
  justify-content: center;
  max-height:100vh;
}

.wrap2 {
  width: 95%;
  max-width: 1500px;
}

.filter_div {
  margin-bottom: 1.5rem;
}

.show-more-container {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  width: 100%;
}

.show-more-btn {
  background: none;
  border: none;
  font-weight: 600;
  color: #0f2c3f;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  transition: color 0.2s ease;
}

.show-more-btn i {
  font-size: 1.2rem;
}

.show-more-btn:hover {
  color: #1d4ed8;
  font-size: 1.25rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

/* TRANSITIONS */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(90px);
}

</style>
