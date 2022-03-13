import React, {useState} from 'react'


export default function HealthWorkerDashboard() {
  return (
    <div className='col-span-5'>
        <div className='mt-10 bg-gradient-to-r from-indigo-500 to-indigo-800 py-20 rounded-xl grid md:grid-cols-2'>
            <div className='p-16'>
                <h1 className='text-5xl font-semibold text-white'>Sugam</h1>
                <p className='text-xl text-white mt-10'>Whichever tagline sounds sexy</p>
                <h2 className='text-4xl text-white font-bold'>Swastha Bharat Viksit Bharat</h2>
                <button className='rounded-xl bg-white p-5 mt-10 text-indigo-800 font-semibold'>Know More</button>
            </div>
            <div className='p-10'>
                <img className='w-96 h-max' src={require('./static/targetaudience.jfif')} />
            </div>

        </div>
    </div> 
  )
}
