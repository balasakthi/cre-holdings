<template>
  <section>
    <ContentRenderer :value="page" />
    <section class="bg-white">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900"
        >
          Contact Us
        </h2>
        <p
          class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl"
        >
          Need details about our Business plan? Let us know.
        </p>
        <form action="#" class="space-y-8">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Your email</label
            >
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 outline-0"
              placeholder="name@email.com"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Subject</label
            >
            <input
              type="text"
              id="subject"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 outline-0"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Your message</label
            >
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 outline-0"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-3xl bg-primary-500 sm:w-fit hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            Send message
          </button>
        </form>
      </div>
    </section>

    <section class="bg-white mt-8">
      <div class="mx-auto px-6 max-w-screen-xl">
        <iframe
          class="h-96 w-full rounded-3xl shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.2934676993273!2d-104.82460378929925!3d38.8715270481135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87134ff3522e0f93%3A0x90fa2637fa3cc056!2zMjcyNyBOIENhc2NhZGUgQXZlLCBDb2xvcmFkbyBTcHJpbmdzLCBDTyA4MDkwNywg4K6Q4K6V4K-N4K6V4K6_4K6vIOCuruCuvuCuqOCuv-CusuCumeCvjeCuleCus-CvjQ!5e0!3m2!1sta!2sin!4v1740939984144!5m2!1sta!2sin"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
          aria-label="Google Map showing the location of CRE Holdings"
        ></iframe>
      </div>
    </section>
  </section>
</template>

<script setup>
const { data: page } = await useAsyncData(() =>
  queryCollection("content").path("/contact").first(),
);

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
});
</script>
