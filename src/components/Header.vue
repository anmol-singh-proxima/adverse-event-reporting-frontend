<template>
    <nav class="nav">      
        <div class="left-nav">
            <router-link to="/"><a>Home</a></router-link>
            <router-link to="/report/create"><a>Create AE Form</a></router-link>
            <router-link to="/report/view"><a>View AE Form</a></router-link>
            <router-link to="/increments"><a>Increments</a></router-link>
        </div>
        <div class="right-nav">
            <a>Hello {{user.name}}!</a>
            <a @click="logout">Logout</a>
        </div>
    </nav>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Header',
    props: ['user'],
    methods: {
        logout() {
            sessionStorage.removeItem("user")
            this.$router.push({ name: 'login' })
        }
    }
}
</script>

<style>
.nav {
    display: block;
    clear: both;
    background-color: #111;
    overflow: hidden;
    margin: 0;
    padding: 0px;
}
.left-nav {
    float: left;
}
.right-nav {
    float: right;
}
.left-nav a, .right-nav a {
    color: #eee;
    padding: 8px;
    text-decoration: none;
    cursor: pointer;
}
.left-nav a:hover, .right-nav a:hover {
    color: #333;
    background-color: #ddd;
}
</style>