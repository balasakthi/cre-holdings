<script setup lang="ts">
const carouselImages = [
  "/images/carousel/image1.webp",
  "/images/carousel/image2.webp",
  "/images/carousel/image3.webp",
  "/images/carousel/image4.webp",
];
const { data: home } = await useAsyncData(() =>
  queryCollection("content").path("/").first(),
);

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
});
</script>

<template>
  <ImageCarousel :carouselImages="carouselImages" :isHero="true" />
  <ContentRenderer :value="home" />
  <Features />
</template>
