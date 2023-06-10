<template>
    <div class="create-report">    
        <div class="header-section">
            <Header :user="user" />
        </div>
        <div class="content-section">
            <CreateForm />
        </div>
        <div class="footer-section">
            <Footer />
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import CreateForm from '@/components/CreateForm.vue'

export default {
    name: 'Home',
    components: {
        Header,
        Footer,
        CreateForm,
    },
    data() {
        return {
            user: {},
        }
    },
    mounted() {
        let user = sessionStorage.getItem("user");
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
.create-report {
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