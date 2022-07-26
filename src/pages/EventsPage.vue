<template>
    <div class="container">
        <h1>This is the Events page</h1>
        <div class="vue__examples">
            <div>
                <h2>Example of reactivity:</h2>
                <text-list/>
                <hr>
                <h2 style="margin-top: 1vw;">Working with the API:</h2>
                <image-fox/>
            </div>
        </div>
    </div>
</template>

<script>
import TextList from '@/components/TextList.vue'
import ImageFox from '../components/ImageFox.vue'
export default {
    components: {
        TextList, ImageFox,
    }
}
</script>

<style scoped>
.container {
    padding: 1vw 4vw 0px 4vw;
}
.vue__examples {
    margin-top: 1vw;
    margin-left: 1vw;
}
</style>