<!--
#. This is the ViewFormComponent
#. This Component contains
    - All the adverse-events form data fetched from the database through API call
    - 2 actions to Update and Delete the individual adverse-event form data
#. To Update the form data, it redirects the user to UpdateReportPage
#. To Delete the form data, it does API call to the database
#. After successfully deleting an adverse-event, it re-renders the updated adverse-events form data
-->

<template>
    <div>
        <div class="formData">
            <h1>View Form Data</h1>
            <table class="formDataTable">
                <tr>
                    <th>ID</th>
                    <th>General Info</th>
                    <th>Patient Info</th>
                    <th>Reporter Info</th>
                    <th>Drug Info</th>
                    <th>Event Info</th>
                    <th>Other Info</th>
                    <th>Actions</th>
                </tr>
                <tr v-for="formData in aeFormData" :data="formData" v-bind:key="formData.id">
                    <td>{{formData.id}}</td>
                    <td>
                        <label>Name:</label>
                        <span>{{formData.generalInfo.name}}</span><br/>
                        <label>Reporting Date:</label>
                        <span>{{formData.generalInfo.reportingDate}}</span><br/>
                        <label>Type of Event:</label>
                        <span>{{formData.generalInfo.typeOfEvent}}</span><br/>
                        <label>Country of Event:</label>
                        <span>{{formData.generalInfo.countryOfEvent}}</span><br/>
                    </td>
                    <td>
                        <label>Initial:</label>
                        <span>{{formData.patientInfo.initial}}</span><br/>
                        <label>Age:</label>
                        <span>{{formData.patientInfo.age}}</span><br/>
                        <label>DOB:</label>
                        <span>{{formData.patientInfo.dob}}</span><br/>
                        <label>Gender:</label>
                        <span>{{formData.patientInfo.gender}}</span><br/>
                    </td>
                    <td>
                        <label>Reporter Name:</label>
                        <span>{{formData.reporterInfo.reporterName}}</span><br/>
                        <label>Reporter Occupation:</label>
                        <span>{{formData.reporterInfo.reporterOccupation}}</span><br/>
                        <label>Reporter Email:</label>
                        <span>{{formData.reporterInfo.reporterEmail}}</span><br/>
                        <label>Reporter Phone:</label>
                        <span>{{formData.reporterInfo.reporterPhone}}</span><br/>
                        <label>Reporter Address:</label>
                        <span>{{formData.reporterInfo.reporterAddress}}</span><br/>
                        <label>Reporter Consent:</label>
                        <span>{{formData.reporterInfo.reporterConsent}}</span><br/>
                    </td>
                    <td>
                        <label>Suspect Drug:</label>
                        <span>{{formData.drugInfo.suspectDrug}}</span><br/>
                        <label>Indication:</label>
                        <span>{{formData.drugInfo.indication}}</span><br/>
                        <label>Product Returned:</label>
                        <span>{{formData.drugInfo.productReturned}}</span><br/>
                        <label>Drug Status:</label>
                        <span>{{formData.drugInfo.drugStatus}}</span><br/>
                        <label>Location Of Device:</label>
                        <span>{{formData.drugInfo.locationOfDevice}}</span><br/>
                        <label>Batch Number:</label>
                        <span>{{formData.drugInfo.batchNumber}}</span><br/>
                    </td>
                    <td>
                        <label>Description:</label>
                        <span>{{formData.eventInfo.description}}</span><br/>
                        <label>Onset Date:</label>
                        <span>{{formData.eventInfo.onsetDate}}</span><br/>
                        <label>Outcome:</label>
                        <span>{{formData.eventInfo.outcome}}</span><br/>
                    </td>
                    <td>
                        <label>Other Information:</label>
                        <span>{{formData.otherInfo.otherInformation}}</span><br/>
                        <label>Reporter Consideration:</label>
                        <span>{{formData.otherInfo.reporterConsideration}}</span><br/>
                    </td>
                    <td class="form-btns">
                        <router-link :to="'/report/update/'+formData.id" class="update-btn">Update</router-link>
                        <button v-on:click="deleteForm(formData.id)" class="delete-btn" >Delete</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
    name: 'ViewForm',
    data() {
        return {
            user: {},
            aeFormData: {},
        }
    },
    mounted() {
        this.loadComponent()
    },
    methods: {
        loadComponent() {
            axios.get('http://localhost:3000/adverse-events/')
            .then(response => {
                console.log("Response:", response.data)
                this.aeFormData = response.data
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
.formData {
    padding: 10px;
}
.formDataTable {
    border-collapse: collapse;
}
.formDataTable th, .formDataTable td {
    border: 1px solid #111;
    text-align: left;
    padding: 6px 12px;
}
.formDataTable th {
    font-size: 16px;
}
.formDataTable td {
    font-size: 14px;
}
.formDataTable label {
    font-weight: 400;
}
.formDataTable span {
    font-weight: 600;
}
.formDataTable .form-btns {
    text-align: center;
}
.formDataTable .form-btns > * {
    padding: 6px 12px;
    margin: 5px;
    text-decoration: none;
    margin: 10px;
    color: #fff;
}
.formDataTable .form-btns .update-btn {
    background-color: green;
    border: 1px solid green;
}
.formDataTable .form-btns .delete-btn {
    background-color: red;
    border: 1px solid red;
}
</style>