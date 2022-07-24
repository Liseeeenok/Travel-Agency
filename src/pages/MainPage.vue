<template>
    <div>
        <main-intro/>
        <card-tour/>
        <card-accepted/>
        <card-watch/>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import MainIntro from "@/components/MainIntro.vue";
import CardTour from "@/components/CardTour.vue";
import CardAccepted from "@/components/CardAccepted.vue";
import CardWatch from '@/components/CardWatch.vue';
export default {
    components: { Navbar, MainIntro, CardTour, CardAccepted, CardWatch }
}
</script>

<style scoped>

</style>