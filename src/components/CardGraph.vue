<template>
    <div class="container__graph">
        <div class = "container__charts">
            <Line class="chart" :chart-data="createdChartData()" :chart-options="chartOptions"/>
            <Line class="chart" :chart-data="createdChartDataWeather()" :chart-options="chartOptionsWeather"/>
        </div>
        <button @click="giveDataWeather()">giveWeather</button>
    </div>
</template>

<script>
import axios from 'axios'
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement, Filler} from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement, Filler)
export default {
    components: {
        Line,
    },
    data() {
        return {
            chartOptions: {
                scales: {
                    y: {
                        beginAtZero: false, //Начинать ли график с 0
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Test schedule'
                    }
                },
                responsive: true,
            },
            chartOptionsWeather: {
                scales: {
                    y: {
                        beginAtZero: false, //Начинать ли график с 0
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Temperature graph with api'
                    }
                },
                responsive: true,
            },
            urlWeather: 'https://api.openweathermap.org/data/2.5/forecast?lat=52.26257619562354&lon=104.26146560287994&units=metric&appid=e4c7ab3e0b9a1a6fd4db321722dfea6b',
            arrDate: [],
            arrTemp: [],
        }
    },
    methods: {
        createdChartData() {
            const chartData = {
                labels: ['1\r2', '2\n3', 3, 4, 5, 6, 7, 8, 9],
                datasets: [{
                    radius: 5,
                    pointStyle: 'circle',
                    label: 'Test',
                    data: [1, 3, 4, 2, 3, 1, 4, 5, 2],
                    fill: true,
                    pointBackgroundColor: 'rgba(0, 0, 0, 0.5)',
                    BackgroundColor: 'rgba(75, 192, 92, 0.5)',
                    borderColor: 'rgb(75, 192, 92)',
                    pointHoverRadius: '10',
                }]
            };
            const minArg = Math.min(...chartData.datasets[0].data);
            const maxArg = Math.max(...chartData.datasets[0].data);
            this.chartOptions.scales.y.min = minArg - 1;
            this.chartOptions.scales.y.max = maxArg + 1;
            return chartData;
        },
        async giveWeather() {
            try {
                const response = await axios.get(this.urlWeather);
                return response;
            } catch (e) {
                alert('Error: ' + e);
            };
        },
        async giveDataWeather() {
            const arrWeather = await this.giveWeather();
            this.giveDate(arrWeather.data.list);

        },
        giveDate(array) {
            this.arrTemp = [];
            this.arrDate = [];
            array.map((item, index) => {
                if (index === 0) {
                    const removeDate = new Date(item.dt * 1000);
                    this.arrDate.push(removeDate.getDate() + '.' + (removeDate.getMonth() + 1 < 10 ? '0' + (removeDate.getMonth() + 1) : removeDate.getMonth() + 1) + '.' + removeDate.getFullYear());
                    this.arrTemp.push(item.main.temp);
                } else if ((new Date(item.dt * 1000)).getHours() === 14) {
                    const removeDate = new Date(item.dt * 1000);
                    this.arrDate.push(removeDate.getDate() + '.' + (removeDate.getMonth() + 1 < 10 ? '0' + (removeDate.getMonth() + 1) : removeDate.getMonth() + 1) + '.' + removeDate.getFullYear());
                    this.arrTemp.push(item.main.temp);
                }
            });
        },
        createdChartDataWeather() {
            const chartData = {
                labels: this.arrDate,
                datasets: [{
                    radius: 5,
                    pointStyle: 'circle',
                    label: 'temperature',
                    data: this.arrTemp,
                    fill: true,
                    pointBackgroundColor: 'rgba(0, 0, 0, 0.5)',
                    BackgroundColor: 'rgba(75, 192, 92, 0.5)',
                    borderColor: 'rgb(75, 192, 92)',
                    pointHoverRadius: '10',
                }]
            };
            const minArg = Math.min(...chartData.datasets[0].data) > 0 ? 0 : Math.min(...chartData.datasets[0].data) - 10;
            const maxArg = Math.max(...chartData.datasets[0].data) + 10;
            this.chartOptionsWeather.scales.y.min = minArg;
            this.chartOptionsWeather.scales.y.max = maxArg;
            return chartData;
        }
    }
}
</script>

<style scoped>
.container__graph {
    margin-bottom: 100px;
}
.container__charts {
    display: flex;
    justify-content: space-around;
}
.chart {
    width: 50%;
}
@media (max-width: 769px) {
    .container__charts {
        flex-direction: column;
        align-items: center;
    }
    .chart {
        width: 100%;
        margin-top: 2vw;
    }
}
</style>