<!--
#. This is the ViewAllReportsDataComponent
#. This Component fetches all the adverse-events data from the database through API call
#. It displays a few details of all the adverse-events in the tabular form
#. For each adverse-event record, there is a button 'View Full Data' which redirects the user to 'ViewSingleReportPage' to see full data
-->

<template>
    <div>
        <div class="formData">
            <h1>Adverse Events Form Data</h1>
            <table class="formDataTable">
                <tr>
                    <th>ID</th>
                    <th>Patient Info</th>
                    <th>Event Info</th>
                    <th>Actions</th>
                </tr>
                <tr v-for="formData in data" :data="formData" v-bind:key="formData.id">
                    <td>{{formData.id}}</td>
                    <td>
                        <div class="form-property">
                            <label>Initial:</label>
                            <span>{{formData.patientInfo.initial}}</span>
                        </div>
                        <div class="form-property">
                            <label>Age:</label>
                            <span>{{formData.patientInfo.age}}</span>
                        </div>
                        <div class="form-property">
                            <label>Gender:</label>
                            <span>{{formData.patientInfo.gender}}</span>
                        </div>
                    </td>
                    <td>
                        <div class="form-property">
                            <label>Description:</label>
                            <span>{{formData.eventInfo.description}}</span>
                        </div>
                        <div class="form-property">
                            <label>Onset Date:</label>
                            <span>{{formData.eventInfo.onsetDate}}</span>
                        </div>
                        <div class="form-property">
                            <label>Outcome:</label>
                            <span>{{formData.eventInfo.outcome}}</span>
                        </div>
                    </td>
                    <td class="form-btns">
                        <router-link :to="'/report/view/'+formData.id" class="view-full-btn">View Full Data</router-link>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'ViewAllReportsData',
    props: {
        data: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
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
.formDataTable .inside-table {
    border: 0;
    border-collapse: collapse;
}
.formDataTable .form-property {
    margin-bottom: 10px;
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
.formDataTable .form-btns .view-full-btn {
    padding: 6px 12px;
    text-decoration: none;
    margin: 10px;
    color: #fff;
    width: fit-content;
    display: block;
    background-color: green;
    border: 1px solid green;
}
</style>