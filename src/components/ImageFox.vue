<template>
    <div class="container__api">
        <div>
            <div class="btn__api">
                <my-button @click="giveRandomImageDog()">Get a photo of a dog</my-button>
                <my-button @click="giveRandomImageFox()">Get a photo of a fox</my-button>
                <my-button @click="giveRandomImageCat()">Get a photo of a cat</my-button>
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
            UrlDogRand: 'https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true',
            UrlFoxRand: 'https://randomfox.ca/floof/',
            UrlCatRand: 'https://api.thecatapi.com/v1/images/search',
        }
    },
    methods: {
        async giveRandomImageDog() {
            try {
                const response = await axios.get(this.UrlDogRand);
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
                const date = response.data[0].url;
                this.UrlImageOne = date;
            } catch (e) {
                alert('Error: ' + e);
            }
        },
    },
    mounted() {
        this.giveRandomImageDog();
    }
}
</script>

<style scoped>
.container__api {
    display: flex;
    justify-content: center;
    margin-top: 1vw;
}
.btn__api {
    display: flex;
    justify-content: center;
    margin-bottom: 1vw;
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