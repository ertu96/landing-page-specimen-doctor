<script lang="ts">
import InnerContainer from '@/components/layout/InnerContainer.vue'
import Paragraph from '@/components/Paragraph.vue'
import PracticeDetail from '@/components/practice-details/PracticeDetail.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    data: () => ({
        paragraphs: [
            {
                title: 'Gesundheits- und Vorsorgeuntersuchungen',
                text: [
                    'Zahlreiche Krankheiten beginnen schleichend und verursachen zu Beginn keine Beschwerden. Manchmal ernsthafte Erkrankung wird somit erst spät erkannt. Mit Früherkennungsuntersuchungen kann dieser Entwicklung entgegengewirkt werden. Deshalb bieten wir Ihnen bei Ihrem Hausarzt Remscheid zahlreiche allgemeinmedizinische Vorsorgeuntersuchungen an.',
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
        PracticeDetail,
        Paragraph,
        InnerContainer,
    },
})
</script>

<template>
    <img
        src="@/assets/images/doctor-close-up.jpg"
        alt="Düsseldorf"
        class="h-72 w-full object-cover"
    />
    <div class="-mt-10 flex justify-center px-40">
        <PracticeDetail>
            <div class="text-center text-2xl">Leistungen</div>
        </PracticeDetail>
    </div>
    <InnerContainer>
        <Paragraph
            v-for="(paragraph, index) in paragraphs"
            :key="index"
            :title="paragraph.title"
            :text="paragraph.text"
            :image="paragraph.image"
            :order="index"
        />
    </InnerContainer>
</template>
