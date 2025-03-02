<template>
  {{ props.list }}
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-xl">
    <div>
      <a
        href="/"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:max-w-xl hover:bg-gray-100 overflow-hidden"
      >
        <img
          class="object-cover w-full rounded-t-lg h-96 md:h-auto"
          src="/images/portfolio/Janitell.webp"
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Janitell
          </h5>
          <p class="mb-3 font-normal text-gray-700">
            67,000 SF, Flex/industrial, Colorado Springs
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["list"]);
console.log(props);
</script>
