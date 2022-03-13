import React,{useEffect, useState} from 'react'
import {useParams, useLocation} from 'react-router-dom'

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import CreatePrescription from '../Doctor/CreatePrescription'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow:"scroll"
  };
  

const Prescription = () => {

    const {id}=useParams()
    const User = JSON.parse(localStorage.getItem('profile'))
    const {state}= useLocation()
    const [prescriptions,setPrescriptions]=useState(state)
    console.log(prescriptions)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


  return (
      <div>

    <div>
        {prescriptions.map(pres=>{
            return (
                <div>
                    pres._id
                </div>
            )
        })}
    </div>
    {true && <div >
        <CreatePrescription />
    </div>}
        </div>
  )
}

export default Prescription