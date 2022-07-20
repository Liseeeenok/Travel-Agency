<template>
    <div>
        <navbar/>
        <main-intro/>
        <card-tour/>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import MainIntro from "@/components/MainIntro.vue";
import CardTour from "./components/CardTour.vue";

export default {
    components: { Navbar, MainIntro, CardTour }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;800&family=Poppins:wght@400;600;700&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
