<script setup lang="ts">
import SButton from '@/reusable/SButton/SButton.vue'
import HireMeModal from '../shared/HireMeModal.vue';
import { toggleDark,isDark } from '../../composables/dark'
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline';
import type { ICategory } from '@/types/category';
const modalIsOpen = ref(false)

const categories = computed(() => [
  {
    id: 1,
    value: 'web',
    name: 'Web Application'
  },
  {
    id: 2,
    value: 'mobile',
    name: 'Mobile Application'
  },
  {
    id: 3,
    value: 'ui-ux',
    name: 'UI/UX Design'
  },
  {
    id: 4,
    value: 'branding',
    name: 'Branding & Anim'
  }
])

function showModal() {
  modalIsOpen.value = true
}
</script>
<template>
  <nav id="nav" class="container sm:mx-auto">
    <!-- Header start -->
    <div
      class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"
    >
      <!-- Header menu links and small screen hamburger menu -->
      <div class="flex justify-between items-center px-4 sm:px-0">
        <!-- Header logos -->
        <div>
          <router-link
            to="/"
            class="flex items-center text-2xl font-general-medium text-primary-dark dark:text-ternary-light"
          >
            <h5>Tanimur</h5>
          </router-link>
        </div>

        <!-- Theme switcher small screen -->
      
        <div class="md:hidden">
          <button
            class="icon-btn mx-2 !outline-none bg-slate-100 px-2 py-1"
            title="button.toggle_dark"
            @click="toggleDark()"
          >
           <span class="sr-only">toggle Dark Mode</span>
            
            <SunIcon v-if="isDark" class="h-4 w-4 fill-current text-yellow-200 dark:text-yellow-50" />
            <MoonIcon
              v-else
              class="h-4 w-4 fill-current text-secondary-dark dark:text-black"
            />
          </button>
        </div>
        <!-- Small screen hamburger menu -->
        <div class="sm:hidden">
          <button
            @click="modalIsOpen = !modalIsOpen"
            type="button"
            class="focus:outline-none"
            aria-label="Hamburger Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
            >
              <path
                v-if="modalIsOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                clip-rule="evenodd"
              ></path>
              <path
                v-if="!modalIsOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Header links -->
      <AppHeaderLinks :showModal="showModal" :isOpen="modalIsOpen" />

      <!-- Header right section buttons -->
      <div class="hidden sm:flex justify-between items-center flex-col md:flex-row">
        <!-- Hire me button -->
        <div class="hidden md:block">
          <SButton variant="primary" @click="showModal()"> Hire Me </SButton>
        </div>

        <!-- Theme switcher large screen -->
        <div class="hidden md:block pl-6">
          <button
            class=" mx-2 !outline-none bg-slate-100 dark:bg-gray-900 px-4 py-3 rounded-lg"
            title="button.toggle_dark"
            @click="toggleDark()"
          >
           <span class="sr-only">toggle Dark Mode</span>
            
            <SunIcon v-if="isDark" class="h-6 w-6  text-yellow-200 " />
            <MoonIcon
              v-else
              class="h-6 w-6  text-secondary-dark d"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Hire me modal -->
    <HireMeModal
    :open="modalIsOpen"
    :categories="categories"
    @close="modalIsOpen = false"
     
  />
  </nav>
</template>
<style scoped></style>
