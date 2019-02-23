import React, { Component } from 'react';
import { colors } from '../constants';
import { HorizontalBar } from 'react-chartjs-2';
import { H4 } from '../common/styled-text';
import { ChartContainer } from '../common/styled-container';
import Chart from 'chart.js';

export default class SkillChart extends Component {

    render() {
        const data = {
            labels: ['Python', 'JS', 'PHP', 'GoLang', 'Java'],
            datasets: [
                {
                    backgroundColor: colors.secondaryOrange,
                    borderWidth: 0,
                    //hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    //hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [10,9,8,7.5,7]
                }
            ],
        }

        const options = {
            legend: {
                labels: {
                    fontSize: 0
                }
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        drawBorder: true,
                        display: false,
                    }
                }],
                xAxes: [{
                    gridLines: {
                        drawBorder: true,
                        display: false,
                    },
                    ticks: {
                        beginAtZero:true
                    }
                }],
            },
            defaultFontFamily: Chart.defaults.global.defaultFontFamily = 'Kano',
        }

        return (
            <ChartContainer>
                <H4 color={colors.purple}>PROG. LANGUAGES</H4>
                <HorizontalBar data={data} options={options}/>
            </ChartContainer>
        );
    }
}
