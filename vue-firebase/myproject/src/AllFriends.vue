<template>
    <div id="all-friends">
        <h2>All Friends</h2>
        <div v-for="(friend, index) in friends" :key="index">
            <span @click="unfriend(friend.name)">{{ friend.name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['friends'],
    name: 'AllFriends',
    data() {
        return {
        }
    },
    methods: {
        unfriend(name) {
            this.$emit('delete', {name})
        }
    }
}
</script>

<style>

</style>