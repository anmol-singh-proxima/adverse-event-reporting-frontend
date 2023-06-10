<template>
    <div class="increments-page">    
        <div class="header-section">
            <Header :user="user" />
        </div>
        <div class="content-section">

        </div>
        <div class="footer-section">
            <Footer />
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'Home',
    components: {
        Header,
        Footer
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
.increments-page {
    padding: 0;
    margin: 0;
    display: grid;
    /* grid-template-columns: 25% 25% 25% 25%; */
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 50px auto 50px;
    min-height: 100vh;
}
.header-section {
    grid-column: 1/6;
    grid-row: 1/2;
}
.content-section {
    grid-column: 1/6;
    grid-row: 2/3;
}
.footer-section {
    grid-column: 1/6;
    grid-row: 3/4;
    margin-top: auto;
}
</style>