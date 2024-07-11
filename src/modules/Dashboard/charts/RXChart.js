
import { Bar ,Line} from 'react-chartjs-2';
import errortrans from '../../../translate/error';
import env from '../../../env';
import { useEffect, useState } from 'react';
function RXChart(props){
    const data = props.data    
    const labels = ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور"]
    const dataRaw = ["24","129","320","211","108","90",""]
    const dataTotal = ["111","88","300","90","221","90",""]
    
    const chartData = {
        labels,
        color:'rgb(255, 255, 2555)',
        datasets: [
          {
            label: "اختراعات حقیقی" ,
            data: dataRaw,
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: ["aqua"],
            color:['rgb(255, 255, 255)'],
          },
          {
            label: 'اختراعات حقوقی',
            data: dataTotal,
            barPercentage: 0.5,
            rtl: true,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: [
              'rgba(255, 255, 255, 0.8)'
            ],
            color:['rgb(255, 255, 255)'],
          }
        ],
      };
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
      tooltips: {
        rtl: true 
      }
    };
    
    return(<>
        <Line data={chartData} options={options}/>
        </>
    )
}
export default RXChart