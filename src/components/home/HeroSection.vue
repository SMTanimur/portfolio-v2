
<script setup lang="ts">
import  {ArrowDownCircleIcon}  from '@heroicons/vue/24/outline';
import {isDark} from '@/composables';
</script>

<template>
<section
		class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"
	>
		<!-- Banner left contents -->
		<div class="w-full md:w-1/3 text-left">
			<h1
				class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
			>
				Hi, I am SM Tanimur Rahman
			</h1>
			<p
				class="font-general-medium mt-2 text-lg sm:text-xl  xl:text-2xl text-center sm:text-left leading-none text-gray-400"
			>
				A Full-Stack Developer
			</p>
			<div class="flex justify-center sm:block">
				<a
					download="SM Tanimur Rahman Resume"
					href="https://drive.google.com/file/d/19llCKYmBA1i5g1Ru2xmC4wjHpVVVruyx/view"
					class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-primary-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-primary-50 focus:ring-1 focus:ring-primary-900 hover:bg-primary-500 text-gray-500 hover:text-white duration-500"
					aria-label="Download Resume"
				>
					<ArrowDownCircleIcon class="h-6 w-6 mr-2 "/>
					<span
						class="text-sm sm:text-lg font-general-medium duration-100"
						>Download CV</span
					></a
				>
			</div>
		</div>

		<!-- Banner right illustration -->
		<div class="w-full md:w-2/3 text-right float-right">
			<img
				v-if="isDark"
				src="@/assets/images/developer-dark.svg"
				alt="Developer"
			/>
			<img
				v-else
				src="@/assets/images/developer.svg"
				alt="Developer"
			/>
		</div>
	</section>
</template>
