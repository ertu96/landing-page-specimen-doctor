<script lang="ts">
import InnerContainer from '@/components/layout/InnerContainer.vue'
import PracticeDetails from '@/components/practice-details/PracticeDetails.vue'
import WelcomeHeader from '@/components/WelcomeHeader.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        PracticeDetails,
        WelcomeHeader,
        InnerContainer,
    },
})
</script>

<template>
    <img
        src="@/assets/images/duesseldorf-gerry.jpg"
        alt="Düsseldorf"
        class="h-72 w-full object-cover"
    />
    <PracticeDetails />
    <InnerContainer>
        <WelcomeHeader />
        <div class="flex justify-between">
            <div>
                <span class="text-lg"
                    >Ihre Gesundheit nehmen wir ganz persönlich</span
                >
                <p>
                    Seit 2003 gibt es unsere Praxis im Herzen von Düsseldorf.
                    Sie verbindet fachärztliche Kompetenz im Bereich der inneren
                    Medizin mit hausärztlicher Versorgung für die ganze Familie.
                </p>
                <p>
                    Wir freuen uns, Ihnen auf unserer Praxishomepage einen
                    ersten Eindruck von unserer Praxis vermitteln zu können und
                    Sie über unser Leistungsspektrum zu informieren.
                </p>
            </div>
            <img
                src="@/assets/images/doctor-1.jpg"
                alt="Doctor"
                class="max-h-36 rounded-sm"
            />
        </div>
    </InnerContainer>
</template>
