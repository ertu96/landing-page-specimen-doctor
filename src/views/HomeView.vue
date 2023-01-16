<script lang="ts">
import PraxisDetails from '@/components/practice-details/PracticeDetails.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        PraxisDetails,
    },
    data() {
        return {
            count: 1,
        }
    },
})
</script>

<template>
    <img
        src="@/assets/images/duesseldorf-gerry.jpg"
        alt="Düsseldorf"
        class="h-72 w-full object-cover"
    />
    <PraxisDetails />
    <div>Wilkommen,</div>
    <div>in der Gemeinschaftpraxis Mustermann</div>
</template>
