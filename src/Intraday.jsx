import './index.css';
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from 'react-chartjs-2';


function Intraday(){
    return(
        <div className="dataCard intraday">
            <h2>IntraDay Data</h2>
            <Doughnut
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr'],
                datasets: [
                    {
                        label: "Revenue",
                        data: [50, 120, 80, 60],
                        backgroundColor:[ '#d8d02c',
                            '#6495ED',
                            '#f37257',
                            '#008000',
                        ],
                        borderColor: [ '#d8d02c',
                            '#6495ED',
                            '#f37257',
                            '#008000',
                        ],
                    }
                ],
              }}
              options={{
                cutout: '70%', // Adjust this value to make the ring thinner
                radius: '50%',
            }}
            />
        </div>
    );

}

export default Intraday;
