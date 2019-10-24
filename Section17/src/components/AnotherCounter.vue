<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by:50, duration: 500})">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions([
                'increment',
                'asyncDecrement'
            ]),
            // increment(by) {
            //     this.$store.dispatch('increment', by);
            // },
            // decrement() {
            //     this.$store.commit('decrement');
            // }
        }
    }
</script>