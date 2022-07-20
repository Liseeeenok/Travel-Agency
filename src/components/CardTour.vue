<template>
    <div class="container">
        <div class="cards__tour">
            <div class="card__title">Check Our Best <span style="color: #2C2D32;">Promotional Tour</span></div>
            <div class="card__body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            <div class="card__slider">
                <div>
                    <img class="image__tour" src="@/image/CardTourBeijing.png" />
                    <div class="image__captoin">Beijing</div>
                </div>
                <div>
                    <img class="image__tour" src="@/image/CradTourTurkey.png" />
                    <div class="image__captoin">Turkey</div>
                </div>
                <div>
                    <img class="image__tour" src="@/image/CardTourPakistan.png" />
                    <div class="image__captoin">Pakistan</div>
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
.cards__tour {
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
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
}
.image__tour {
    height: 200px;
}
.image__captoin {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 45px;
    text-align: center;
    color: #7F2736;
}
</style>