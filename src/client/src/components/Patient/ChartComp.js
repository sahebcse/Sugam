import React,{useEffect, useState} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import moment from 'moment'
import axios from 'axios'

const diff=(d1,d2)=>{
  return moment.duration(d1.diff(d2)).asDays();
}

export const ChartComp = () => {
const [chartImg,setChartImg]=useState("");

let periodStartDates=[moment(new Date(2022,2,1))]
let noOfDays=6;
let cycleLength=28;

ChartJS.register(ArcElement, Tooltip, Legend); 

let labelsArr=[];
let dataArr=[];
let backgroundColorArr=[];
let borderColorArr=[];

let periodStartDate=moment(new Date(2022,2,1))
let periodEndDate=moment(moment(new Date(2022,2,1)).add(noOfDays-1,'days'));
let nextPeriodDate=moment(moment(new Date(2022,2,1)).add(cycleLength,'days'));
let ovulationDay=moment(moment(new Date(2022,2,29)).subtract(14,'days'));

for(let i=0;i<cycleLength;i++)
{
    let curr=moment(moment(new Date(2022,2,1)).add(i,'days'));
    let title,color;

    if(curr.isSameOrAfter(periodStartDate) && curr.isSameOrBefore(periodEndDate))
    {
        title=`Period Day ${diff(curr,periodStartDate)+1}, Very low chances of getting pregnant`;
        color='red';
    }
    else if(curr.isBefore(ovulationDay))
    {
        title=`${diff(ovulationDay,curr)} days till ovulation, `;
        if(diff(ovulationDay,curr)<=5){
            title+='Low to good chances of getting pregnant';
            color='green';
        }
        else{
            title+='Low chances of getting pregnant';
            color='brown'
        } 
    }
    else if(curr.isSame(ovulationDay)){
        title='Ovulation Day';
        color='purple';
    }
    else if(curr.isAfter(ovulationDay)){
        title=`${diff(nextPeriodDate,curr)} days till Periods, `;
        if(diff(nextPeriodDate,curr)<=3){
            title+='Low chances of getting pregnant';
            color='yellow'
        }   
        else if(diff(nextPeriodDate,curr)<=5)
        {
            title+='Low chances of getting pregnant';
            color='brown'
        }
        else{
            title+='Extremely high chances of getting pregnant'
            color='green';
        } 
    }

    labelsArr[i]=title;
    dataArr[i]=curr.date();
    backgroundColorArr[i]=color;
    borderColorArr[i]='black';
}


  const data = {
    labels:labelsArr,
    datasets: [
      {
        label: '',
        data:dataArr,
        backgroundColor:backgroundColorArr,
        borderColor:borderColorArr,
        borderWidth: 1,
      },
    ],
  };

  const options= {
    plugins: {
      legend: {
        display: false
      },
    }
  }


  // useEffect(()=>{
  //   axios.post('https://quickchart.io/chart/create',{
  //     "backgroundColor": "transparent",
  //     "format": "png",
  //     "chart": {
  //       type: 'doughnut',
  //       data: {
  //         datasets: [
  //           {
  //             data:dataArr ,
  //             backgroundColor:backgroundColorArr,
  //           },
  //         ],
  //         labels: labelsArr,
  //       },
  //       options: {
  //         plugins: {
  //           scales:{
  //             xAxes:[{
  //               ticks:{
  //                 display:false,
  //                 autoSkip:true
  //               }
  //             }]
  //           },
  //           datalabels: {
  //             formatter: (value) => {
  //               return value + '%';
  //             }
  //           }
  //         }
  //       }
  //     }
  //   })
  //   .then((res)=>{
  //     console.log(res);
  //     setChartImg(res.data.url);
  //     console.log(res.data.url)
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  // },[])



  return (
    <div className='w-1/4'>
      <Doughnut data={data} options={options} />
      {/* <img src={chartImg} /> */}
    </div>
  )
}
