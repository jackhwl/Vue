<template>
<div>
    <p>Counter is: {{ counter }}</p>
    <p>Number of Clicks: {{ clicks }}</p>
</div>
    
</template>

<script>
    export default {
        computed: {
            counter() {
                return this.$store.getters.doubleCounter;
            },
            clicks() {
                return this.$store.getters.stringCounter;
            }
        }
    }
</script>