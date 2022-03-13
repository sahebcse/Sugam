import { Box, Container, Grid } from '@mui/material'
import React,{useState, useEffect} from 'react'
import DoctorChatWindow from '../../components/chat/DoctorChatWindow'
import HealthcareWorkerChatWindow from '../../components/chat/HealthcareWorkerChatWindow'
import PatientChatWindow from '../../components/chat/PatientChatWindow'
import Room from '../../components/conference/Video'
import {useNavigate, useParams} from 'react-router-dom'

import DoctorInfo from '../../components/Appointment/Doctorinfo'
import UserInfo from '../../components/Appointment/Userinfo'

import Modal from '@mui/material'
import {getAppoinmentDataById} from '../../actions/User'


export default function AppointmentWindow() {
  const navigate = useNavigate()
  const {appointmentId}=useParams()
  const [video, setVideo]=useState(false)
  const worker=JSON.parse(localStorage.getItem("profile"))
  const [appointment, setAppoinment] = useState(null)

  useEffect(()=>{
    getAppoinmentDataById(setAppoinment, appointmentId)
  },[])

  console.log("this",appointment)

  const ChatView = ()=>
  {
      switch(worker.userType){
            case 'PATIENT':
                return <PatientChatWindow />
            case 'DOCTOR':
                return <DoctorChatWindow />
            case 'HEALTHWORKER':
                return <HealthcareWorkerChatWindow />
      }
  }
    return (
 
      <div className="container p-2 m-2a">
        <div className="w-full">
            <h1>Date : {new Date(Date(appointment?.dateCreated)).toDateString()}</h1>
            <p>{appointment?.description}</p>
        </div>
        <div className="grid grid-cols-12 gap-4">
            {video&& <div className="col-span-12">
              <Room />
              <button className="w-full sm:w-1/2 md:w-1/3 rounded px-4 py-2 m-2 bg-red-300 hover:bg-red-500 " onClick={()=>setVideo(false)}>
                close
              </button>
            </div> }
            <div className="col-span-12 lg:col-span-8">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <DoctorInfo appointment={appointment}/>
                <div className=" rounded border p-3 rounded-xl shadow-2xl hover:shadow-sm cursor-pointer" onClick={()=>setVideo(!video)}>
                <img src={require('../../components/Appointment/static/video.png')} className='mx-auto h-64'/>
                    Video
                </div>
                <UserInfo appointment={appointment}/>
                
                <div className=" rounded border p-3 rounded-xl shadow-2xl hover:shadow-sm cursor-pointer" onClick={()=>navigate(`/prescription/${appointmentId}`, {state:appointment?.prescription})}>
                <img src={require('../../components/Appointment/static/medicine.png')} className='mx-auto h-64'/>
                    Prescription
                </div>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-4 order-first md:order-last">
              <ChatView />
            </div>
        </div>

      </div>
  )
}
