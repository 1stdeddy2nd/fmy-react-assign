import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Chart} from 'react-chartjs-2';
import {useEffect, useRef, useState} from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CaseChart() {
    const [bgColors, setBgColors] = useState([])

    function createGradient(ctx, area, colorStart, colorEnd) {
        const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
        gradient.addColorStop(0, colorStart);
        gradient.addColorStop(1, colorEnd);
        return gradient;
    }

    const chartRef = useRef(null);

    useEffect(() => {
        const chart = chartRef.current;
        if (chart) {
            setBgColors([
                createGradient(chart?.ctx, chart?.chartArea, '#98C6FF', '#70B0FF'),
                createGradient(chart?.ctx, chart?.chartArea, '#12327C', '#6090FF'),
                createGradient(chart?.ctx, chart?.chartArea, '#6FFF8D', '#A9FFBB'),
                createGradient(chart?.ctx, chart?.chartArea, '#80A5FF', '#004AFE'),
                createGradient(chart?.ctx, chart?.chartArea, '#DBC7FF', '#C5A4FF'),
                createGradient(chart?.ctx, chart?.chartArea, '#EFD7AB', '#FEBD42'),
            ])
        }
    }, [chartRef])

    return(
        <div className="w-100 position-relative" style={{height: 480}}>
            <div style={{position: 'absolute', top: 215, left: 115, fontSize: '36px', color: 'white'}}>86%</div>
            <Chart
                ref={chartRef}
                type="doughnut"
                data={{
                    labels: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Other'],
                    datasets: [
                        {
                            label: 'Cases',
                            data: [24, 21, 15, 10, 16, 14],
                            backgroundColor: bgColors,
                            borderWidth: 0.5,
                        },
                    ]
                }}
                options={{
                    responsive: true,
                    cutout: 125,
                    plugins: {
                        legend: {
                            position: "right",
                            align: "middle",
                            labels: {
                                font: {
                                    size: '20px',
                                    lineHeight: '24px'
                                },
                                usePointStyle: true,
                                boxWidth: 25,
                                boxHeight: 12.18,
                                color: 'white',
                                padding: 30
                            }
                        }
                    }
                }}
            />
        </div>
    )
}
