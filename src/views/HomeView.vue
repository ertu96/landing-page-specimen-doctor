<script lang="ts">
import Button from '@/components/Button.vue'
import InnerContainer from '@/components/layout/InnerContainer.vue'
import PracticeDetails from '@/components/practice-details/PracticeDetails.vue'
import WelcomeHeader from '@/components/WelcomeHeader.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        PracticeDetails,
        WelcomeHeader,
        InnerContainer,
        Button,
    },
    methods: {
        navigateToServices() {
            this.$router.replace({ path: '/leistungen' })
        },
        navigateToTeam() {
            this.$router.replace({ path: '/team' })
        },
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
        <div class="my-20 grid grid-cols-3">
            <div class="col-span-2">
                <div class="-ml-2 mr-1 inline-block h-4 w-1 bg-primary-500" />
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
                class="max-h-48 rounded-sm"
            />
        </div>
        <div class="my-20 grid grid-cols-3">
            <img
                src="@/assets/images/doctor-2.jpg"
                alt="Doctor"
                class="max-h-48 rounded-sm"
            />
            <div class="col-span-2">
                <div class="-ml-2 mr-1 inline-block h-4 w-1 bg-primary-500" />

                <span class="text-lg">Unsere Ärzte</span>
                <div class="flex gap-10">
                    <ul>
                        <li>Dr. med. John Doe | Allgemeinmedizin</li>
                        <li>Dr. med. Fred Bloggs | Allgemeinmedizin</li>
                        <li>Dr. med. Jane Q. Taxpayer | Chirurgie</li>
                    </ul>
                    <div class="flex flex-col justify-center">
                        <RouterLink to="/team">
                            <Button :clickFunction="navigateToTeam"
                                >Team anzeigen</Button
                            >
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="mb-6 text-center text-2xl">Unsere Leistungen</div>
            <div class="grid grid-cols-3 gap-12 px-20">
                <div class="">
                    <img
                        src="@/assets/images/doctor-3.jpg"
                        alt=""
                        class="aspect-square rounded-t-sm object-cover"
                    />
                    <div
                        class="rounded-b-sm bg-primary-800 p-3 text-center text-white"
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
                        class="rounded-b-sm bg-primary-800 p-3 text-center text-white"
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
                        class="rounded-b-sm bg-primary-800 p-3 text-center text-white"
                    >
                        Blutuntersuchungen
                    </div>
                </div>
            </div>
            <div class="mt-8 flex justify-center">
                <Button :clickFunction="navigateToServices"
                    >Zu den Leistungen</Button
                >
            </div>
        </div>
    </InnerContainer>
</template>
