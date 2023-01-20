<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            links: [
                {
                    name: 'Impressum',
                    href: '#',
                },
                {
                    name: 'Datenschutzerklärung',
                    href: '#',
                },
                {
                    name: 'Cookies',
                    href: '#',
                },
            ],
        }
    },
})
</script>

<template>
    <footer class="border-t bg-primary-900 text-neutral-200">
        <div class="mx-auto flex max-w-screen-xl justify-between py-4">
            <span class="text-sm sm:text-center"
                >© 2023
                <a href="https://flowbite.com/" class="hover:underline"
                    >Praxis Mustermann</a
                >
            </span>
            <ul class="mt-3 flex flex-wrap items-center text-sm sm:mt-0">
                <li v-for="link in links" :key="link.name">
                    <a :href="link.href" class="mr-4 hover:underline md:mr-6">{{
                        link.name
                    }}</a>
                </li>
            </ul>
        </div>
    </footer>
</template>
