<!--
#. This is the UpdateReportPage
#. This page contains 3 sections like HomePage:
    - header-section - this section contains the HeaderComponent
    - content-section - this section contains the individual content of the UpdateReportPage
    - footer-section - this section contains the FooterComponent
#. It contains UpdateFormComponent to update an existing adverse-event form data
-->

<template>
    <div class="update-report">    
        <div class="header-section">
            <Header :user="user" />
        </div>
        <div class="content-section">
            <UpdateForm :formId="formId"/>
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
import UpdateForm from '@/components/UpdateForm.vue'

export default {
    name: 'Home',
    components: {
        Header,
        Footer,
        UpdateForm,
    },
    data() {
        return {
            formId: null,
            user: {},
        }
    },
    created() {
        console.log("in Parent created()")
        let user = sessionStorage.getItem("user");
        console.log("user:", user);
        if(user === null) {
            this.$router.push({ name: 'login' })
        } else {       
            user = JSON.parse(user)
            this.user = user[0]
            this.formId = this.$route.params.id
            console.log("formid:", this.formId)
            console.log("typeof formId:", typeof(this.formId))
        }
    }
}
</script>

<style>
.update-report {
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