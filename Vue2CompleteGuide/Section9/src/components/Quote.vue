<template>
    <div>
        <div class="title">
        <slot name="title"></slot>
        <span>
            <slot name="subTitle">The Subtitle</slot>
        </span>
        </div>
        <div>
        <slot></slot>
        </div>
        <!-- <p>{{quote}}</p> -->
    </div>
</template>
<script>
    export default {
        props: ['quote']
    }
</script>
<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow:  1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
    h2 {
        *color: green;
    }
</style>