<script setup lang="ts">
import { ref, computed } from 'vue';

// Props definition
const props = defineProps<{
    value: string;
    label?: string;
    disabled?: boolean;
    validate?: (value: string) => string | null;
}>();

const emit = defineEmits(['input']);

// สร้าง ID สำหรับ input element
const id = ref(`input-text-${Math.random().toString(36).substring(2, 15)}`);

// ฟังก์ชันคำนวณ error message
const errorMessage = computed(() => {
    if (props.validate) {
        return props.validate(props.value);
    }
    return null;
});

// ฟังก์ชัน handle input change
const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit('input', target.value); // ส่งค่า input กลับไปยัง parent component
};
</script>

<template>
    <div class="flex flex-col mb-4">
        <label :for="id"
            class="mb-2 text-sm font-medium text-gray-700">{{
            label }}</label>
        <input :id="id" :value="value"
            @input="onInput"
            :disabled="disabled" :class="[
                'px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200',
                errorMessage ? 'border-red-500' : 'border-gray-300',
                disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
            ]" />
        <p v-if="errorMessage"
            class="mt-2 text-sm text-red-600">
            {{ errorMessage }}</p>
    </div>
</template>
