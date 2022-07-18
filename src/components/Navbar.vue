<template>
    <div class="container">
        <div class="navbar">
            <div class="intro__image">
                <div class="intro">
                    Travelline
                </div>
            </div>
            <div>Items</div>
            <div>Number</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
.container {
    padding: 60px 101px 0px 105px;
    background-color: #F0C53E;
}
.navbar {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.intro__image {
    width: 10.9vw;
    background-repeat: no-repeat;
    background-image: url("@/image/5420.svg");
    background-size: 100% 100%;
    display: flex;
}
.intro {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 1.7vw;
    margin: auto;
    letter-spacing: 0.04em;
    color: white;
}
</style>