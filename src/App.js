import React, { useState, createRef } from 'react'

import BarChart from './components/BarChart'
import ButtonChart from './components/ButtonChart'
import ButtonReset from './components/ButtonReset'
import './App.css'
import config from './configChart.json'

const App = () => {

  // Avoir accés au chart pour le manipuler
  const chartRef = createRef()

  // HOOK pour avoir (data = config) et (setData) qui sera la nouvelle donnée 
  const [data, setData] = useState(JSON.parse(JSON.stringify(config)))

  //Fonction ajouter une donnée
  const updateChart = (value, ville) => {
    const newData = data
    newData.datasets[0].data.push(parseFloat(value))
    newData.labels.push(ville)
    setData(newData)
    chartRef.current.chartInstance.update({ // Update/Refresh le chart
      preservation: true,
    });
  }

  //Fonction reset du chart
  const resetData = () => {
    setData(JSON.parse(JSON.stringify(config)))
    console.log(config)
    chartRef.current.chartInstance.update({
      preservation: true,
    });
  }

  return <div id="divChart">
            <div id="lineChart">
              <BarChart data={data} chartRef={chartRef} />
            </div>
            <div className="inputbox">
              <ButtonChart updateChart={updateChart}/>
              <ButtonReset resetData={resetData}/>
            </div>
          </div>
}

export default App