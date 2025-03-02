<template>
  <div
    role="status"
    class="flex flex-items items-center justify-center bg-gray-300 w-full animate-pulse"
    :class="isHero ? 'h-[350px] md:h-[500px] xl:h-[700px]' : 'absolute h-full '"
  >
    <Icon
      class="text-gray-400 animate-spin"
      name="mdi:loading"
      size="60"
      aria-hidden="true"
    ></Icon>
    <span class="sr-only">Loading...</span>
  </div>
</template>

<script setup>
const props = defineProps({
  isHero: Boolean,
});
</script>
