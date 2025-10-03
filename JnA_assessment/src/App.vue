<script setup>
import { ref, computed, watch } from 'vue'
import { cards, filterOptions } from './mocks/mockData'
import './components/Lit_components/Card-Lit'
import './components/Lit_components/Filter-Lit'
import './components/Lit_components/Header-Lit'
import Card from './components/Vue_components/Card.vue'
import Filter from './components/Vue_components/Filter.vue'
import Header from './components/Vue_components/Header.vue'

// Control selected filter
const selected = ref('ALL')

const showAll = ref(false)

//Reset showAll upon changing filter
watch(selected, () => {
  showAll.value = false
})

const handleFilterChange = (event) => {
  console.log(event.detail, 'Check this')
  selected.value = event.detail;
}

// Filtering + limiting displayed cards
const filterCards = computed(() => {
  let filtered = selected.value === 'ALL'
    ? cards
    : cards.filter(card => card.category.includes(selected.value)) //Check whether the card's category consist the word on the filter

  return showAll.value ? filtered : filtered.slice(0, 6); //Only showing 6 tiles by default
})

//To listen when toggleBookmark function is executed -> this 'side-effect' function can be used for manipulating the real data or other things.
const handleBookmark = (event) => {
  console.log('Bookmark toggled:', event.detail);
}

</script>

<template>
  <!-- Centered wrapper -->
  <div class="wrap1">
    <div class="wrap2">

      <!-- Header -->
      <!-- Vue format
      <Header />
      -->

       <!-- Lit format -->
      <header-lit
        title="Your Resources"
        subtitle="You may add more or edit your existing resources"
      />

      <!-- Filter buttons -->
        <!-- Reusable Filter component -->
        <!-- Vue format
        <div class="filter_div d-flex flex-wrap mb-2">
          <Filter
            v-for="f in filterOptions"
            :key="f.id"
            :title="f.title"
            :value="f.value"
            :id="f.id"
            v-model="selected"
          />
        -->
        <!-- Lit format -->
        <!-- force it to rerender upon new filter selection due to the weird behavior of the radio -->
        <div class="filter_div_lit d-flex flex-wrap mb-3" :key="selected">
        <filter-lit
          v-for="f in filterOptions"
          :key="f.id"
          :title="f.title"
          :value="f.value"
          :id="f.id"
          :modelValue="selected"
          @filter-toggled="handleFilterChange"
        />
      </div>

      <!-- Card list -->
        <transition-group name="fade" tag="div" class="card-grid">
          <!-- Reusable Card component -->
          <!-- Vue format -->
          <!--
            <Card
              v-for="card in filterCards"
              :key="card.id"
              :title="card.title"
              :category="card.category"
              :image="card.image"
            />
          -->
          <!-- Lit format -->
            <card-lit
              v-for="card in filterCards"
              :key="card.id"
              .title="card.title"
              .category="card.category"
              .image="card.image"
              @bookmark-toggled="handleBookmark"
            />
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
        </transition-group>
    </div>
  </div>
</template>


<style scoped>
.card-grid {
  justify-content:center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 480px));
  gap: 1.2rem;
  width: 100%;
  max-height: calc(100vh - 20%);
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

.filter_div_lit {
  gap: 1rem;
}

.show-more-container {
  display: flex;
  justify-content: center;
  width: 100%;
  grid-column: 1 / -1;
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

 @media (max-width: 768px) {
  .filter_div_lit {
    justify-content: center;
  }

  .card-grid {
  max-height: calc(100vh - 50%);
  overflow-y:auto;
}
 }

</style>
