<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <p>Loadded ID: {{id}} </p>
        <button @click="navigateToHome">Go to Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    methods: {
        navigateToHome() {
            //this.$router.push('/');
            this.$router.push({name: 'home'});
        }
    }
}
</script>