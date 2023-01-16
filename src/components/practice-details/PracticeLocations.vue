<script setup lang="ts">
import Location from '@/components/icons/Location.vue'
import PracticeDetail from '@/components/practice-details/PracticeDetail.vue'
</script>

<template>
    <PracticeDetail>
        <div class="flex justify-center">
            <Location />
        </div>
        <div class="flex">
            <div class="w-1/2">
                <div class="text-center text-xl">Praxis Bilk</div>
                <div class="my-2 text-center">Muster Str. 101</div>
                <div class="text-center">4000 Düsseldorf</div>
            </div>
            <div class="w-1/2">
                <div class="text-center text-xl">Praxis Eller</div>
                <div class="my-2 text-center">Muster Str. 55</div>
                <div class="text-center">4000 Düsseldorf</div>
            </div>
        </div>
    </PracticeDetail>
</template>
