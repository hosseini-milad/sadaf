
import { Bar ,Line} from 'react-chartjs-2';


function UserChart(props){
  const data = props.data
    const labels = props.label
    const creditMehr = ["12","11","13","10","5","12","11","13","10","5","14","22"]
    const creditSahand =["13","11","12","0","0","0","0","0","0","0","0","0"]
    const fobMehr = data?data.fob.mehr:["130","100","80","50","20","120","130","80","50","120","110","82"]
    const fobSahand = data?data.fob.sahand:["140","130","120","0","0","0","0","0","0","0","0","0"]
    
    const chartData = {
        labels,
        color:'rgb(255, 255, 2555)',
        datasets: [
          {
            label: "حقیقی" ,
            data: creditMehr,
            barPercentage: 0.5,
            barThickness: 16,
            maxBarThickness: 18,
            minBarLength: 2,
            backgroundColor: ["#EC1616"],
            color:['rgb(255, 255, 255)'],
            stack: 'Stack 0',
          },
          {
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