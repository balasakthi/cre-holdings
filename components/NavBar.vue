<template>
  <header>
    <nav
      class="backdrop-blur-sm bg-opacity-90 fixed w-full z-20 top-0 start-0 transition-all duration-500"
      :class="isScrolled ? 'bg-white shadow-md' : 'bg-transparent'"
      aria-label="Main Navigation"
    >
      <div
        class="max-w-full flex items-center justify-between mx-auto px-2 md:px-5 py-4"
      >
        <NuxtLink to="/" class="flex items-center" aria-label="Go to Home">
          <img
            :src="isScrolled ? '/logo/cre-blue-gray.png' : '/logo/cre-dark.png'"
            class="ml-2 h-14 object-cover"
            alt="Logo of CRE Holdings"
            loading="lazy"
          />
        </NuxtLink>

        <div class="hidden lg:flex items-center justify-center space-x-8">
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
          >
            <li
              class="relative py-2 px-3 md:p-0"
              :class="isScrolled ? 'text-gray-900' : 'text-white'"
              v-for="menu in navBarMenu"
              :key="menu.title"
            >
              <NuxtLink
                :class="
                  menu.title === 'Contact'
                    ? 'text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-200 font-medium rounded-3xl text-sm px-4 py-2 text-center'
                    : isScrolled
                      ? isActive(menu.route)
                        ? 'text-primary-500'
                        : 'text-gray-900 hover:text-primary-500'
                      : 'text-white hover:text-primary-500'
                "
                :to="menu.route"
                >{{ menu.title }}</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div
          class="lg:hidden flex items-center align-center justify-center gap-5"
        >
          <button
            type="button"
            class="text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm p-3 text-center inline-flex items-center me-2 my-3"
            aria-expanded="false"
            aria-controls="drawer-navigation"
            @click="toggleDrawer"
          >
            <Icon size="30" name="mdi:menu-open" aria-hidden="true"></Icon>
            <span class="sr-only">Open main menu</span>
          </button>
        </div>
      </div>
    </nav>

    <aside
      id="drawer-navigation"
      :inert="!isDrawerOpen"
      class="backdrop-blur-sm bg-opacity-90 fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform duration-300 bg-white w-72"
      :class="isDrawerOpen ? 'translate-x-0' : '-translate-x-full'"
      tabindex="-1"
      aria-labelledby="drawer-navigation-label"
    >
      <div class="flex items-center gap-4">
        <img
          class="w-10 h-10"
          src="/logo/cre-blue-gray.png"
          alt="Logo of CRE Holdings"
          loading="lazy"
        />
        <div class="font-medium">
          <div>CRE</div>
          <div class="text-sm text-gray-500">Holdings</div>
        </div>
      </div>

      <hr class="mt-4" />

      <button
        type="button"
        @click="toggleDrawer"
        aria-controls="drawer-navigation"
        class="text-gray-500 bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center"
      >
        <Icon size="40" name="mdi:close" aria-hidden="true"></Icon>

        <span class="sr-only">Close menu</span>
      </button>
      <div class="py-4 overflow-y-auto">
        <ul class="space-y-2 font-medium">
          <li v-for="menu in navBarMenu" :key="menu.title">
            <NuxtLink
              class="flex items-center p-2 text-gray-900 rounded-lg group"
              :class="
                isActive(menu.route)
                  ? 'text-primary-500 bg-primary-100/40 '
                  : 'hover:bg-gray-300/40 '
              "
              :to="menu.route"
              @click="toggleDrawer"
            >
              <Icon
                class="text-gray-500 transition duration-75"
                :class="isActive(menu.route) ? 'text-primary-500 ' : ''"
                size="23"
                :name="menu.icon"
                aria-hidden="true"
              >
              </Icon>
              <span class="ms-3">{{ menu.title }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </aside>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const route = useRoute();
const isDrawerOpen = ref(false);
const isScrolled = ref(false);

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};

const navBarMenu = [
  { title: "Home", route: "/", icon: "mdi:home-outline" },
  { title: "Portfolio", route: "/portfolio", icon: "mdi:home-city-outline" },
  { title: "About", route: "/about", icon: "mdi:information-outline" },
  { title: "Contact", route: "/contact", icon: "mdi:account-circle-outline" },
];

const isActive = (routePath) => route.path === routePath;

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
