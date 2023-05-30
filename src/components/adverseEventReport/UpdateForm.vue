<template>
    <div>
        <Header :user="user" />
        <AdverseEventForm
            :data="formData"
            :submitForm="submitForm"
            :submitButtonText="submitButtonText" />
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import Header from '../Header.vue'
import AdverseEventForm from './AdverseEventForm.vue'

export default {
    name: 'UpdateForm',
    components: {
        Header,
        AdverseEventForm,
    },
    data() {
        return {
            user: {},
            formData: {},
            formId: '',
            submitButtonText: 'Update Adverse Event'
        }
    },
    methods: {
        submitForm(data) {
            this.formData = data
            console.log("Formdata:", this.formData)
            const url = `http://localhost:3000/adverse-events/${this.formId}`
            axios.put(url, this.formData).then(response => {
                if(response.status == 200) {
                    alert("Event Updated successfully!!")
                    this.currentSectionIndex = 0;
                    this.$router.push({ name: 'viewform' })
                }
            }).catch(error => {
                alert("Error in Updating the Event! Check Console Log for more info..")
                console.log("Error:", error)
            }) 
        }
    },
    mounted() {
        let user = sessionStorage.getItem("user");
        console.log("user:", user);
        if(!user) {
            this.$router.push({ name: 'login' })
        }
        user = JSON.parse(user)
        this.user = user[0]
        this.formId = this.$route.params.id
        axios.get(`http://localhost:3000/adverse-events/${this.formId}`)
        .then(response => {
            if(response.status === 200) {
                this.formData = response.data
            }
        }).catch(error => {
            alert("Data fetching failed! Check Console Log for more info..")
            console.log("Error:", error)
        })
    }
}
</script>