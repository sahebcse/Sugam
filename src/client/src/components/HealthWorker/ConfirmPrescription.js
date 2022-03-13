import React,{useState} from 'react'

const ConfirmPrescription = () => {
    const [prescriptions,setPrescriptions]=useState([]);

    return (
        <div className="m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            { prescriptions.map(pres=>{
            return (
                <div className="flex bg-gray-100 hover:bg-gray-300 p-4 flex-col justify-center" >
                    <button className="px-3 py-2 m-2 bg-blue-300 hover:bg-blue-500" onClick={()=>{}}>Confirm</button>
                </div>
            )
            })}
        </div>
    )
}

export default ConfirmPrescription