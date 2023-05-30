<template>
    <div>      
        <Header :user="user" />
        <div class="form-links">
            <router-link to="/report/create"><button>Create AE Form</button></router-link>
            <router-link to="/report/view"><button>View AE Form</button></router-link>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Header from './Header.vue'

export default {
    name: 'Home',
    components: {
        Header
    },
    data() {
        return {
            user: {},
        }
    },
    mounted() {
        let user = sessionStorage.getItem("user");
        console.log("user:", user);
        if(!user) {
            this.$router.push({ name: 'login' })
        } else {       
            user = JSON.parse(user)
            this.user = user[0]
        }
    }
}
</script>

<style>
.form-links {
    display: block;
    overflow: hidden;
    padding: 50px;
    margin: 0;
}
.form-links button {
    color: #fff;
    background-color:blueviolet;
    margin: 10px;
    padding: 50px;
    cursor: pointer;
}
</style>