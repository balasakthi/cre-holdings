<template>
  <div class="relative">
    <Carousel
      v-if="carouselImages.length"
      v-bind="carouselConfig"
      class="shadow-lg overflow-hidden"
    >
      <Slide
        class="transition ease-in-out delay-150 duration-1000"
        v-for="(carouselImage, index) in carouselImages"
        :key="index"
      >
        <div
          class="absolute bottom-6 md:bottom-10 lg:bottom-20 backdrop-blur-sm bg-black/10 text-white w-72 md:w-auto"
        >
          <h1
            class="text-xl md:text-2xl lg:text-3xl p-2 md:p-4 lg:p-6 text-center"
          >
            We Create Exceptional Value in Real Estate
          </h1>
        </div>
        <img
          class="w-full object-cover h-[400px] md:h-[550px] xl:h-[650px]"
          :src="carouselImage"
          :alt="`gallery image - ${index + 1}`"
          loading="lazy"
        />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

const props = defineProps({
  carouselImages: {
    type: Array,
    required: true,
  },
});

const carouselConfig = {
  autoplay: 4000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
};
</script>
