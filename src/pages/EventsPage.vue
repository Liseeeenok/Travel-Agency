<template>
    <div class="container">
        <h1>This is the Events page</h1>
        <div class="vue__examples">
            <div>
                <h2>Example of reactivity:</h2>
                <input class="first__input" type="text" placeholder="Enter something here" v-model="textFirstInput"/>
                <div class="work__input">
                    <h2 style="padding: 1vw 0">The text of the input: {{ textFirstInput }}</h2>
                    <button v-if="textFirstInput !== ''" class="btn__input" @click="addTextInput">Save text</button>
                </div>
                <div v-if="arrTextInput.length > 0">
                    <hr>
                    <h2 style="margin: 1vw 0">List of texts:</h2>
                    <div v-for="text in arrTextInput" :key="text.id" class="item__text">
                        <div>
                            <div>Id: {{ text.id }}</div>
                            <div>Text: {{ text.text }}</div>
                        </div>
                        <button class="btn__text" @click="deleteTextInArr(text)">Delete</button>
                    </div>    
                </div>
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
.container {
    padding: 1vw 4vw 0px 4vw;
}
.vue__examples {
    margin-top: 1vw;
    margin-left: 1vw;
}
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
.btn__input {
    padding: 1vw;
    border-radius: 1vw;
    background-color: #F0C53E;
    border-width: 1px;
}
.btn__input:hover {
    cursor: pointer;
}
.item__text {
    border: 1px solid black;
    border-radius: 15px;
    padding: 10px;
    margin-bottom: 1vw;
    display: flex;
    justify-content: space-between;
}
.btn__text {
    padding: 1vw;
    border-radius: 1vw;
    background-color: #B25A59;
    color: white;
    border-width: 1px;
}
.btn__text:hover {
    cursor: pointer;
}
</style>