<script lang="ts">
import Schedule from '@/components/icons/Schedule.vue'
import PraxisDetail from '@/components/practice-details/PracticeDetail.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        PraxisDetail,
        Schedule,
    },
    data() {
        return {
            openingHours: [
                {
                    day: 'Montag',
                    hours: '9:00-18:00',
                },
                {
                    day: 'Dienstag',
                    hours: '9:00-18:00',
                },
                {
                    day: 'Mittwoch',
                    hours: '9:00-18:00',
                },
                {
                    day: 'Donnerstag',
                    hours: '9:00-18:00',
                },
                {
                    day: 'Freitag',
                    hours: '9:00-18:00',
                },
            ],
        }
    },
})
</script>

<template>
    <PraxisDetail>
        <div class="mb-2 flex justify-center">
            <Schedule />
        </div>

        <div
            class="flex justify-between"
            v-for="openingHour in openingHours"
            :key="openingHour.day"
        >
            <div>{{ openingHour.day }}</div>
            <div>{{ openingHour.hours }}</div>
        </div>
    </PraxisDetail>
</template>
