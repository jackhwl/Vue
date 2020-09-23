<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a Server</p>
        <p v-else>Server id: {{ server.id }} status: {{ server.status }}</p>
        <hr>
        <button @click="resetStatus">Change to Normal </button>
    </div>
</template>
<script>
    import { eventBus } from '../../main';

    export default {
        data: function() {
            return {
                server: null
            }
        },
        methods: {
            resetStatus(){
                this.server.status = 'Normal';
            }
        },
        created() {
            eventBus.$on('serverSelected', (server) => {
                this.server = server;
            });
        }
    }
</script>
<style scoped>
    div {
        border: 1px solid red;
    }
</style>