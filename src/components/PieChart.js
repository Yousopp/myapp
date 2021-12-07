import React from "react"
import { Doughnut } from 'react-chartjs-2'

const PieChart = () => {
    return (
        <div>
            <Doughnut 
                data={{
                    labels: ['BTC', 'ETH', 'BNB', 'USDT', 'SOL', 'CARD', 'Other'],
                    datasets: [
                        {
                            label: 'Dominance des cryptos ',
                            data: [42, 20, 4, 2.85, 2.4, 2, 26.75],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(100, 100, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(100, 100, 64, 1)'
                            ],
                            borderWidth: 1
                        },
                    ],
                }}
            height={500}
            width={500}
            options={{
                maintainAspectRatio: false,
            }}
            />
        </div>
    )
}

export default PieChart