import React,{useState, useEffect} from 'react'
import {confirmPrescription} from '../../actions/User'
import PrescriptionView from './PrescriptionView'

const ConfirmPrescription = () => {
    const [prescriptions,setPrescriptions]=useState([]);
     useEffect(()=>{
         confirmPrescription(setPrescriptions);
     },[])
     console.log('njskcnaj')

    return (
        <div className="m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            { prescriptions.map(pres=>{
            return (
                <div className="flex bg-gray-100 hover:bg-gray-300 p-4 flex-col justify-center" >
                    {pres?._id}
                    <PrescriptionView pres={pres}/>
                </div>
            )
            })}
        </div>
    )
}

export default ConfirmPrescription