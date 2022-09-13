<template>
    <div class="Limitation">
        <navbar @clickBurger="clickBurger($event)"/>
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: { Navbar },
  data() {
    return {
        openBurger: false,
    }
  },
  methods: {
    clickBurger(event) {
        this.openBurger = event;
        const body = document.querySelector('body');
        if (this.openBurger) {
            body.classList.add('lock');
        } else {
            body.classList.remove('lock');
        }
        
    }
  },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;800&family=Poppins:wght@400;600;700&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body.lock {
    overflow: hidden;
}
.Limitation {
    max-width: 1920px;
    margin: auto;
}
</style>
