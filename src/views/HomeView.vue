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
        <div class="flex justify-between">
            <img
                src="@/assets/images/doctor-2.jpg"
                alt="Doctor"
                class="max-h-36 rounded-sm"
            />
            <div>
                <span class="text-lg">Unsere Ärzte</span>
                <ul>
                    <li>Dr. med. John Doe | Allgemeinmedizin</li>
                    <li>Dr. med. Fred Bloggs | Allgemeinmedizin</li>
                    <li>Dr. med. Jane Q. Taxpayer | Chirurgie</li>
                </ul>
                <button>Team anzeigen</button>
            </div>
        </div>
        <div>
            <div class="text-center text-2xl">Unsere Leistungen</div>
            <div class="grid grid-cols-3 gap-12">
                <div class="">
                    <img
                        src="@/assets/images/doctor-3.jpg"
                        alt=""
                        class="aspect-square rounded-t-sm object-cover"
                    />
                    <div
                        class="rounded-b-sm bg-blue-800 p-3 text-center text-white"
                    >
                        Impfungen
                    </div>
                </div>
                <div>
                    <img
                        src="@/assets/images/doctor-4.jpg"
                        alt=""
                        class="aspect-square rounded-t-sm object-cover"
                    />
                    <div
                        class="rounded-b-sm bg-blue-800 p-3 text-center text-white"
                    >
                        Berichte
                    </div>
                </div>
                <div>
                    <img
                        src="@/assets/images/doctor-5.jpg"
                        alt=""
                        class="aspect-square rounded-t-sm object-cover"
                    />
                    <div
                        class="rounded-b-sm bg-blue-800 p-3 text-center text-white"
                    >
                        Blutuntersuchungen
                    </div>
                </div>
            </div>
            <button>Zu den Leistungen</button>
        </div>
    </InnerContainer>
</template>
