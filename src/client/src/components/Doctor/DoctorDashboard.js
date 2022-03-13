import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {getBookedAppointments, getResolvedAppointments} from '../../actions/User'


export default function DoctorDashboard() {
    const navigate=useNavigate()

    const user = JSON.parse(localStorage.getItem('profile'))

    const [currentAppointments, setCurrentAppointments]= useState(0);
    const [bookedAppointments, setBookedAppointments]= useState([])
    const [resolvedAppointments, setResolvedAppointments]= useState([]);

    useEffect(()=>{
        getBookedAppointments(setBookedAppointments,{id:user._id, status:"scheduled"});
        getResolvedAppointments(setResolvedAppointments,{id:user._id, status:"resolved"});
    },[])

    const navigateToConfirmAppointment=()=>
    {
        navigate('/confirm_appointment')
    }

    const navigateToRespondSos=()=>
    [
        navigate('/respond_to_sos')
    ]
  return (<div className='col-span-7 md:col-span-5'>
  <div className='mt-10 bg-gradient-to-r from-indigo-600 to-indigo-100 py-20 rounded-xl grid md:grid-cols-2'>
      <div className='p-16'>
          {/* <h1 className='text-5xl font-semibold text-white'>Sugam Shauchalay</h1>
          <p className='text-xl text-white mt-10'>Warna na karein</p>
          <h2 className='text-4xl text-white font-bold'>Karein toh yahin karein</h2> */}
          <button className='rounded-xl bg-white p-5 mt-10 text-indigo-800 font-semibold'>Know More</button>
      </div>
      
      <div className='p-10'>
          <img className='w-96 h-max' src={require('./static/textclear.png')} />
      </div>

  </div>

  <div className='mt-10 grid md:grid-cols-3 gap-10'>
          <div onClick={navigateToConfirmAppointment} className='p-5 place-content-center rounded-xl shadow-2xl hover:shadow-sm cursor-pointer'>
              <img src={require('./static/online-interview.png')} className='mx-auto h-64' />
              <p className='text-2xl font-semibold mx-auto mt-5 text-center'>
                  Confirm an Appointment
              </p>
              <p className=''>

              </p>
          </div>

          <div onClick={navigateToRespondSos}  className='p-5 place-content-center shadow-2xl hover:shadow-sm cursor-pointer'>
              <img src={require('./static/sos.png')} className='mx-auto h-64'/>
              <p className='text-2xl ml-10 font-semibold mx-auto text-center mt-5'>
                  Respond to an Emergency
              </p>
              <p className=''>

              </p>
          </div>

          <div  className='p-5 shadow-2xl place-content-center hover:shadow-sm cursor-pointer'>
              <img src={require('./static/prescription.png')} className='mx-auto h-64' />
              <p className='text-2xl font-semibold mx-auto text-center mt-5'>
                  Create a Prescription
              </p>
              <p className=''>

              </p>
          </div>
          

      </div>


    <div className="w-full flex justify-center m-10">
        <button className="px-4 py-2 bg-blue-300 text-3xl m-1 font-semibold rounded focus:bg-green-500 hover:bg-blue-700" onClick={()=>setCurrentAppointments(0)}>
            Booked Appointments
        </button>
        <button className="px-4 py-2 bg-blue-300 text-3xl m-1 font-semibold rounded focus:bg-green-500 hover:bg-blue-700" onClick={()=>setCurrentAppointments(1)}>
            Resolved Appointments
        </button>
    </div>

    {currentAppointments===0 && <div className='mt-10'>
        {
            bookedAppointments.map((appointment)=>{

                return (
                    <div onClick={()=>navigate(`/appointment/${appointment._id}`)}>
                        <div  className='mt-5 p-5 shadow-2xl bg-red-300 cursor-pointer'>
                    <p className='text-2xl'>{appointment.description}</p>
                    <p className='text-xl'>{appointment.dateCreated}</p>
                    <p className='text-xl'>{appointment._id}</p>
                </div>
                    </div>
                )
            }
                
            )
        }

    </div>}

    {currentAppointments===1 && <div className='mt-10'>
                {

                resolvedAppointments.map((appointment)=>{

                        return (
                            <div>
                                <div onClick={()=>navigate(`/appointment/${appointment._id}`)} className='mt-5 p-5 shadow-2xl bg-red-300 cursor-pointer'>
                            <p className='text-2xl'>{appointment.description}</p>
                            <p className='text-xl'>{appointment.dateCreated}</p>
                            <p className='text-xl'>{appointment._id}</p>
                        </div>
                            </div>
                        )
                    }
                        
                    )
                                    }

            </div>}
</div> 
  )
}
