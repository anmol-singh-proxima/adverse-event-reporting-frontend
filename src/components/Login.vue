<template>
    <div class="login">
        <img src="../assets/lilly_logo.png" alt="Lilly Logo" class="logo" />
        <h2 class="heading">Login to Adverse Event App</h2>
        <form class="form">
            <hr />
            <input type="email" placeholder="Enter Email" v-model="email" />
            <input type="password" placeholder="Enter Password" v-model="password" />
            <button v-on:click="login">Login</button>
        </form>
        <p class="footer">New User? <router-link to="/signup">Signup Here</router-link></p>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    mounted() {
        const user = sessionStorage.getItem("user");
        console.log("User:", user);
        if(user) {
            this.$router.push({ name: 'home' })
        } else {
            console.log("No User");
        }
    },
    methods: {
        login(event) {
            event.preventDefault();
            axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`).then(response => {
                if(response.status === 200 && response.statusText === 'OK' && response.data.length>0) {
                    sessionStorage.setItem("user", JSON.stringify(response.data))
                    this.$router.push({ name: 'home' })
                } else {
                    alert("Logged in Failed!")
                }
            }).catch(error => {
                console.log("error:", error)
            })
        }
    }
}
</script>