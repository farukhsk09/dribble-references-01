import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export const options = {
    plugins: {
        title: {
        display: false,
        text: 'Chart.js Bar Chart - Stacked',
        },
    },
    responsive: true,
    scales: {
        x: {
        stacked: true,
        },
        y: {
        stacked: true,
        },
    },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
      {
        label: 'New business',
        data: [{x: 'January',y:[-5,20]},{x: 'February',y:[11,45]},{x: 'March',y:[18,55]},
        {x: 'April',y:[-5,4]},{x: 'May',y:[-15,20]},{x: 'June',y:[19,44]},{x: 'July',y:[19,40]}],
        backgroundColor: '#68a13a',
      }
    ],
  };
function MrrChart(){
    return (
        <div className='chart'>
            <Bar
                options={options}
                data={data}
            />
        </div>
    );
}
export default MrrChart;