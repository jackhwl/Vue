<template>
    <div class="blogs">
        <h2>Blogs</h2>
        <input type="text" v-model="searchTerm">
        <div v-for="post in filteredPosts" :key="post.id">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body | snippet }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Blogs',
    data() {
        return {
            posts: [],
            searchTerm: ''
        }
    },
    computed: {
        filteredPosts() {
            return this.posts.filter(post => post.title.match(this.searchTerm))
        }
    },
    methods: {
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