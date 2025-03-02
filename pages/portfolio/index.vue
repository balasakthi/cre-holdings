<template>
  <section>
    <ContentRenderer v-if="portfolio" :value="portfolio" />

    <section
      class="my-16 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-xl items-center mx-auto"
    >
      <div v-for="portfolio in portfolios" :key="portfolio.id">
        <NuxtLink
          :to="portfolio.meta.path"
          class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:max-w-xl hover:bg-gray-100 overflow-hidden"
        >
          <img
            class="object-cover w-full rounded-t-lg h-64"
            :src="portfolio.meta.baseImageUrl + portfolio.cover"
            :alt="`Aerial view of ${portfolio.title}`"
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {{ portfolio.title }}
            </h5>
            <p class="mb-3 font-normal text-gray-700">
              {{ portfolio.location }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
const { data: portfolio } = await useAsyncData(() =>
  queryCollection("content").path("/portfolio").first(),
);

const { data: portfolios } = await useAsyncData("portfolio", () => {
  return queryCollection("portfolio").order("title", "ASC").all();
});

useSeoMeta({
  title: portfolio.value?.title,
  description: portfolio.value?.description,
});
</script>
