<template>
    <div class="signup">
        <img src="../assets/lilly_logo.png" alt="Lilly Logo" class="logo" />
        <h2 class="heading">Signup to Adverse Event App</h2>
        <form class="form">
            <hr />
            <input type="text" placeholder="Enter Name" v-model="name" />
            <input type="email" placeholder="Enter Email" v-model="email" />
            <input type="password" placeholder="Enter Password" v-model="password" />
            <input type="password" placeholder="Confirm Password" v-model="confirmPassword" />
            <button v-on:click="signup">Signup</button>
        </form>
        <p class="footer">Already a user? <router-link to="/login">Login Here</router-link></p>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
    name: 'Signup',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    mounted() {
        const user = sessionStorage.getItem("user");
        if(user) {
            this.$router.push({ name: 'home' })
        }
    },
    methods: {
        signup(event) {
            event.preventDefault();
            if(this.password !== this.confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
            axios.post('http://localhost:3000/users', {
                name: this.name,
                email: this.email,
                password: this.password,
            }).then(response => {
                if(response.status == 201) {
                    alert("Signed Up Successfully!")
                    this.$router.push({ name: 'login' })
                } else {
                    alert("Signup Failed!")
                }
            }).catch(error => {
                console.log("Error:", error)
            })
        }
    }
}
</script>