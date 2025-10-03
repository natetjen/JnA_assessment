<template>
  <div class="card overlay-card text-white">
    <!-- Background image -->
    <img :src="image" alt="Card background" class="card-bg" />

    <!-- Overlay content -->
    <div class="card-content d-flex flex-column justify-content-end">
      <!-- Category / Tag -->
      <large class="fw-semibold d-flex align-items-center mb-2">
        <i class="bi bi-lightbulb me-2 fs-3 ms-3"></i>
        {{ category }} • Resources
      </large>

      <!-- Title -->
      <h5 class="card-title ms-3 mb-4">
        <slot name="title">{{ title }}</slot>
      </h5>

      <!-- Actions -->
      <div class="actions position-absolute top-0 end-0 m-4 d-flex">
        <button
          class="icon-btn me-2"
          @click="toggleBookmark"
        >
          <i
            :class="[
              'bi',
              isBookmarked ? 'bi-bookmark-fill text-success' : 'bi-bookmark text-white'
            ]"
          ></i>
        </button>

        <button class="icon-btn">
          <i class="bi bi-three-dots-vertical text-white"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import defaultImage from '../../assets/one.jpg'

defineProps({
  title: { type: String, default: 'Title' },
  category: { type: String, default: 'Category' },
  image: { type: String, default: defaultImage }
})

const isBookmarked = ref(false)
const toggleBookmark = () => {
  isBookmarked.value = !isBookmarked.value
}
</script>

<style scoped>
.overlay-card {
  height: 300px;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  color: white;
}

/* Background image behind everything */
.card-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6;
  z-index: 1;
}

/* Content overlay */
.card-content {
  position: relative;
  z-index: 2;
  height: 100%;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0));
}

/* Custom flat icon button */
.icon-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(0, 40, 60, 0.9); /* bluish dark background */
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.icon-btn i {
  font-size: 1.2rem;
}

.icon-btn:hover {
  background: rgba(0, 100, 160, 0.9); /* lighter bluish background */
  transform: scale(1.1); /* slightly bigger */
  color: #00ffcc; /* make the icon pop */
}

.card-title{
  font:Roboto;
  font-size:25px
}

</style>
