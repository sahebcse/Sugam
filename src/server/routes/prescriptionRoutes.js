const express=require('express')
const router=express.Router()

const {getPrescriptionById, createPrescription, deletePrescriptionById} = require('../controllers/prescriptionController')

router.get('/prescription/:id', getPrescriptionById)

router.post('/prescription', createPrescription)

router.delete('/prescription/:id', deletePrescriptionById)

module.exports=router