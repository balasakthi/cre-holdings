<template>
  <section>
    <ContentRenderer :value="page" />
  </section>
  <section class="bg-white">
    <div
      class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
    >
      <div class="font-light text-gray-500 sm:text-lg">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          About us
        </h2>
        <p class="mb-4">
          CRE Holdings, LLC was founded by John Rodgers. John initially began
          his career as a commercial real estate broker and established a
          well-recognized and successful boutique commercial real estate
          brokerage firm in Colorado Springs, Peak Commercial Properties, which
          he has since exited. As a Broker, John was exposed to real estate
          cycles early in his career, and was able to work and represent some of
          the most successful investors in Southern Colorado. With these
          valuable experiences, John started practicing what he preached by
          investing in Commercial Real Estate and later establishing CRE
          Holdings, LLC.
        </p>
        <p>
          CRE Holdings, LLC thrives because of their nimble team, strategic
          relationships, experience vendors and management philosophy.
        </p>
      </div>
      <div class="mt-8">
        <img
          class="w-full rounded-lg"
          src="/images/portfolio/talamine.webp"
          alt="office content 1"
        />
      </div>
    </div>
  </section>

  <Features />
</template>

<script setup>
const { data: page } = await useAsyncData(() =>
  queryCollection("content").path("/about").first(),
);

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
});
</script>
