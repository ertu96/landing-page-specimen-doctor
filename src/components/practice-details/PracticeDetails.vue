<script setup lang="ts">
import PracticeContact from '@/components/practice-details/PracticeContact.vue'
import PracticeLocations from '@/components/practice-details/PracticeLocations.vue'
import PracticeOpeningHours from '@/components/practice-details/PracticeOpeningHours.vue'
</script>

<template>
    <div class="-mt-16 flex divide-x px-40">
        <PracticeOpeningHours />
        <PracticeLocations />
        <PracticeContact />
    </div>
</template>
