<template>
    <div>
        <input class="first__input" type="text" placeholder="Enter something here" v-model="textFirstInput"/>
        <div class="work__input">
            <h2 style="padding: 1vw 0" class="text__input">The text of the input: {{ textFirstInput }}</h2>
            <my-button class="btn__save" v-if="textFirstInput !== ''" @click="addTextInput">Save text</my-button>
        </div>
        <div v-if="arrTextInput.length > 0">
            <hr>
            <h2 style="margin: 1vw 0">List of texts:</h2>
            <div v-for="text in arrTextInput" :key="text.id" class="item__text">
                <div class="item__body__text">
                    <div>Id: {{ text.id }}</div>
                    <div>Text: {{ text.text }}</div>
                </div>
                <button class="btn__text" @click="deleteTextInArr(text)">Delete</button>
            </div>    
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            textFirstInput: '',
            arrTextInput: [
                {id: 1, text: 'abrakadabra'}
            ]
        }
    },
    methods: {
        addTextInput(event) {
            const textInput = {
                id: Date.now(),
                text: this.textFirstInput
            }
            this.arrTextInput.push(textInput);
            this.textFirstInput = '';

        },
        deleteTextInArr(itemText) {
            this.arrTextInput = this.arrTextInput.filter(text => text !== itemText);
        }
    }
}
</script>

<style scoped>
.first__input{
    margin-top: 1vw;
    width: 100%;
    padding: 1vw;
    font-size: 16px;
    margin-bottom: 1vw;
}
.work__input {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1vw;
    align-items: center;
}
.item__text {
    border: 1px solid black;
    border-radius: 15px;
    padding: 10px;
    margin-bottom: 1vw;
    display: flex;
    justify-content: space-between;
}
.text__input {
    width: 100%;
    word-wrap: break-word;
    overflow: hidden;
}
.btn__text {
    margin: auto 0;
    height: 41px;
    width: 80px;
    padding: 1vw;
    border-radius: 1vw;
    background-color: #B25A59;
    border-width: 1px;
}
.btn__text:hover {
    cursor: pointer;
}
.btn__save {
    width: 100px;
}
.item__body__text {
    width: 90%;
    overflow: hidden;
    word-wrap: break-word;
}
</style>