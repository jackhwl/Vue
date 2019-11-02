<template>
    <div class="blogs">
        <h2>{{ blogTitle }}</h2>
        <button @click="changeTitle">Change Title</button>
        <div v-for="post in posts" :key="post.id">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Blogs',
    data() {
        return {
            blogTitle: 'Blogs',
            posts: []
        }
    },
    methods: {
        changeTitle() {
            this.blogTitle = 'Amazing Blog Site'
        }
    },
    beforeCreate(){
        //alert('beforeCreate hook')
    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(response => this.posts = response.data)
        .catch(err => console.error(err))
    },
    beforeUpdate() {
        //alert('beforeUpdate hook')
    }
}
</script>