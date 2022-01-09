import React from "react"
import { Bar } from 'react-chartjs-2'

function BarChart({data, chartRef}) {
    // Chart en bar avec mes données et une référence
    return (
        <div>
            <Bar data={data} ref={chartRef}/>
        </div>
        
    )
}

export default BarChart