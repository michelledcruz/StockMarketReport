import './index.css';
import sourceData from './data/sourceData.json';
import { Bar} from 'react-chartjs-2';

function DailyData(){

    const labels = Object.keys(sourceData);
    const openPrices = Object.values(sourceData).map( item => parseFloat(item["1. open"]));
    const volumes = Object.values(sourceData).map(item => parseInt(item["5. volume"]));
    return(
        <div className="dataCard daily">
            <h2>Daily Data</h2>
            <Bar
              data={{
                labels,
                datasets: [
                    {
                        label: 'Open Price',
                        data: openPrices,
                        borderColor: '#36A2EB',
                        backgroundColor: '#d8d02c',
                        borderRadius: 5,
                    },
                    {
                        label: 'Volume',
                        data: volumes,
                        borderColor: '#362DEB',
                        backgroundColor: '#362DEB',
                        borderRadius: 5,
                    },
                 
                ],
              }}
              options ={{
                plugins: {
                    legend: {
                      labels: {
                        color: 'white' // Make the text of the legend white
                      }
                    }
                  },
                  ticks: {
                    color: 'white', // Make y1-axis tick labels white
                  },
                  title: {
                    display: true,
                    text: 'Time',
                    color: 'white', // Make x-axis title white
                  }
              }}
            />
        </div>
    );

}

export default DailyData;
