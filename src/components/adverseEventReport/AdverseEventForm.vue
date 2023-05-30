<template>
    <div class="createFormPage">
        <div class="leftSide">
            <h2 class="heading">Adverse Event Report</h2>
            <hr/>
            <div class="formSections">
                <span 
                    v-for="(item, index) in formSectionMenu" 
                    :key="index"
                    :class="{ 'span-active': formSectionMenuIndex === index,
                            'span-inactive': formSectionMenuIndex !== index }"
                    @click="handleFormMenuClick(index)"
                >{{item}}</span>
            </div>
        </div>
        <div class="rightSide">
        <form class="aeForm">
            <section v-if="currentSectionIndex === 0">
                <h3 class="sectionHeading">General Information</h3>
                <label>Your Name</label>
                <input type="text" v-model="formData.generalInfo.name" />
                <label>Date Reported to You (DD-MM-YYYY)</label>
                <input type="date" v-model="formData.generalInfo.reportingDate" required />
                <label>Type of Event</label>
                <input type="text" v-model="formData.generalInfo.typeOfEvent" />
                <label>Country the Event Occurred In</label>
                <input type="text" v-model="formData.generalInfo.countryOfEvent" />
            </section>
            <section v-if="currentSectionIndex === 1">
                <h3 class="sectionHeading">Patient Information</h3>
                <label>Patient Initials</label>
                <input type="text" v-model="formData.patientInfo.initial" />
                <label>Patient Age at Time of Event</label>
                <input type="text" v-model="formData.patientInfo.age" />
                <label>Patient Date of Birth (DD-MMM-YYYY)</label>
                <input type="date" v-model="formData.patientInfo.dob" />
                <label>Patient Gender</label>
                <input type="text" v-model="formData.patientInfo.gender" />
            </section>
            <section v-if="currentSectionIndex === 2">
                <h3 class="sectionHeading">Reporter Information</h3>
                <label>Reporter's Name</label>
                <input type="text" v-model="formData.reporterInfo.reporterName" />
                <label>Reporter's Occupation</label>
                <input type="text" v-model="formData.reporterInfo.reporterOccupation" />
                <label>Reporter's E-mail</label>
                <input type="email" v-model="formData.reporterInfo.reporterEmail" />
                <label>Reporter's Phone No</label>
                <input type="text" v-model="formData.reporterInfo.reporterPhone" />
                <label>Reporter's Address &amp; Postcode</label>
                <textarea rows="3" v-model="formData.reporterInfo.reporterAddress"></textarea>
                <label>Consent Given by the Reporter to be Contacted for Additional Information?</label>
                <input type="text" v-model="formData.reporterInfo.reporterConsent" />
            </section>
            <section v-if="currentSectionIndex === 3">
                <h3 class="sectionHeading">Drug/Device Information</h3>
                <label>Suspect Drug or Device / Dose / Frequency</label>
                <input type="text" v-model="formData.drugInfo.suspectDrug" />
                <label>Indication / Route of Administration</label>
                <input type="text" v-model="formData.drugInfo.indication" />
                <label>Is the Product Being Returned?</label>
                <input type="text" v-model="formData.drugInfo.productReturned" />
                <label>Drug Status</label>
                <input type="text" v-model="formData.drugInfo.drugStatus" />
                <label>Location of Device</label>
                <input type="text" v-model="formData.drugInfo.locationOfDevice" />
                <label>Lot / Batch Number</label>
                <input type="text" v-model="formData.drugInfo.batchNumber" />
            </section>
            <section v-if="currentSectionIndex === 4">
                <h3 class="sectionHeading">Event Information</h3>
                <label>Event Description</label>
                <textarea rows="5" v-model="formData.eventInfo.description"></textarea>
                <label>Onset Date (DD-MMM-YYYY)</label>
                <input type="" v-model="formData.eventInfo.onsetDate" />
                <label>Outcome</label>
                <input type="" v-model="formData.eventInfo.outcome" />
            </section>
            <section v-if="currentSectionIndex === 5">
                <h3 class="sectionHeading">Other Information</h3>
                <label>Other Information (e.g. details of product return, medical history, concomitant medications)</label>
                <textarea rows="5" v-model="formData.otherInfo.otherInformation"></textarea>
                <label>Did the Reporter consider that the event was possibly related to the suspect drug/device?</label>
                <input type="text" v-model="formData.otherInfo.reporterConsideration" />
            </section>
            <div class="form-buttons">
                <div class="form-left-button">
                    <button v-if="currentSectionIndex > 0" @click="previousSection" class="previous-btn">Previous</button>
                </div>
                <div class="form-right-button">
                    <button v-if="currentSectionIndex < totalSections - 1" @click="nextSection" class="next-btn">Next</button>
                    <button type="submit" v-if="currentSectionIndex === totalSections - 1" @click="submitFormData" class="submit-btn">{{submitButtonText}}</button>
                </div>
            </div>
        </form>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'AdverseEventForm',
    props: {
        data: {
            type: Object,
            required: true,
        },
        submitForm: {
            type: Function,
            required: true,
        },
        submitButtonText: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            formData: {
                generalInfo: {
                    name: '',
                    reportingDate: '',
                    typeOfEvent: '',
                    countryOfEvent: '',
                },
                patientInfo: {
                    initial: '',
                    age: '',
                    dob: '',
                    gender: '',
                },
                reporterInfo: {
                    reporterName: '',
                    reporterOccupation: '',
                    reporterEmail: '',
                    reporterPhone: '',
                    reporterAddress: '',
                    reporterConsent: '',
                },
                drugInfo: {
                    suspectDrug: '',
                    indication: '',
                    productReturned: '',
                    drugStatus: '',
                    locationOfDevice: '',
                    batchNumber: '',
                },
                eventInfo: {
                    description: '',
                    onsetDate: '',
                    outcome: ''
                },
                otherInfo: {
                    otherInformation: '',
                    reporterConsideration: ''
                }
            },
            currentSectionIndex: 0,
            totalSections: 6,
            formSectionMenu: [
                'General Information',
                'Patient Information',
                'Reporter Information',
                'Drug/Device Information',
                'Event Information',
                'Other Information',
            ],
            formSectionMenuIndex: 0,
        }
    },
    watch: {
        // Check for the changes in 'this.data' value
        data(newVal, oldVal) {
            this.formData = newVal
        }
    },
    methods: {
        handleFormMenuClick(index) {
            this.currentSectionIndex = index
            this.formSectionMenuIndex = index
        },
        submitFormData(event) {
            event.preventDefault()
            this.submitForm(this.formData)
        },
        nextSection(event) {
            event.preventDefault()
            this.currentSectionIndex++
            this.formSectionMenuIndex = this.currentSectionIndex
        },
        previousSection(event) {
            event.preventDefault()
            this.currentSectionIndex--
            this.formSectionMenuIndex = this.currentSectionIndex
        }
    },
    mounted() {
        // Check if 'this.data' is not empty
        if(Object.keys(this.data).length !== 0) {
            this.formData = this.data
        }
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
    text-align: left;
}
.createFormPage .leftSide .formSections span {
    font-size: 14px;
    font-weight: 600;
    width: 100%;
    padding: 12px 18px;
    display: block;
    cursor: pointer;
}
.span-inactive {
    color: #111;
    background-color:antiquewhite;
}
.span-active {
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