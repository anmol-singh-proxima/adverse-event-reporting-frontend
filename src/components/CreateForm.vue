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
    name: 'CreateForm',
    components: {
        AdverseEventForm,
    },
    data() {
        return {
            user: {},
            formData: {},
            submitButtonText: 'Submit Adverse Event'
        }
    },
    methods: {
        submitForm(formData) {
            this.formData = formData
            const url = 'http://localhost:3000/adverse-events/'
            axios.post(url, this.formData).then(response => {
                if(response.status == 201) {
                    alert("Event submitted successfully!!")
                    this.$router.push({ name: 'view-report' })
                }
            }).catch(error => {
                alert("Event Submission Failed!! See Console Log for more info..")
                console.log("Error:", error)
            }) 
        }
    },
    mounted() {
        axios.get('http://localhost:3000/default-adverse-event-info')
        .then(response => {
            if(response.status === 200) {
                this.formData = response.data
            }            
        }).catch(error => {
            alert("Error in fetching data! See Console Log for more info..")
            console.log("Error:", error)
        })
    }
}
</script>

<style>
.createFormPage {
    clear: both;
}
.createFormPage .leftSide {
    width: 25%;
    float: left;
}
.createFormPage .leftSide .formSections {
    background-color:antiquewhite;
    color: #111;
    text-align: left;
}
.createFormPage .leftSide .formSections span {
    font-size: 14px;
    font-weight: 600;
    width: 100%;
    padding: 12px 18px;
    display: block;
}
.createFormPage .leftSide .formSections span:hover {
    color: #eee;
    background-color: #111;
}
.createFormPage .rightSide {
    width: 75%;
    float: right;
}
.aeForm {
    display: block;
    margin: auto;
    width: 400px;
    padding: 0;
    margin: auto;
}
.aeForm .sectionHeading {
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 10px;
    border-bottom: 1px solid #aaa;
}
.aeForm label, .aeForm input, .aeForm textarea {
    width: 100%;
    margin: auto;
    display: block;
    text-align: left;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.aeForm input, .aeForm textarea {
    font-size: 13px;
    font-weight: 400;
    padding: 6px 12px;
    border: 1px solid #444;
    margin-bottom: 15px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.aeForm label {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 6px;
}
.aeForm .form-buttons {
    clear: both;
    width: auto;
    margin: auto;
}
.aeForm .form-left-button {
    float: left;
}
.aeForm .form-right-button {
    float: right;
}
.aeForm .form-buttons button {
    font-size: 14px;
    font-weight: 400;
    padding: 8px 15px;
    border-radius: 2px;
    color: #fff;
}
.aeForm .form-buttons .previous-btn {
    background-color: dodgerblue;
    border: 1px solid dodgerblue;
}
.aeForm .form-buttons .next-btn {
    background-color:darkgreen;
    border: 1px solid darkgreen;
}
.aeForm .form-buttons .submit-btn {
    background-color:darkred;
    border: 1px solid darkred;
}
</style>