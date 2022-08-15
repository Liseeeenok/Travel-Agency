<template>
    <button class="btn__input">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped>
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
</style>