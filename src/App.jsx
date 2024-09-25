import './App.css'
import DailyData from './DailyData'
import Intraday from './Intraday'
import Monthly from './Monthly' 
import StockValues from './StockValues'
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from 'react-chartjs-2';

function App() {

  return (
    <>
      <div className='App'>
        <DailyData />
        <StockValues />
        <Intraday />
        <Monthly />
     </div>
    </>
  )
}

export default App
