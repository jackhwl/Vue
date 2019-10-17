<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server v-for="server in servers" :server="server">
            </app-server>
        </ul>
    </div>
</template>
<script>
    import Server from './Server.vue'; 
    export default {
        components: {
            'app-server': Server
        },
        data: function() {
            return {
                servers: [
                    { id: 10, status: 'Normal'},
                    { id: 21, status: 'Critical'},
                    { id: 34, status: 'Unknown'},
                    { id: 45, status: 'Minor'},
                    { id: 56, status: 'Backup'}
                ]
            };
        }
    }
</script>