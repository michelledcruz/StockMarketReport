import './index.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useState } from 'react';

function Monthly(){
    
    const [monthData, setMonthData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // const symbol = "IBM";
        // const apiKey = "6543AHCEBWX7Q80C";
        // const api_url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;
        const api_url =`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo`;

        const fetchData = async () => {
            try {
                const res = await fetch(api_url);
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                const data = await res.json();
                const timeSeries = data['Time Series (Daily)'];

                const labels = Object.keys(timeSeries).reverse(); // Dates for x-axis
                const openPrices = labels.map(date => parseFloat(timeSeries[date]['1. open']));
                const highPrices = labels.map(date => parseFloat(timeSeries[date]['2. high']));
                const lowPrices = labels.map(date => parseFloat(timeSeries[date]['3. low']));
                const closePrices = labels.map(date => parseFloat(timeSeries[date]['4. close']));

        
            // Prepare the chart data structure
            setMonthData({
            labels, // Dates on the x-axis
            datasets: [
              {
                label: 'Open',
                data: openPrices,
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false,
              },
              {
                label: 'High',
                data: highPrices,
                borderColor: 'rgba(54, 162, 235, 1)',
                fill: false,
              },
              {
                label: 'Low',
                data: lowPrices,
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false,
              },
              {
                label: 'Close',
                data: closePrices,
                borderColor: 'rgba(153, 102, 255, 1)',
                fill: false,
              }
            ]
          });
  
          setLoading(false);
        } catch (error) {
          console.error('Error fetching stock data:', error);
        }
      };
  
      fetchData();
    }, []);

    const options = {
        responsive: true,
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      };

    return (
        <div className="dataCard daily">
          <h2>IBM Stock Prices (Daily)</h2>
          {loading ? <p>Loading...</p> : <Line data={monthData} options={options} />}
        </div>
      );
    };

export default Monthly;
