<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="max-w-screen-md mb-8 lg:mb-16">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          Why CRE Holdings
        </h2>
      </div>
      <div
        class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"
      >
        <div v-for="feature in features" :key="feature.title">
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <Icon
              class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6"
              :name="feature.icon"
              size="28"
              aria-hidden="true"
            ></Icon>
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            {{ feature.title }}
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const heading = ref("Why CRE Holdings");

const features = ref([
  {
    title: "Capital capacity",
    description:
      "Regardless of the cycle, the deal size or the complexities involved, CRE Holdings has the capital capacity to close without lender involvement.",
    icon: "mdi:cash-multiple",
  },
  {
    title: "Property issues",
    description:
      "CRE Holdings has the ability to close where others may not: Negative cash flow, 100% vacancy",
    icon: "mdi:alert-circle-outline",
  },
  {
    title: "Environmental issues",
    description: "Extensive CAPX required for redevelopment",
    icon: "mdi:sprout",
  },
  {
    title: "Close quickly",
    description:
      "CRE Holdings has the ability to take abnormal risks and can close quickly with limited due diligence.",
    icon: "mdi:progress-close",
  },

  {
    title: "Complex Estates",
    description:
      "CRE Holdings strategic relationships enable them to complete transactions that are more complicated and require more creativity than normal for large estates, complex tax planning, etc.",
    icon: "mdi:sign-real-estate",
  },
  {
    title: "Two Decision Makers",
    description:
      "There are only two decision-makers involved to make strategic decisions, no boards, no bankers, no investors, etc.",
    icon: "mdi:handshake",
  },
]);
</script>
