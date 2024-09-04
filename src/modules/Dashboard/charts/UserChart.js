
import { Bar ,Line} from 'react-chartjs-2';
import { CalcDataYear } from '../../../env';


function UserChart(props){
  const data = props.data
  console.log(data)
    const labels = props.label
    const thisYear = ["12","11","13","10","5","12","11","13","10","5","14","22"]
    const lastYear =["13","11","12","0","0","0","0","0","0","0","0","0"]
    //const fobMehr = ["130","100","80","50","20","120","130","80","50","120","110","82"]
    //const fobSahand =["140","130","120","0","0","0","0","0","0","0","0","0"]
    
    const chartData = {
        labels,
        color:'rgb(255, 255, 2555)',
        datasets: data.map((year,i)=>(
          {
            label: year.year ,
            data: CalcDataYear(year.data),
            barPercentage: 0.5,
            barThickness: 16,
            maxBarThickness: 18,
            minBarLength: 2,
            backgroundColor: year.color,
            color:['rgb(255, 255, 255)'],
            stack: 'Stack '+i,
          }))
        }
        /*  {
            label: '1402/حقوقی',
            data: fobMehr,
            barPercentage: 0.5,
            rtl: true,
            barThickness: 16,
            maxBarThickness: 18,
            minBarLength: 2,
            backgroundColor: ["#EC161690"],
            color:['rgb(255, 255, 255)'],
            stack: 'Stack 0',
          },
          {
            label: "حقیقی" ,
            data: creditSahand,
            barPercentage: 0.5,
            barThickness: 16,
            maxBarThickness: 18,
            minBarLength: 2,
            backgroundColor: ["#50774b"],
            color:['rgb(255, 255, 255)'],
            stack: 'Stack 1',
          },
          {
            label: '1403/حقیقی',
            data: fobSahand,
            barPercentage: 0.5,
            rtl: true,
            barThickness: 16,
            maxBarThickness: 18,
            minBarLength: 2,
            backgroundColor: ["#50774b90"],
            color:['rgb(255, 255, 255)'],
            stack: 'Stack 1',
          }
        ],
      };*/
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
      tooltips: {
        rtl: true 
      },
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      }
    };
    
    return(<>
        <Bar data={chartData} options={options}/>
        </>
    )
}
export default UserChart