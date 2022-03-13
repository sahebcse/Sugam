import React from 'react'
import {assignPrescription} from '../../actions/User'
import {useNavigate} from 'react-router-dom'

const PrescriptionView = ({pres}) => {
    console.log("hee",pres._id)
    const navigate = useNavigate()
    const User = JSON.parse(localStorage.getItem('profile'))
    const handleSubmit = ()=>{
        const sendData = {id:pres._id, helperId:User?._id}
        assignPrescription(sendData)
        navigate('/dashboard')
    }
  return (
    <div className="flex bg-gray-100 hover:bg-gray-300 p-4 flex-col justify-center" >
        <div className='flex justify-between items-center'>
            <h2 className='font-bold text-rose-700'>{pres?._id}</h2> 
            <h2 className='font-bold text-rose-700'>{pres?.title}</h2>
            <h2 className='font-bold text-rose-700'>{pres?.date}</h2>
        </div>

        <div className='flex'>
            <div>
                <div  className='m-2'>
                    <h2 className='font-semibold text-emerald-400'>Appointment Details</h2>
                    <h2 className='text-gray-700'>Appointment Id: {pres?.appointment._id}</h2>
                    <h2 className='text-gray-700'>Appointment Date: {pres?.date}</h2>
                </div>

                <div className='m-2'>
                    <h2 className='font-semibold text-emerald-400'>Patient Details</h2>
                    <p className='text-gray-700'>Patient Id: {pres?.appointment.patient._id}</p>
                    <p className='text-gray-700'>Patient Name: {pres?.appointment.patient.fullName}</p>
                </div>

                <div className='m-2'>
                    <h2 className='font-semibold text-emerald-400'>Doctor Details</h2>
                    <p className='text-gray-700'>Doctor Id: {pres?.appointment.doctor._id}</p>
                    <p className='text-gray-700'>Patient Name: {pres?.appointment.doctor.fullName}</p>
                </div>
            </div>
            <div>
                <div className='m-2'>
                    <h2 className='font-semibold text-emerald-400'>Instructions</h2>
                    <p className='text-gray-700'>{pres?.generalInstructions}</p>
                </div>
                <div className='m-2'>
                    <h2 className='font-semibold text-emerald-400'>Pic</h2>
                    <img src={require('./static/scanpic.png')} className='mx-auto w-auto h-auto' alt='scan pic' />
                </div>
            </div>
        </div>

        <button className="px-3 py-2 m-2 bg-blue-300 hover:bg-blue-500" onClick={handleSubmit}>Confirm</button>
    </div>
  )
}

export default PrescriptionView