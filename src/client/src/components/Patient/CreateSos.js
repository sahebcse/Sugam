import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { createEmergency } from '../../api'
import MapGeolocation from '../Map/MapGeolocation'

export default function CreateSos() {
    const [description, setDescription]=useState('')
    const [date, setDate]=useState('')
    const [typeOfEmergency, setTypeOfEmergency]=useState('heart attack')
    const [coordinates, setCoordinates]=useState({latitude: 0, longitude: 0})
    const patient=JSON.parse(localStorage.getItem('profile'))
    const navigate=useNavigate()

    const handleDescriptionChange=(e)=>
    {
        setDescription(e.target.value)
    }
    const handleDate=(e)=>
    {
        setDate(e.target.value)
    }
    const handleTypeOfEmergencyChange=(e)=>
    {
        setTypeOfEmergency(e.target.value)
    }

    const createNewEmergency=async (sendData)=>
    {
        try{
            const {data}=await createEmergency(sendData)
            console.log(data)
            navigate('/dashboard')
        }   
        catch(error)
        {
            console.log(error)
        }
    }
    

    const handleAppointmentSubmit=()=>
    {
        const formData={
            description: description,
            pincode: '824231',
            typeOfEmergency: typeOfEmergency,
            patientId: patient._id,
            latitude: coordinates.latitude,
            longitude: coordinates.longitude
            }
        
            console.log(formData)
        createNewEmergency(formData)


    }

    useEffect(()=>
    {
        navigator.geolocation.getCurrentPosition(pos=>{
            console.log(pos)
            setCoordinates({latitude: pos.coords.latitude, longitude: pos.coords.longitude})
        })
    }, [])
  return (
    <div className='grid grid-cols-7'>
        <div className='col-span-2'></div>
        <div className='col-span-7 md:col-span-3 mt-16 shadow-3xl border-solid border-red-400 border-2 p-5 rounded-3xl'>
            <p className='text-lg font-semibold'>
                Please enter the reason for your emergency. Meant for urgent location services. 
            </p>
            <h2 className='text-3xl font-semibold mt-5'>Reason of Emergency</h2>
            <textarea onChange={handleDescriptionChange} 
                className='appearance-none placeholder:text-slate-400 placeholder:italic placeholder:text-xl mt-5 border-2 border-red-700 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500'
                rows={10}
                placeholder="Describe the reason for slot booking"
            />

            <h2 className='text-3xl font-semibold mt-1'>Type of Emergency</h2>
            <div className="mt-3 relative rounded-md shadow-sm">
                                <select onChange={handleTypeOfEmergencyChange}
                                    className="appearance-none border-2 h-16 text-xl placeholder:text-xl border-red-700 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500 mt-1">
                                        <option value="heart attack" selected>Heart Attack</option>
                                        <option value="burn victim">Burn victim</option>
                                        <option value="road accident">Road Accident victim</option>
                                        <option value="labour pains">Labour Pains</option>
                                        <option value="covid realted emergency">Covid Related Emergency</option>
                                </select>
                                    
            </div>
            <h2 className='text-3xl font-semibold mt-5'>Patient Location</h2>
            <MapGeolocation />
            
            <button onClick={handleAppointmentSubmit} className='bg-red-400 hover:bg-red-600 w-full p-5 mt-5 rounded-2xl'>
                Submit
            </button>
        </div>
        <div className='col-span-2'></div>

    </div>
  )
}
 
