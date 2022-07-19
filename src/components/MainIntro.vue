<template>
    <div class="container">
        <div class="intro">
            <div class="intro__text">
                <div class="intro__title">Life is a journey<span style="color: #2C2D32;">, not a destination</span></div>
                <div class="intro__body">Let’s start your journey with us, your dream will come true...</div>
                <div class="intro__buttons">
                    <button class="button_1">Explore Destinations</button>
                    <button class="button_2">
                        <img class="button_2__image" src="@/image/5404.svg"/>
                        Watch how it works
                    </button>
                </div>
            </div>
            <div class="intro__main__image">
                <img class="main__image" src="@/image/5400.svg" />
                <img class="add__image_1" src="@/image/1507.svg" />
                <img class="add__image_2" src="@/image/5425.svg" />
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
    width: 100%;
    background-color: #F0C53E;
    top: 0px;
    padding: 2vw 4vw 0px 4vw;
    border-bottom-left-radius: 10%;
    border-bottom-right-radius: 10%;
    padding-bottom: 30px;
}
.intro {
    display: flex;
    justify-content: space-between;
}
.intro__text {
    width: 40%;
}
.intro__title {
    margin-top: 100px;
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 74px;
    color: #7F2736;
    margin-bottom: 20px;
}
.intro__body {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 160%;
    color: #464646;
    width: 80%;
    margin-bottom: 10px;
}
.intro__buttons {
    display: flex;
    justify-content: space-between;
}
.button_1 {
    border-width: 0px;
    height: 60px;
    background: #B25A59;
    border-radius: 80px;
    display: flex;
    align-items: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 36px;
    color: #FFFFFF;
    padding: 0 5%;
}
.button_2 {
    width: 270px;
    display: flex;
    align-items: center;
    border-width: 0px;
    height: 60px;
    background-color: transparent;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    color: #252641;
    white-space: nowrap;
}
.button_2__image {
    height: 100%;
    margin-right: 5%;
}
.intro__main__image {
    width: 50%;
    position: relative;
}
.main__image {
    width: 100%;
}
.add__image_1 {
    position: absolute;
    left: -10%;
    top: 25%;
}
.add__image_2 {
    position: absolute;
    left: -14%;
    top: 69%;
}
.intro__footer {
    height: 60px;
    width: 100%;
    background: #F0C53E;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
}
</style>