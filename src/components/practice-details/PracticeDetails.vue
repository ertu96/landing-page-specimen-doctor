<script setup lang="ts">
import PracticeContact from '@/components/practice-details/PracticeContact.vue'
import PracticeLocations from '@/components/practice-details/PracticeLocations.vue'
import PracticeOpeningHours from '@/components/practice-details/PracticeOpeningHours.vue'
</script>

<template>
    <div class="-mt-16 grid divide-y px-40 lg:grid-cols-3 lg:divide-x">
        <PracticeOpeningHours />
        <PracticeLocations />
        <PracticeContact />
    </div>
</template>
