<!--
#. This is the ViewSingleReportDataComponent
#. This Component contains
    - All the details of selected adverse-event fetched from the database through API call
    - 2 actions to Update and Delete the adverse-event data
#. To Update the form data, it redirects the user to UpdateReportPage
#. To Delete the form data, it does API call to the database
#. After successfully deleting the adverse-event, it redirects the user to 'ViewAllReportsPage'
-->

<template>
    <div>
        <div v-if="formData" class="single-report-data">
            <h3>Case ID: Case_{{formData.id}}</h3>
            <div class="data-cards">
                <div class="data-card" v-if="formData.generalInfo">
                    <div class="card-header">
                        <span>General Info</span>   
                    </div>
                    <div class="card-body">
                        <div class="data-key-value">
                            <label>Name:</label>
                            <span>{{formData.generalInfo.name}}</span><br/>    
                        </div>
                        <div class="data-key-value">
                            <label>Reporting Date:</label>
                            <span>{{formData.generalInfo.reportingDate}}</span><br/>  
                        </div>
                        <div class="data-key-value">
                            <label>Type of Event:</label>
                            <span>{{formData.generalInfo.typeOfEvent}}</span><br/>  
                        </div>
                        <div class="data-key-value">
                            <label>Country of Event:</label>
                            <span>{{formData.generalInfo.countryOfEvent}}</span><br/> 
                        </div>
                    </div>
                </div>
                <div class="data-card" v-if="formData.patientInfo">
                    <div class="card-header">
                        <span>Patient Info</span>   
                    </div>
                    <div class="card-body">
                        <div class="data-key-value">    
                            <label>Initial:</label>
                            <span>{{formData.patientInfo.initial}}</span><br/>
                        </div>
                        <div class="data-key-value">
                            <label>Age:</label>
                            <span>{{formData.patientInfo.age}}</span><br/>
                        </div>
                        <div class="data-key-value">
                            <label>DOB:</label>
                            <span>{{formData.patientInfo.dob}}</span><br/>
                        </div>
                        <div class="data-key-value">
                            <label>Gender:</label>
                            <span>{{formData.patientInfo.gender}}</span><br/>
                        </div>
                    </div>
                </div>
                <div class="data-card" v-if="formData.reporterInfo">
                    <div class="card-header">
                        <span>Reporter Info</span>  
                    </div>
                    <div class="card-body">
                        <div class="data-key-value">
                            <label>Name:</label>
                            <span>{{formData.reporterInfo.reporterName}}</span><br/>
                        </div>
                        <div class="data-key-value">
                            <label>Occupation:</label>
                            <span>{{formData.reporterInfo.reporterOccupation}}</span><br/>
                        </div>
                        <div class="data-key-value">
                            <label>Email:</label>
                            <span>{{formData.reporterInfo.reporterEmail}}</span><br/>
                        </div>
                        <div class="data-key-value">
                            <label>Phone:</label>
                            <span>{{formData.reporterInfo.reporterPhone}}</span><br/>
                        </div>
                        <div class="data-key-value">
                            <label>Address:</label>
                            <span>{{formData.reporterInfo.reporterAddress}}</span><br/>
                        </div>
                        <div class="data-key-value">
                            <label>Consent:</label>
                            <span>{{formData.reporterInfo.reporterConsent}}</span><br/>
                        </div>
                    </div>
                </div>
                <div class="data-card" v-if="formData.drugInfo">
                    <div class="card-header">
                        <span>Drug Info</span>  
                    </div>
                    <div class="card-body">
                        <div class="data-key-value">
                            <label>Suspect Drug:</label>
                            <span>{{formData.drugInfo.suspectDrug}}</span><br/>
                        </div>
                        <div class="data-key-value">
                            <label>Indication:</label>
                            <span>{{formData.drugInfo.indication}}</span><br/>
                        </div>
                        <div class="data-key-value">
                            <label>Product Returned:</label>
                            <span>{{formData.drugInfo.productReturned}}</span><br/>
                        </div>
                        <div class="data-key-value">
                            <label>Drug Status:</label>
                            <span>{{formData.drugInfo.drugStatus}}</span><br/>
                        </div>
                        <div class="data-key-value">
                            <label>Location Of Device:</label>
                            <span>{{formData.drugInfo.locationOfDevice}}</span><br/>
                        </div>
                        <div class="data-key-value">
                            <label>Batch Number:</label>
                            <span>{{formData.drugInfo.batchNumber}}</span><br/>
                        </div>
                    </div>
                </div>
                <div class="data-card" v-if="formData.eventInfo">
                    <div class="card-header">
                        <span>Event Info</span> 
                    </div>
                    <div class="card-body">
                        <div class="data-key-value">
                            <label>Description:</label>
                            <span>{{formData.eventInfo.description}}</span><br/>
                        </div>
                        <div class="data-key-value">
                            <label>Onset Date:</label>
                            <span>{{formData.eventInfo.onsetDate}}</span><br/>
                        </div>
                        <div class="data-key-value">
                            <label>Outcome:</label>
                            <span>{{formData.eventInfo.outcome}}</span><br/>
                        </div>
                    </div>
                </div>
                <div class="data-card" v-if="formData.otherInfo">
                    <div class="card-header">
                        <span>Other Info</span> 
                    </div>
                    <div class="card-body">
                        <div class="data-key-value">
                            <label>Other Information:</label>
                            <span>{{formData.otherInfo.otherInformation}}</span><br/>
                        </div>
                        <div class="data-key-value">
                            <label>Reporter Consideration:</label>
                            <span>{{formData.otherInfo.reporterConsideration}}</span><br/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="action-btns">
                <router-link :to="'/report/update/'+formData.id" class="update-btn">Update</router-link>
                <button v-on:click="deleteForm(formData.id)" class="delete-btn" >Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
    name: 'ViewSingleReportData',
    props: {
        data: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            formData: null,
        }
    },
    watch: {
        data(newValue) {
            this.formData = newValue
        }
    },
    created() {
        this.formData = this.data;
    },
    methods: {
        deleteForm(id) {
            if (confirm("Are you sure you want to Delete the Event?") === true) {
                axios.delete(`http://localhost:3000/adverse-events/${id}`)
                .then(response => {
                    if(response.status === 200) {
                        alert("Event Deleted Successfully!!")
                        this.$router.push({ name: 'view-report' })
                    }
                }).catch(error => {
                    alert("Event Deletion Failed!! See Console Log for more info..")
                    console.log("Error:", error)
                })
            }
        }
    }
}
</script>

<style>
.data-cards {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: auto;
    text-align: left;
}
.data-cards .data-card {
    box-sizing: border-box;
    display: inline-block;
    width: 31%;
    margin: 10px;
    border: 1px solid rgba(150,160,170,0.5);
}
.data-card .card-header {
    font-size: 16px;
    line-height: 1.3;
    font-weight: 600;
    padding: 15px;
    border-bottom: 1px solid rgba(150,160,170,0.5);
}
.data-card .card-body {
    padding: 15px;
}
.data-key-value {
    font-size: 14px;
    line-height: 1.3;
}
.data-key-value label {
    font-weight: 600;
}
.data-key-value span {
    display: inline;
    padding-left: 10px;
}
.action-btns > * {
    font-size: 15px;
    padding: 8px 16px;
    margin: 10px;
    text-decoration: none;
    color: #fff;
    border-radius: 3px;
}
.action-btns .update-btn {
    background-color: green;
    border: 1px solid green;
}
.action-btns .delete-btn {
    background-color: red;
    border: 1px solid red;
}
</style>