import React, { Component } from 'react'
import Chart from 'chart.js';

export default class ChartComponent extends Component {
    componentDidMount() {
        this.renderBarChart()
        this.renderDotChart()
    }

    renderDotChart = () => {
        var ctx = document.getElementById('line-chart');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                datasets: [{
                    data: [500, 740, 800, 2000, 1000, 1500],
                    backgroundColor: [


                    ],
                    borderColor: "red",
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderWidth: 1
                }]
            },
            options: {
                xAxes: [{
                    gridLines: {
                        display: true,
                        drawBorder: true,
                    },
                    ticks: {
                        display: true
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: true,
                        drawBorder: true,
                    },
                    ticks: {
                        display: true
                    }
                }]
            },
            legend: {
                display: false,
                labels: {
                    // This more specific font property overrides the global property

                }
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.yLabel;
                    }
                }
            }
        });

    }

    renderBarChart = () => {
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                datasets: [{
                    data: [500, 740, 800, 2000, 1000, 1500],
                    backgroundColor: [
                        'red',
                        'red',
                        'red',
                        'red',
                        'red',
                        'red',

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                xAxes: [{
                    gridLines: {
                        display: true,
                        drawBorder: true,
                    },
                    ticks: {
                        display: true
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: true,
                        drawBorder: true,
                    },
                    ticks: {
                        display: true
                    }
                }]
            },
            legend: {
                display: false,
                labels: {
                    // This more specific font property overrides the global property

                }
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.yLabel;
                    }
                }
            }
        });

    }
    render() {
        return (
            <div>
                <div className="chart-main-div">

                    <div className="bar-chart">
                        <div className="chart-title-div">
                            <span>Money Commuter saved</span>
                            <div className="text-div">
                                <h1 className="small-font">$1,345</h1>
                                <span className="percentage">7.6%</span>
                            </div>
                        </div>
                        <div className="bar-chart-div">
                            <canvas id="line-chart" width="400" height="400"></canvas>
                        </div>
                    </div>
                    <div className="bar-chart">
                        <div className="chart-title-div">
                            <span>Number of user</span>
                            <div className="text-div">
                                <h1 className="small-font">150</h1>
                                <span className="percentage">7.6%</span>
                            </div>
                        </div>
                        <div className="bar-chart-div">
                            <canvas id="myChart" width="400" height="400"></canvas>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}
