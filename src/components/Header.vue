<!--
#. This is the HeaderComponent
#. This component contains a menu for the links to redirect the user to different pages of the application
-->

<template>
    <div class="header">
        <div class="left-size">
            <router-link class="menu-item" to="/"><a>Home</a></router-link>
            <router-link class="menu-item" to="/report/create"><a>Create AE Form</a></router-link>
            <router-link class="menu-item" to="/report/view"><a>View AE Form</a></router-link>
            <router-link class="menu-item" to="/increments"><a>Increments</a></router-link>
        </div>
        <div class="right-size">
            <a class="menu-item">Hello {{user.name}}!</a>
            <a class="menu-item" @click="logout">Logout</a>
        </div>
    </div>
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
.header {
    display: flex;
    justify-content: space-between;
    background-color:darkgoldenrod;
    margin: 0;
    padding: 0;
    height: auto;
}
.left-size {
    display: block;
    width: fit-content;
}
.right-size {
    display: block;
    width: fit-content;
}
.header .menu-item {
    display: inline-block;
    padding: 8px 10px;
    text-decoration: none;
    color: #eee;
}
.header .menu-item:hover {
    color: #222;
    background-color: burlywood;
}
</style>