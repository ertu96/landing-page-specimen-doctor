<script lang="ts">
import { defineComponent, type PropType } from 'vue'

interface Thumbnail {
    src: string
    alt: string
}

export default defineComponent({
    name: 'Paragraph',
    props: {
        title: {
            type: String,
            required: true,
        },
        text: {
            type: Array as PropType<string[]>,
            required: true,
        },
        image: {
            type: Object as PropType<Thumbnail>,
            required: true,
        },
        order: {
            type: Number,
            required: true,
        },
    },
})
</script>

#
<template>
    <div class="my-20 grid grid-cols-2">
        <div>
            <div class="-ml-2 mr-1 inline-block h-4 w-1 bg-primary-500" />
            <span class="text-lg">{{ title }}</span>
            <div class="my-2" />
            <p v-for="(paragraph, index) in text" :key="index" class="mt-1">
                {{ paragraph }}
            </p>
        </div>
        <div
            class="flex justify-center"
            :class="order % 2 === 0 ? '' : '-order-last'"
        >
            <img
                :src="image.src"
                :alt="image.alt"
                loading="lazy"
                class="max-h-48 rounded-sm"
            />
        </div>
    </div>
</template>
