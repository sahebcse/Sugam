import React, {useEffect, useState} from 'react'
import {Modal, Box} from '@mui/material'
import MapGeolocation from '../Map/MapGeolocation';
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
const Userinfo = ({appointment}) => {
  const [modalOpen, setModalOpen]=useState(false)
  const handleModalOpen=()=>
  {
    setModalOpen(true)
  }
  const handleClose=()=>{
    setModalOpen(false)
    console.log("It is closing")
    console.log(modalOpen)
  }

  useEffect(()=>
  {
    console.log(appointment)
  }, [appointment])
  return (
    <div className='p-5 place-content-center rounded-xl shadow-2xl hover:shadow-sm cursor-pointer'>
      <div onClick={handleModalOpen}>
        <img src={require('./static/user.png')} className='mx-auto h-64' />
        User Information 
        
      </div>  
      <Modal 
          open={modalOpen}
          onClose={handleClose}
          >
          <Box sx={style}>
            <button onClick={handleClose}>Close Modal</button>
            <p>Full Name: {appointment?.patient.fullName} </p>
            <p>Email: {appointment?.patient.email}</p>
            <MapGeolocation />
          </Box>
        </Modal>
 
    </div>
  )
}

export default Userinfo