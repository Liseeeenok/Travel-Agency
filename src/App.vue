<template>
    <div>
        <navbar/>
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: { Navbar },

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
