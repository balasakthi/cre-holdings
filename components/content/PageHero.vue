<template>
  <header class="relative pb-8" aria-label="Hero Section">
    <section class="max-w-full mx-auto overflow-hidden shadow-lg">
      <figure class="relative" v-if="hero.imageUrl">
        <ImageLoader v-if="loading" />

        <img
          :src="hero.imageUrl"
          :alt="hero.imageAlt"
          class="w-full h-[400px] md:h-[500px] xl:h-[600px] object-cover"
          loading="lazy"
          @load="onImageLoad"
          @error="onImageError"
        />

        <figcaption
          class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end items-center text-white text-center pb-8"
        >
          <h1
            class="px-2 pb-16 text-4xl md:text-5xl font-semibold leading-normal"
          >
            {{ hero.title }}
          </h1>
        </figcaption>
      </figure>

      <figure class="relative" v-else>
        <slot>
          <p>Default Page Hero (Please Add Your Content)</p>
        </slot>
      </figure>
    </section>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  hero: {
    type: Object,
    required: true,
  },
});

const loading = ref(true);

const checkImageCache = () => {
  const img = new Image();
  img.src = props.hero.imageUrl;
  img.onload = onImageLoad;
  img.onerror = onImageError;
};

const onImageLoad = () => {
  loading.value = false;
};

const onImageError = () => {
  loading.value = false;
};

onMounted(() => {
  checkImageCache();
});
</script>
