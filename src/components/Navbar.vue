<template>
    <div class="container">
        <div class="navbar">
            <div class="intro__image">
                <div class="intro">
                    Travelline
                </div>
            </div>
            <div class="list__item">
                <button class="item">Home</button>
                <button class="item">Events</button>
                <button class="item">About</button>
                <button class="item">Blog</button>
                <button class="item">Contact</button>
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
}
.navbar {
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