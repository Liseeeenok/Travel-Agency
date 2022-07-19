<template>
    <div>
        <navbar/>
        <main-intro/>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import MainIntro from "@/components/MainIntro.vue";

export default {
    components: { Navbar, MainIntro }
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
