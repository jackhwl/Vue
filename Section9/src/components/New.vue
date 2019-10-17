<template>
    <div>
        New
    </div>
</template>
<script>
    export default {
        data: function() {
            return {
                counter: 0
            }
        },
        destroyed() {
            console.log('Destroyed!');
            
        },
        deactivated() {
            console.log('Deactivated!');
            
        },
        activated() {
            console.log('Activated!');
            
        }
    }

</script>