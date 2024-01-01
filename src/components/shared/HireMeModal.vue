<script setup lang="ts">
import Modal from '@/reusable/SModal.vue'
import FormInput from '@/reusable/Forms/FormInput.vue'
import ListBox from '@/reusable/Forms/ListBox.vue'
import FormTextarea from '@/reusable/Forms/FormTextarea.vue'
import { type ICategory } from '@/types/category'
import { type Option } from '@/types/Option'
import { ref } from 'vue'
const props = defineProps<{
  open: boolean
  categories: ICategory[]
}>()
const emit = defineEmits<{
  (e: 'close'): void
}>()

const fullName = ref('')
const email = ref('')
const details = ref('')
const projectType = ref({} as Option)

const resetInput = ref(false)

const reset = () => {
  fullName.value = ''
  email.value = ''
  details.value = ''
  projectType.value = {} as Option
  resetInput.value = true
}

const onSubmit = async () => {
  const data = {
    fullName: fullName.value,
    email: email.value,
    details: details.value,
    projectType: projectType.value
  }
  console.log(data)
  reset()
  emit('close')
}
</script>

<template>
  <Modal :open="open" @close="$emit('close')" width-class="max-w-xl" title="What project are you looking for?">
    <form @submit.prevent="onSubmit" >
      <div class="space-y-8 p-6 w-full">
        <FormInput
          class="w-full"
          id="fullName"
          label="Full Name"
          placeholder="Full Name"
          type="text"
          :value="fullName"
          @change="(value) => (fullName = value)"
        />

        <FormInput
          class="w-full"
          id="email"
          label="Email"
          placeholder="Email"
          type="email"
          :value="email"
          @change="(value) => (email = value)"
        />

        <ListBox
            @update="(newPriority:any) => (projectType = newPriority)"
            :selected="projectType"
            label="Priority"
            :options="categories"
           
            null-text="Select a priority"
          />


        <FormTextarea
          class="w-full"
          id="details"
          label="Details"
          placeholder="Details"
          :value="details"
          @change="(value:any) => (details = value)"
        
          :reset="resetInput"
          @reset="() => (resetInput = false)"
        />
      </div>

      <div class="mt-3 flex justify-end border-t bg-gray-50 px-6 py-3"></div>
    </form>
  </Modal>
</template>
