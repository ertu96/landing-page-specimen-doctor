<script setup lang="ts">
import { RouterView } from 'vue-router'
import Container from './components/layout/Container.vue'
import Footer from './components/layout/Footer.vue'
import Header from './components/layout/Header.vue'
</script>

<template>
    <Header />
    <Container> <RouterView /> </Container>
    <Footer />
</template>
