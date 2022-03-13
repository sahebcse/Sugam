import React,{useEffect, useState} from 'react'
import {Modal, Box} from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#FFFFFF',
  boxShadow: 24,
  p: 4,
  outline: 'none'
};


const Doctorinfo = ({appointment}) => {
  const [modalOpen, setModalOpen]=useState(false)
  const handleModalOpen=()=>
  {
    setModalOpen(true)
  }
  const handleClose = () => setModalOpen(false);
  useEffect(()=>
  {
    console.log(appointment)
    if (appointment?.doctor)
    {
      console.log('Doctor exists')
    }
    else
    {
      console.log("Doctor doesn't exist")
    }
  }, [appointment])
  return (
    <div className='p-5 place-content-center rounded-xl shadow-2xl hover:shadow-sm cursor-pointer' >
      <img src={require('./static/doctor.png')} className='mx-auto h-64' onClick={handleModalOpen}/>
      Doctor Information
      <Modal 
        open={modalOpen}
        onClose={handleClose}
        >
        <Box sx={style}>
          {
            (appointment?.doctor?<div><p>Full Name: {appointment?.patient.fullName} </p>
            <p>Email: {appointment?.patient.email}</p></div>:<div>Doctor doesn't exist</div>)
          }
        </Box>
      </Modal>

    </div>
  )
}

export default Doctorinfo