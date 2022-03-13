import React, {useEffect, useState} from 'react'
import {FormControl, Radio, FormLabel, FormControlLabel, RadioGroup} from '@mui/material'

export default function () {
    const [age, setAge]=useState(0)
    const [height, setHeight]=useState(0)
    const [weight, setWeight]=useState(0)
    const [gender, setGender]=useState('male')
    const [BMI, setBMI]=useState(0)
    useEffect(()=>
    {
        console.log("BMi is working")
    }, [])

    const handleAgeChange=(e)=>
    {
        setAge(e.target.value)
    }

    const handleHeightChange=(e)=>
    {
        setHeight(e.target.value)
    }

    const handleWeightChange=(e)=>
    {
        setWeight(e.target.value)
    }

    const handleGenderChange=(e)=>
    {
        console.log(e.target.value)
        setGender(e.target.value)
    }

    const calculateBMI=()=>
    {
        const bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
        setBMI(bmi)
        console.log(bmi)
    }


  return (
    <div className='grid grid-cols-7 mt-20 '>
        <div></div>
        <div className='col-span-7 md:col-span-4  border-solid border-green-400 border-2 p-5'>
        <div>
            <input onChange={handleAgeChange}
                className='appearance-none placeholder:text-slate-400 placeholder:italic placeholder:text-xl mt-5 border-2 border-blue-700 rounded w-1/4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
                placeholder="Age"
            />
        </div>
        <div>
        <FormControl onChange={handleGenderChange}>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />

            </RadioGroup>
    </FormControl>
        </div>
        <div>
            <input onChange={handleWeightChange}
                className='appearance-none placeholder:text-slate-400 placeholder:italic placeholder:text-xl mt-5 border-2 border-blue-700 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
                placeholder="Input weight"
            />
        </div>
       
        <div>
            <input  
                onChange={handleHeightChange}
                className='appearance-none placeholder:text-slate-400 placeholder:italic placeholder:text-xl mt-5 border-2 border-blue-700 rounded w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
                placeholder="Input height"
            />
        </div>
        <button onClick={calculateBMI} className='bg-blue-400 hover:bg-green-400 p-5 mt-5 rounded-xl'>
                Calculate
        </button>
        <div>
            {BMI!=0?BMI:<p></p>}
        </div>
        </div>
        <div></div>
    </div>
  )
}
