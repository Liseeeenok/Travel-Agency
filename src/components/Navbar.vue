<template>
    <div class="container">
        <div class="navbar">
            <div @click="$router.push('/')" class="intro__image">
                <div class="intro">
                    Travelline
                </div>
            </div>
            <div class="list__item">
                <button @click="$router.push('/')" id="home" class="item">Home</button>
                <button @click="$router.push('/events')" id="Events" class="item">Events</button>
                <button @click="$router.push('/about')" id="About" class="item">About</button>
                <button @click="$router.push('/blog')" id="Blog" class="item">Blog</button>
                <button @click="$router.push('/contact')" id="Contact" class="item">Contact</button>
            </div>
            <div class="number">
                <img class="number__image" src="@/image/1542.svg"/>
                <button class="number__button">+1 (000) 000 000</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    z-index: 1000;
    position: relative;
    padding: 1vw 4vw 0px 4vw;
    background-color: #F0C53E;
    padding-bottom: 0.5vw;
}
.navbar {
    max-width: 1900px;
    margin: auto;
    height: 56px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.intro__image {
    width: 140px;
    background-repeat: no-repeat;
    background-image: url("@/image/5420.svg");
    background-size: 100% 100%;
    display: flex;
}
.intro__image:hover {
    cursor: pointer;
}
.intro {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    margin: auto;
    letter-spacing: 0.04em;
    color: white;
}
.list__item {
    display: flex;
    align-items: center;
    width: 40%;
    justify-content: space-between;
    min-width: 270px;
    max-width: 500px;
}
.item {
    background-color: transparent;
    border-width: 0px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 33px;
    letter-spacing: 0.02em;
    color: #252641;
}
.item:hover {
    cursor: pointer;
}
.item:active {
    color: #B25A59;
}
.item:target {
    color: aqua;
}
.number {
    width: 205px;
    background: #B25A59;
    border-radius: 80px;
    display: flex;
    align-items: center;
}
.number__button {
    background-color: transparent;
    border-width: 0px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 33px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    margin-right: 10%;
}
.number__image {
    width: 22px;
    margin-left: 10%;
}
</style>