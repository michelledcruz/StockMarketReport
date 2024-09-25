import './index.css';
import { useEffect, useState } from 'react';


const StockValues = () => {
    const [stockData, setStockData] = useState(null);

    useEffect(() => {
        const symbol = "IBM";
        const apiKey = "6543AHCEBWX7Q80C";
        const api_url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`;

        const fetchData = async () => {
            try {
                const res = await fetch(api_url);
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                const data = await res.json();
                console.log(data);
                setStockData(data); // Set the fetched data in state
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this runs once when the component mounts


    return(
        <div className="dataCard stockvalues">
             <h2>Stock Values</h2>
        {stockData ? (
            <>
            <h1>{stockData.Name} </h1>
            <div className="data-cards">
                <div className="stock-card">
                    <p>Current Stock Price:</p>
                    <h3>{stockData.AnalystTargetPrice}</h3> 
                </div>
                <div className="stock-card">
                    <p>Dividend Per Share:</p>
                    <h3>{stockData.DividendPerShare}</h3> 
                </div>
                <div className="stock-card">
                    <p>Book Value:</p>
                    <h3>{stockData.BookValue}</h3> 
                </div>
                <div className="stock-card">
                    <p>Analyst Suggest</p>
                    <h3>Strong Buy: {stockData.AnalystRatingStrongBuy}</h3> 
                </div>
            </div>
            </>
        ) : (
            <p>Loading...</p>
        )}
        </div>
    
    )
}

export default StockValues