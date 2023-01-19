<script setup lang="ts">
import Mail from '@/components/icons/Mail.vue'
import Telephone from '@/components/icons/Telephone.vue'
import PracticeDetail from '@/components/practice-details/PracticeDetail.vue'
import ContactSupport from '../icons/ContactSupport.vue'
</script>

<template>
    <PracticeDetail>
        <div class="mb-2 flex justify-center">
            <ContactSupport />
        </div>
        <div class="flex items-center gap-5">
            <Telephone />
            <span> 0211 / 463 463 21 </span>
        </div>
        <div class="flex items-center gap-5">
            <Mail />
            <span> bilk@praxis.de </span>
        </div>
    </PracticeDetail>
</template>
