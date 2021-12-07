import React from 'react'

import LineChart from './components/BarChart'
import './App.css'
import PieChart from './components/PieChart'

const App = () => {
  return <div id="divChart">
            <div id="lineChart">
              <LineChart />
            </div>
            <div id="pieChart">
              <p id="titlePieChart">Principaux actifs cryptographiques par pourcentage de la capitalisation boursière totale</p>
              <PieChart />
            </div>
          </div>
}

export default App