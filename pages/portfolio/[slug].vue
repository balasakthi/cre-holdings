<script lang="ts" setup>
const route = useRoute();
const path = route.path.substring(route.path.lastIndexOf("/") + 1);

const { data: portfolio } = await useAsyncData(path, () => {
  return queryCollection("portfolio")
    .where("stem", "=", "portfolio/" + path)
    .first();
});

console.log(path, portfolio);
</script>

<template>
  <PageHero
    :hero="{
      imageUrl: portfolio.meta.baseImageUrl + portfolio.cover,
      imageAlt: 'Hero section image of ' + portfolio.title,
      title: portfolio.title,
    }"
  />

  <nav
    class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 mx-auto max-w-screen-xl"
    aria-label="Breadcrumb"
  >
    <ol
      class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
    >
      <li class="inline-flex items-center">
        <NuxtLink
          to="/"
          class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
        >
          Home
        </NuxtLink>
      </li>
      <li>
        <div class="flex items-center">
          <Icon
            class="block mx-1 text-gray-400"
            name="mdi-chevron-right"
            size="28"
            aria-hidden="true"
          ></Icon>

          <NuxtLink
            to="/portfolio"
            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            Portfolio
          </NuxtLink>
        </div>
      </li>
      <li aria-current="page">
        <div class="flex items-center">
          <Icon
            class="block mx-1 text-gray-400"
            name="mdi-chevron-right"
            size="28"
            aria-hidden="true"
          ></Icon>
          <span
            class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
            >{{ portfolio.title }}</span
          >
        </div>
      </li>
    </ol>
  </nav>

  <section class="bg-white">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
          {{ portfolio.title }}
        </h2>
        <p
          class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"
        >
          {{ portfolio.location }}
        </p>
      </div>
    </div>
  </section>

  <section
    class="mb-16 px-2 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-screen-xl items-center mx-auto"
  >
    <img
      v-for="image in portfolio.meta.images"
      :key="image"
      class="object-cover w-full rounded-lg h-96"
      :src="portfolio.meta.baseImageUrl + image"
      :alt="`Aerial view of ${portfolio.title}`"
    />
  </section>
</template>
