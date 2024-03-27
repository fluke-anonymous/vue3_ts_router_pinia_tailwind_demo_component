<script setup lang="ts">
import Nav from './Nav.vue'
import Footer from './Footer.vue'
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
    <main
        class="flex flex-col justify-around items-stretch">
        <Nav>
        </Nav>
        <RouterView></RouterView>
        <Footer>
        </Footer>
    </main>
</template>
