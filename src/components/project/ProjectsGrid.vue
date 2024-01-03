<template>
	<!-- Projects grid -->
	<section class="pt-10 sm:pt-14  pb-8 mx-auto">
		<!-- Projects grid title -->
		<div class="text-center">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-white"
			>
				{{ projectsHeading }}
			</p>
		</div>

		<!-- Filter and search projects -->
		<div class="sm:mt-10">
			<h3
				class="font-general-regular
					text-center text-secondary-dark
					dark:text-white
					text-md
					sm:text-xl
					font-normal
					mb-4
				"
			>
				Search projects by title or filter by category
			</h3>
			<div
				class="
					flex
					justify-between
					border-b border-white
					dark:border-secondary-dark
					pb-3
					gap-2
				"
			>
				<div class="flex justify-between gap-2">
					<span
						class="
							hidden
							sm:block
							bg-white
							dark:bg-ternary-dark
							p-2.5
							shadow-sm
							rounded-xl
							cursor-pointer
							"
					>
                    <MagnifyingGlassIcon class="text-ternary-dark dark:text-white w-4 h-4"/>
						
					</span>
					<input
						v-model="searchProject"
						class="font-general-medium
						pl-3
						pr-1
						sm:px-4
						py-2
						border-1 border-gray-200
						dark:border-secondary-dark
						rounded-lg
						text-sm
						sm:text-md
						bg-white/90
						dark:bg-ternary-dark
						text-primary-dark
						dark:text-white
						"
						id="name"
						name="name"
						type="search"
					
						placeholder="Search Projects"
						aria-label="Name"
					/>
				</div>
				<ProjectsFilter @filter="selectedCategory = $event" />
			</div>
		</div>

		<!-- Projects grid -->
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"
		>
			<ProjectSingle
				v-for="project in filteredProjects()"
				:key="project.id"
				:project="project"
			/>
		</div>
	</section>
</template>
<script setup lang="ts">
import ProjectsFilter from './ProjectsFilter.vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import { projects } from '@/data/projects';

const projectsHeading = ref('Projects Portfolio');
const selectedCategory = ref('');
const searchProject = ref('');
const projectsData = ref(projects);

const filterProjectsByCategory = () => {
  return projectsData.value.filter((item) => {
    let category =
      item.category.charAt(0).toUpperCase() + item.category.slice(1);
    console.log(category);
    return category.includes(selectedCategory.value);
  });
};

const filterProjectsBySearch = () => {
  if (!searchProject.value) {
    return projectsData.value; // If the search input is empty, return all projects
  }

  let project = new RegExp(searchProject.value, 'i');

  const result = projectsData.value.filter((el) => el.title.match(project));

  return result;
};

const filteredProjects = () => {
  if (selectedCategory.value) {
    return filterProjectsByCategory();
  } else {
    return filterProjectsBySearch();
  }
};

</script>

<style >
    
</style>