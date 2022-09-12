<template>
    <div class="container">
        <div class="card__accepted">
            <div class="card__title">Globally <span style="color: #2C2D32;">Accepted</span></div>
            <div class="card__body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            <div class="card__slider">
                <div class="card__domestic">
                    <div class="card__text">For Domestic</div>
                    <button class="start__trip">Start trip today</button>
                </div>
                <div class="card__inter">
                    <div class="card__text">For International</div>
                    <button class="start__trip">Start trip today</button>
                </div>
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
    padding: 2vw 8vw 0;
}
.card__accepted {
    max-width: 1900px;
    margin: auto;
}
.card__title {
    text-align: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 180%;
    color: #7F2736;
}
.card__body {
    margin: 1vw auto 2vw;
    width: 50%;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    text-align: center;
    color: #2C2D32;
}
.card__slider {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 2vw;
}
.card__domestic {
    background-image: linear-gradient(to top, rgba(127, 39, 54, 0.6), rgba(127, 39, 54, 0.6)), url(@/image/AcceptedImage1.svg);
    align-items: center;
    background-size: 100% 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 400px;
    width: 400px;
    border: 1px solid #000000;
    background-color: rgb(127, 39, 54, 0.6);
    border-radius: 20px;
    transition: 1s;
    margin-bottom: 1vw;
}
.card__domestic:hover{
    cursor: pointer;
    transform: scale(1.2);
}
.card__text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 40px;
    text-align: center;
    color: white;
}
.card__inter{
    background-image: linear-gradient(to top, rgba(127, 39, 54, 0.6), rgba(127, 39, 54, 0.6)), url(@/image/AcceptedImage2.svg);
    align-items: center;
    background-size: 100% 400px;
    display: flex;
    justify-content: center;
    height: 400px;
    width: 400px;
    border: 1px solid #000000;
    background-color: rgb(127, 39, 54, 0.6);
    border-radius: 20px;
    flex-direction: column;
    transition: 1s;
    margin-bottom: 1vw;
}
.card__inter:hover {
    cursor: pointer;
    transform: scale(1.2);
}
.start__trip {
    margin-top: 1vw;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    font-size: 16px;
    padding: 20px;
    border-radius: 80px;
}
.start__trip:hover {
    cursor: pointer;
}
</style>