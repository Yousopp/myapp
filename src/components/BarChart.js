import React from "react"
import { Line } from 'react-chartjs-2'

const LineChart = () => {
    return (
        <div>
            <Line 
                data={{
                    labels: ['T1 15', 'T2 15', 'T3 15', 'T4 15', 'T1 16', 'T2 16', 'T3 16', 'T4 16', 'T1 17', 'T2 17', 'T3 17', 'T4 17', 'T1 18', 'T2 18', 'T3 18', 'T4 18', 'T1 19', 'T2 19', 'T3 19', 'T4 19', 'T1 20', 'T2 20', 'T3 20', 'T4 20'],
                    datasets: [
                        {
                            label: "Portefeuilles Bitcoin dans le monde 2015/2020",
                            data: [3.18, 3.67, 4.37, 5.44, 6.65, 7.8, 8.95, 10.92, 12.89, 14.95, 17.26, 21.51, 23.95, 25.76, 28.89, 31.91, 34.67, 40.09, 42.3, 44.69, 47.12, 50.72, 54.27, 55.8],
                            backgroundColor: [
                                'orange',
                            ],
                            borderColor: [
                                'red',
                            ],
                            borderWidth: 1
                        },
                    ],
                }}
            height={500}
            width={500}
            options={{
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            }}
            />
        </div>
    )
}

export default LineChart