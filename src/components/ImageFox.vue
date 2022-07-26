<template>
    <div class="container__api">
        <div>
            <div class="btn__api">
                <button class="btn__input" @click="giveRandomImage()">Get a random photo</button>
                <button class="btn__input" @click="giveRandomImageFox()">Get a photo of a fox</button>
                <button class="btn__input" @click="giveRandomImageCat()">Get a photo of a cat</button>
            </div>
            <div class="container__image">
                <img class="api__image" :src="this.UrlImageOne"/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            UrlImageOne: '',
            NumberImage: 1,
            UrlAllRand: 'http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true',
            UrlFoxRand: 'https://randomfox.ca/floof/',
            UrlCatRand: 'https://api.thecatapi.com/v1/images/search',
        }
    },
    methods: {
        async giveRandomImage() {
            try {
                const response = await axios.get(this.UrlAllRand);
                const date = response.data[0];
                this.UrlImageOne = date;
            } catch (e) {
                alert('Error: ' + e);
            }
        },
        async giveRandomImageFox() {
            try {
                const response = await axios.get(this.UrlFoxRand);
                const date = response.data.image;
                this.UrlImageOne = date;
            } catch (e) {
                alert('Error: ' + e);
            }
        },
        async giveRandomImageCat() {
            try {
                const response = await axios.get(this.UrlCatRand);
                console.log(response)
                const date = response.data[0].url;
                this.UrlImageOne = date;
            } catch (e) {
                alert('Error: ' + e);
            }
        },
    },
    mounted() {
        this.giveRandomImage();
    }
}
</script>

<style scoped>
.container__api {
    display: flex;
    justify-content: center;
    margin-top: 1vw;
    margin-bottom: 100px;
}
.btn__api {
    display: flex;
    justify-content: center;
    margin-bottom: 1vw;
}
.btn__input {
    padding: 1vw;
    border-radius: 1vw;
    background-color: #F0C53E;
    border-width: 1px;
    margin-left: 1vw;
}
.btn__input:hover {
    cursor: pointer;
}
.container__image {
    position: relative;
    height: 400px;
    display: flex;
    justify-content: center;
}
.api__image {
    border-radius: 1vw;
    max-width: 90vw;
    height: 100%;
}
</style>