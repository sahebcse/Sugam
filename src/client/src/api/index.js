import axios from 'axios'
import {config} from '../config/urlConfig'

const URL = config.url
//sign up APi

export const loginDoctorAPI = (sendData) =>axios.post(`${URL}/doctor`, sendData);

export const loginPateintAPI = (sendData) =>axios.post(`${URL}/patient`, sendData);

export const loginHelperAPI = (sendData) =>axios.post(`${URL}/healthcareworker`, sendData);

export const CustomloginDoctorAPI = (sendData) =>axios.post(`${URL}/doctor`, sendData);

export const CustomloginPateintAPI = (sendData) =>axios.post(`${URL}/patient`, sendData);

export const CustomloginHelperAPI = (sendData) =>axios.post(`${URL}/healthcareworker`, sendData);

//Sign in APi

export const loginPatient = (sendData) => axios.post(`${URL}/patient/login`, sendData);

export const loginDoctor = (sendData) => axios.post(`${URL}/doctor/login`, sendData);

export const loginHelper = (sendData) => axios.post(`${URL}/helper/login`, sendData);

//Appointment API

export const bookAppointment = (sendData) => axios.post(`${URL}/appointment`, sendData)

export const getAppoinmentDataById = (sendData) => axios.get(`${URL}/appointment/${sendData}`)

export const getAppointmentsByPatient = (sendData) =>axios.get(`${URL}/allappointments/patient/${sendData}`)

export const getBookedAppointmentsByPatient = (sendData) => axios.get(`${URL}/allappointments/patient/${sendData}`)

export const getAppointmentsByPincode = (sendData) => axios.get(`${URL}/appointments/${sendData.pincode}`)

export const getUnconfirmedAppoinment = ()=> axios.get(`${URL}/appointments/all`)

export const getDoctorAppointments = (sendData)=> axios.get(`${URL}/doctorAppointments/${sendData.id}/${sendData.status}`)

export const uploadPrescription = (sendData)=> axios.post(`${URL}/prescription/`, sendData)
//Emergency API

export const createEmergency= (sendData) => axios.post(`${URL}/emergency`, sendData)

export const confirmAppointment= (sendData) => axios.post(`${URL}/confirmAppointment`, sendData)

export const getEmergenciesByPatient = (sendData) => axios.get(`${URL}/allemergencies/patient/${sendData}`)

export const getBookedEmergenciesPatient = (sendData) => axios.get(`${URL}/allemergencies/patient/${sendData}`)

export const getUnconfirmedEmergency = (sendData) => axios.get(`${URL}/emergency/${sendData.pincode}/${sendData.status}`)

//Patient API

export const getPatientById = (sendData) =>axios.get(`${URL}/patient/${sendData.patientId}`)