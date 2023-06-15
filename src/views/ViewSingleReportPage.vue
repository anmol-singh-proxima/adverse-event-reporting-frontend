<!--
#. This is the ViewSingleReportPage
#. This page contains 3 sections like HomePage:
    - header-section - this section contains the HeaderComponent
    - content-section - this section contains the individual content of the ViewSingleReportPage
    - footer-section - this section contains the FooterComponent
#. It contains ViewSingleReportDataComponent to display all the details of the selected adverse-events
-->

<template>
    <div class="view-report">    
        <div class="header-section">
            <Header :user="user" />
        </div>
        <div class="content-section">
            <ViewSingleReportData :data="formData" />
        </div>
        <div class="footer-section">
            <Footer />
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import axios from  'axios'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ViewSingleReportData from '@/components/ViewSingleReportData.vue'

export default {
    name: 'ViewSingleReportPage',
    components: {
        Header,
        Footer,
        ViewSingleReportData,
    },
    data() {
        return {
            user: {},
            formId: null,
            formData: {},
        }
    },
    created() {
        let user = sessionStorage.getItem("user");
        console.log("user:", user);
        if(!user) {
            this.$router.push({ name: 'login' })
        } else {       
            user = JSON.parse(user)
            this.user = user[0]
            this.formId = this.$route.params.id
            this.loadComponent()
        }
    },
    methods: {
        loadComponent() {
            axios.get(`http://localhost:3000/adverse-events/${this.formId}`)
            .then(response => {
                console.log("Response:", response.data)
                this.formData = response.data
            }).catch(error => {
                alert("Error in fetching data! See Console Log for more info..")
                console.log("Error:", error)
            })
        },
        deleteForm(id) {
            axios.delete(`http://localhost:3000/adverse-events/${id}`)
            .then(response => {
                if(response.status === 200) {
                    alert("Event Deleted Successfully!!")
                    this.loadComponent()
                }
            }).catch(error => {
                alert("Event Deletion Failed!! See Console Log for more info..")
                console.log("Error:", error)
            })
        }
    }
}
</script>

<style>
.view-report {
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