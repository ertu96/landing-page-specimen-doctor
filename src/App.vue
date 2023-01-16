<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import Footer from '@/components/layout/Footer.vue'
import Header from '@/components/layout/Header.vue'
import { RouterView } from 'vue-router'
</script>

<template>
    <Header />
    <Container>
        <RouterView />
    </Container>
    <Footer />
</template>
