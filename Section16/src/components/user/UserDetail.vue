<template>
<div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ $route.params.id }}</p>    
    <router-link tag="button" class="btn btn-primary" :to="'/user/' + $route.params.id + '/edit' ">Edit User</router-link>
    <router-link tag="button" class="btn btn-primary" :to=" { name: 'userEdit', params: $route.params.id, query: { locale: 'en', q: 100} } ">Edit User with name</router-link>
</div>
</template>