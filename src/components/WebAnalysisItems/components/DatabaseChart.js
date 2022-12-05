import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import {Chart} from 'react-chartjs-2';
import {useEffect, useState} from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export default function DatabaseChart() {
    const [gradientColor, setGradientColor] = useState()

    useEffect(() => {
        const ctx = document.getElementById('canvas').getContext("2d")
        const gradient = ctx.createLinearGradient(0, 0, 0, 400)
        gradient.addColorStop(0, '#A0CFFF94')
        gradient.addColorStop(1, '#A0CFFF00')
        setGradientColor(gradient);
    }, [])

    return (
        <div className="d-flex align-items-center h-100 mx-4">
            <Chart
                id="canvas"
                type={"line"}
                data={{
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fir', 'Sat', 'Today'],
                    datasets: [
                        {
                            fill: true,
                            data: [2000,2050,3500,3000,2900,2500,3500],
                            borderColor: '#6AB4FF',
                            backgroundColor: gradientColor,
                            pointRadius: 7,
                            pointBackgroundColor: 'white'
                        },
                    ],
                }}
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        },
                    },
                    scales: {
                        y: {
                            min: 1000,
                            max: 4000,
                            display: false,
                        },
                        x: {
                            ticks: {
                                color: 'white',
                                font: {
                                    size: '20px',
                                },
                            },
                            grid: {
                                color: 'rgba(255,255,255,0.2)'
                            }
                        }
                    },
                }}
            />
        </div>
    )
}
