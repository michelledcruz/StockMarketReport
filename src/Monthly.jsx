import './index.css';
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from 'react-chartjs-2';

function Monthly(){
    return(
        <div className="dataCard monthly">
            <h2>Monthly Data</h2>
            <Line
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'mAY', 'Jan', 'Feb', 'Mar', 'Apr', 'mAY', 'Jan', 'Feb', 'Mar', 'Apr', 'mAY'],
                datasets: [
                    {
                        label: "Revenue",
                        data: [50, 55, 58, 60, 62, 58, 62, 68, 69, 62, 70, 72, 78, 80, 84, 85, 88, 90],
                        borderColor: '#f37257',
                        backgroundColor: '#f37257',
                        tension: 0,
                        pointBackgroundColor: '#f37257',
                    },
                ],
              }}
            />
        </div>
    );

}

export default Monthly;
