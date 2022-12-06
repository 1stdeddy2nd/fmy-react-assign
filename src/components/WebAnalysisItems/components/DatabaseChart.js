import {Line} from 'react-chartjs-2';
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
import {useState, useEffect} from "react";
import {faker} from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
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

    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fir', 'Sat', 'Today']

    return (
        <div className="d-flex align-items-center h-100 mx-4">
            <Line
                id="canvas"
                type="line"
                plugins={[{
                    beforeEvent(chart, ctx) {
                        const event = ctx.event;
                        const zoom = document.getElementsByClassName('websiteContainer')[0].style.zoom || 1;
                        if (zoom !== 1) {
                            event.x = event.x / zoom;
                            event.y = event.y / zoom;
                        }
                    }
                }]}
                options={{
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
                    }
                }}
                data={{
                    labels,
                    datasets: [{
                        fill: true,
                        data: labels.map(() => faker.datatype.number({min: 2000, max: 4000})),
                        backgroundColor: gradientColor,
                        pointRadius: 6,
                        pointBackgroundColor: 'white',
                        pointBorderColor: '#77B3FF',
                        pointBorder: 2,
                        borderColor: '#6AB4FF'
                    }],
                }}
            />
        </div>
    )
}
