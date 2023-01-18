<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        outlined: {
            type: Boolean,
            required: false,
        },
    },
    data() {
        return {
            outlinedClass:
                'inline-block rounded-sm border border-primary-700 px-12 py-3 text-sm font-medium text-primary-700 hover:bg-primary-700 hover:text-white focus:outline-none focus:ring active:bg-primary-500 h-fit',
            containedClass:
                'inline-block rounded-sm border border-primary-700 bg-primary-700 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primary-700 focus:outline-none focus:ring active:text-primary-500 h-fit',
        }
    },
})
</script>

<template>
    <button :class="outlined ? outlinedClass : containedClass">
        <slot />
    </button>
</template>
