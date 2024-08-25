import React, { memo, useMemo } from 'react';
import Chart from 'react-apexcharts';
import './donut-chart-widget.css';

const DonutChartWidget = ({ widget }) => {
 
  const series = useMemo(() => widget.data.map((item) => parseInt(item.value, 10)),[widget.data]);
  const labels = useMemo(() => widget.data.map((item) => item.field),[widget.data]);
  const colors = useMemo(() => widget.data.map((item) => item.color),[widget.data]);

  const options = useMemo(
    () => ({
      chart: {
        type: 'donut',
      },
      labels,
      colors,
      legend: {
        position: 'bottom',
        offsetX: -40,
        verticalAlign: 'middle',
        fontWeight: '500',
        fontSize: '10px',
        color: '#000000',
        markers: {
          width: 5,
          height: 5,
          strokeWidth: 4,
          strokeColor: '#fff',
          radius: 0,
        },
        itemMargin: {
          horizontal: 2,
          vertical: 0,
        },
        formatter: (seriesName, opts) => {
          const value = opts.w.config.series[opts.seriesIndex];
          return `${seriesName} (${value})`;
        },
      },
      plotOptions: {
        pie: {
          donut: {
            size: '60%',
          },
        },
      },
      stroke: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 678,
          options: {
            chart: {
              width: 200,
              height: 200,
            },
            xaxis: {
              labels: {
                rotate: -90,
              },
            },
          },
        },
      ],
    }),
    [labels, colors]);

  return (
    <div className="donut_chart_widget">
      <p className="widget_title">{widget.title}</p>
      <div className="donut_chart_widget_main">
        <Chart options={options} series={series} type="donut" height={350} width={350} />
      </div>
    </div>
  );
};

export default memo(DonutChartWidget);
