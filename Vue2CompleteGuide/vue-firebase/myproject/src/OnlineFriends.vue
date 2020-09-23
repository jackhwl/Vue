<template>
    <div id="all-friends">
        <h2>Online Friends</h2>
        <div v-for="(friend, index) in friends" :key="index">
            <span v-if="friend.online">{{ friend.name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['friends'],
    name: 'OnlineFriends',
    data() {
        return {
        }
    }
}
</script>

<style>

</style>