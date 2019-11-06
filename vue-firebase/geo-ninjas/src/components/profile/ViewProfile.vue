<template>
    <div class="view-profile container">
        <div class="card" v-if="profile">
            <h2 class="deep-purple-text center">{{ profile.alias }}'s Wall</h2>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    data() {
        return {
            profile: null
        }
    },
    created() {
        let ref = db.collection('users')
        ref.doc(this.$route.params.id).get()
        .then(user => {
            this.profile = user.data()
        })
    }
}
</script>