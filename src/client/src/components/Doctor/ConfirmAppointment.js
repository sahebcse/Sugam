import React from 'react'
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'

import {getUnconfirmedAppoinment, confirmAppointment} from '../../actions/User'

export default function ConfirmAppointment() {
  const User = JSON.parse(localStorage.getItem('profile'))
  const navigate = useNavigate()

  const handleConfirm = (id)=>{
    const sendData = {id:id, doctorId:User._id}
    confirmAppointment(sendData, navigate)
    
  }

  const [appointments, setAppoinments]=useState([]);

  useEffect(()=>{
      getUnconfirmedAppoinment(setAppoinments);
  },[])

  console.log(appointments)

  return (
    <div className="m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      { appointments.map(app=>{
        return (
          <div className="flex bg-gray-100 hover:bg-gray-300 p-4 justify-center" >
              <p>{app.description}</p>
              <button className="px-3 py-2 m-2 bg-blue-300 hover:bg-blue-500" onClick={()=>handleConfirm(app._id)}>Confirm</button>
          </div>
        )
      })}
    </div> 
  )
}
