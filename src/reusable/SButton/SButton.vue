<template>
  <button
    v-if="!link"
    :class="[
      'btn',
      `btn-${size ? size : 'md'}`,
      `btn-${variant ? variant : 'primary'}`,
      { 'btn-loading': loading },
      { 'btn-icon': icon }
    ]"
    :disabled="loading || disabled"
    @click="handleClick"
  >
    <slot v-if="!loading && !icon">{{ label }}</slot>
    <span v-if="loading && !icon">Loading...</span>
    <span v-if="icon" class="btn-icon-slot"><slot name="icon" /></span>
  </button>

  <router-link
    v-else
    :to="to as string"
    :class="[
      'btn',
      `btn-${size}`,
      `btn-${variant}`,
      { 'btn-loading': loading },
      { 'btn-icon': icon }
    ]"
    :disabled="loading || disabled"
    @click="handleClick"
  >
    <slot v-if="!loading && !icon">{{ label }}</slot>
    <span v-if="loading && !icon">Loading...</span>
    <span v-if="icon" class="btn-icon-slot"><slot name="icon" /></span>
  </router-link>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import type { RouteLocationRaw, RouterLink } from 'vue-router'

const props = defineProps<{
  type?: 'button' | 'submit' | 'reset'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'primary' | 'secondary' | 'success' | 'warning'
  loading?: boolean
  icon?: string
  iconPosition?: 'left' | 'right'
  link?: boolean
  disabled?: boolean
  label?: string
  to?: RouteLocationRaw
}>()

// eslint-disable-next-line vue/valid-define-emits
const emit = defineEmits()

const handleClick = () => {
  if (!props.loading && !props.disabled) {
    emit('click')
  }
}
</script>

<style scoped>
.btn {
  @apply h-max flex whitespace-nowrap justify-center  shadow-md hover:shadow items-center  duration-300 cursor-pointer capitalize  transition-all;
}

.btn-primary {
  @apply bg-primary-500 text-white hover:bg-primary-600;
}

.btn-secondary {
  @apply bg-gray-500 text-white hover:bg-gray-600;
}

.btn-success {
  @apply bg-green-500 text-white hover:bg-green-600;
}

.btn-warning {
  @apply bg-yellow-500 text-white hover:bg-yellow-600;
}

.btn-link {
  @apply text-blue-500 underline hover:no-underline hover:text-blue-600;
}

.btn-loading {
  @apply cursor-not-allowed opacity-70;
}

.btn-icon {
  @apply flex items-center justify-center;
}

.btn-icon-left {
  @apply mr-2; /* Adjust margin as needed */
}

.btn-icon-right {
  @apply ml-2; /* Adjust margin as needed */
}

.btn-icon-slot {
  @apply ml-2;
}

.btn-xs {
  @apply text-xs;
}

.btn-sm {
  @apply text-sm;
}

.btn-md {
  @apply text-base;
}

.btn-lg {
  @apply text-lg;
}

.btn-xl {
  @apply text-xl;
}
</style>
