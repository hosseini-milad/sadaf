
import { Bar ,Line} from 'react-chartjs-2';
import errortrans from '../../../translate/error';
import env from '../../../env';
import { useEffect, useState } from 'react';
function StockChart(props){
  const data = props.data
  
    const labels = ["1403","1402","1401","1400","1399","1398"]
    const dataRaw = ["240","629","920","811","208","190",""]
    const dataTotal = ["211","188","1300","390","921","290",""]
    
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
export default StockChart