<script lang="ts">
export default {
	props: {
		select: {
			type: String,
			default: 'projects',
			required: true,
		},
		selectOptions: {
			type: Array,
			default: () => [
				'Web Application',
				'Mobile Application',
				'UI/UX Design',
				'Branding & Anim',
			],
		},
	},
};
</script>

<template>
	  <select
	  @change="$emit('filter', ($event.target as HTMLSelectElement)?.value)"
    :name="select"
    :id="select"
    class="font-general-medium
      sm:px-8
	  px-4
      py-2
      border-1 border-gray-200
      dark:border-secondary-dark
      rounded-lg
      text-sm
      sm:text-md
      bg-white/90
      dark:bg-ternary-dark
      text-primary-dark
      dark:text-white"
  >
		<option value class="text-sm sm:text-md">All Projects</option>
		<option
			v-for="option in selectOptions"
			:key="(option as any)"
			:value="option"
			class="sm:text-md"
		>
			{{ option }}
		</option>
	</select>
</template>

<style lang="scss" scoped></style>
