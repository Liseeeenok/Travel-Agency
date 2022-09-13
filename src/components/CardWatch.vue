<template>
    <div class="container">
        <div class="card__accepted">
            <div class="card__text">
                <div class="card__title">Watch,<span style="color: #2C2D32;"> our lattest tour</span></div>
                <div class="card__body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </div>
            <div class="card__video">
                <iframe class="video" width="1000" height="450" src="https://www.youtube.com/embed/_S7WEVLbQ-Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    display: flex;
    max-width: 1900px;
    margin: auto;
    margin-bottom: 200px;
}
.card__text {
    margin-top: 2vw;
    width: 50%;
}
.card__title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 180%;
    color: #7F2736;
}
.card__body {
    max-width: 730px;
    margin: 1vw 2vw 0 0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    color: #2C2D32;
}
.card__video {
    overflow: hidden;
    border-radius: 2vw;
    width: 50%;
}
.video {
    display: block;
    max-width: 100%;
    max-height: 100%;
}
</style>