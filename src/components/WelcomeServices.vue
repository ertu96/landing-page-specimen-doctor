<script lang="ts">
import Button from '@/components/Button.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    data: () => ({}),
    components: {
        Button,
    },
})
</script>

<template>
    <div>
        <div class="mb-6 text-center text-2xl">Unsere Leistungen</div>
        <div class="grid grid-cols-3 gap-12 px-20">
            <div>
                <img
                    src="@/assets/images/doctor-3.jpg"
                    alt=""
                    loading="lazy"
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
                    loading="lazy"
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
                    loading="lazy"
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
            <RouterLink to="/leistungen">
                <Button>Zu den Leistungen</Button>
            </RouterLink>
        </div>
    </div>
</template>
