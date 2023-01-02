<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>

<template>
    <Header></Header>
    <Suspense>
        <router-view></router-view>
    </Suspense>
</template>

<style lang="scss">
@import '@/assets/styles/fonts.css';
</style>