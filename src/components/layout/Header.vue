<script lang="ts">
import Button from '@/components/Button.vue'
import Logo from '@/components/icons/Logo.vue'
import { defineComponent } from 'vue'
import Close from '../icons/Close.vue'
import Menu from '../icons/Menu.vue'

export default defineComponent({
    components: {
        Button,
        Logo,
        Menu,
        Close,
    },
    data() {
        return {
            routes: ['Home', 'Leistungen', 'Team', 'Praxis', 'Kontakt'],
        }
    },
})
</script>

<template>
    <header>
        <nav class="bg-primary-900 py-2 text-white">
            <div
                class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between"
            >
                <a href="https://flowbite.com" class="flex items-center">
                    <Logo />
                    <span
                        class="self-center whitespace-nowrap text-xl font-semibold"
                        >Praxis Mustermann</span
                    >
                </a>
                <div class="flex items-center lg:order-2">
                    <Button>Online-Termin</Button>
                    <button
                        data-collapse-toggle="mobile-menu-2"
                        type="button"
                        class="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 lg:hidden"
                        aria-controls="mobile-menu-2"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Open main menu</span>
                        <Menu />
                        <Close />
                    </button>
                </div>
                <div
                    class="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
                    id="mobile-menu-2"
                >
                    <ul
                        class="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8"
                    >
                        <li v-for="route in routes" :key="route">
                            <a
                                href="#"
                                class="block rounded py-2 pr-4 pl-3 text-white lg:bg-transparent lg:p-0"
                                aria-current="page"
                                >{{ route }}</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
