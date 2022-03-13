const mongoose=require('mongoose')

const appointmentSchema=new mongoose.Schema({
    patient: {type: mongoose.Schema.Types.ObjectId, ref: 'Patient'},
    doctor: {type: mongoose.Schema.Types.ObjectId, ref: 'Doctor'},
    doctorAssigned: {
        type: Boolean,
        default: false
    },
    pincode: {
        type: Number,
        required: true
    },
    emergency: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        default: 'created'  //status will be of form: created, scheduled, resolved, unresolved, sos
    },
    typeOfEmergency: {
        type: String
    },
    description: {
        type: String,
        default: ''
    },
    dateCreated: {
        type: String,
        default: Date.now
    },
    dateScheduled: {
        type: String
    },
    prescription: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prescription'
    }],
    healthcareWorker:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'HealthcareWorker'
    },
    latitude: {
        type: Number
    },
    longitude:
    {
        type: Number
    }
})

const Appointment=mongoose.model('Appointment', appointmentSchema)

module.exports=Appointment