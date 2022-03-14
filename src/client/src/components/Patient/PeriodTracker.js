import { TextField } from '@mui/material'
import { InputLabel } from '@mui/material'
import React,{useState} from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { ChartComp } from './ChartComp';

const PeriodTracker = () => {
    const [noOfDays,setNoOfDays]=useState(0);
    const [cycleLength,setCycleLength]=useState(0);
    const [lastPeriodDate,setLastPeriodDate]=useState(new Date());

    return (
    <>
   
    <form>
        <div className='my-2'>
            <InputLabel>How long does the period usually last?(1-10)</InputLabel>
            <TextField
                name='noOfDays'
                id='noOfDays'
                type='number'
                min='1'
                max='10'
                onChange={(e)=>setNoOfDays(e.target.value)}>
            </TextField>
        </div>

        <div className='my-2'>
            <InputLabel>How often does the period recur? Once every:(15-60)</InputLabel>
            <TextField
                name='cycleLength'
                id='cycleLength'
                type='number'
                min='15'
                max='60'
                onChange={(e)=>setCycleLength(e.target.value)}>
            </TextField>
        </div>
        
        <div className='my-2'>
            <InputLabel>Date of last period/bleeding</InputLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    disableFuture={true}
                    value={lastPeriodDate}
                    onChange={(newValue) => {
                    setLastPeriodDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>

        <button>Track my Periods</button>
    </form>

    <div>
         <ChartComp cycleLength={cycleLength} noOfDays={noOfDays}lastPeriodDate={lastPeriodDate}  />
    </div>

    </>

  )
}

export default PeriodTracker