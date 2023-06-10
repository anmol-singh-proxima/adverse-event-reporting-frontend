<template>
    <div>
        <AdverseEventForm
            :data="formData"
            :submitForm="submitForm"
            :submitButtonText="submitButtonText" />
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import AdverseEventForm from './AdverseEventForm.vue'

export default {
    name: 'UpdateForm',
    components: {
        AdverseEventForm,
    },
    props: {
        formId: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            user: {},
            formData: {},
            submitButtonText: 'Update Adverse Event'
        }
    },
    methods: {
        submitForm(data) {
            this.formData = data
            console.log("Formdata in UpdateForm:", this.formData)
            const url = `http://localhost:3000/adverse-events/${this.formId}`
            axios.put(url, this.formData).then(response => {
                if(response.status == 200) {
                    alert("Event Updated successfully!!")
                    this.currentSectionIndex = 0;
                    this.$router.push({ name: 'view-report' })
                }
            }).catch(error => {
                alert("Error in Updating the Event! Check Console Log for more info..")
                console.log("Error:", error)
            }) 
        }
    },
    mounted() {
        console.log("formId in UpdateForm:", this.formId)
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