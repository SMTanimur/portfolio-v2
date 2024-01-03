<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue';
import ProjectsGrid from '@/components/project/ProjectsGrid.vue';
useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "The Vueye home page",
    },
    {
      name: "keywords",
      content: "vueye,template starter,vue.js,vue,vue3",
    },
    {
      name: "robots",
      content: "index,follow",
    },
    {
      hid: "og:title",
      name: "og:title",
      content: "The Vueye home page",
    },
    {
      hid: "og:description",
      name: "og:description",
      content: "Vue template",
    },
    {
      hid: "og:image",
      name: "og:image",
      content:
        "https://github.com/boussadjra/vueye/blob/main/src/assets/img/screenshots/home.png",
    },
    {
      hid: "og:url",
      name: "og:url",
      content: "https://vueye.netlify.app/",
    },
    {
      hid: "og:type",
      name: "og:type",
      content: "website",
    },
    {
      hid: "og:site_name",
      name: "og:site_name",
      content: "Vueye",
    },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "Vueye",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: "Vueye",
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content:
        "https://github.com/boussadjra/vueye/blob/main/src/assets/img/screenshots/home.png",
    },
    {
      hid: "twitter:site",
      name: "twitter:site",
      content: "@vueye",
    },
  ],
});
</script>

<template>
  <main class="container mx-auto">
   <!-- Hero Section -->
   <HeroSection/>
   <ProjectsGrid/>
  </main>
</template>
