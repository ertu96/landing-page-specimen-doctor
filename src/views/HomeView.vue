<script lang="ts">
import InnerContainer from '@/components/layout/InnerContainer.vue'
import Paragraph from '@/components/Paragraph.vue'
import PracticeDetails from '@/components/practice-details/PracticeDetails.vue'
import WelcomeHeader from '@/components/WelcomeHeader.vue'
import WelcomeServices from '@/components/WelcomeServices.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    data: () => ({
        paragraphs: [
            {
                title: 'Ihre Gesundheit nehmen wir ganz persönlich',
                text: [
                    'Seit 2003 gibt es unsere Praxis im Herzen von Düsseldorf. Sie verbindet fachärztliche Kompetenz im Bereich der inneren Medizin mit hausärztlicher Versorgung für die ganze Familie.',
                    'Wir freuen uns, Ihnen auf unserer Praxishomepage einen ersten Eindruck von unserer Praxis vermitteln zu können und Sie über unser Leistungsspektrum zu informieren.',
                ],
                image: {
                    src: '/src/assets/images/doctor-1.jpg',
                    alt: 'Doctor',
                },
            },
            {
                title: 'Unsere Ärzte',
                text: [
                    'Dr. med. John Doe | Allgemeinmedizin',
                    'Dr. med. Fred Bloggs | Allgemeinmedizin',
                    'Dr. med. Jane Q. Taxpayer | Chirurgie',
                ],
                image: {
                    src: '/src/assets/images/doctor-2.jpg',
                    alt: 'Doctor',
                },
            },
        ],
    }),
    components: {
        PracticeDetails,
        WelcomeHeader,
        InnerContainer,
        Paragraph,
        WelcomeServices,
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
        <Paragraph
            v-for="(paragraph, index) in paragraphs"
            :key="index"
            :title="paragraph.title"
            :text="paragraph.text"
            :image="paragraph.image"
            :order="index"
        />
        <WelcomeServices />
    </InnerContainer>
</template>
