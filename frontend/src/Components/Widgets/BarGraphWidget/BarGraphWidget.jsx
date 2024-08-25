import React, { memo, useMemo } from 'react';
import Chart from 'react-apexcharts';
import './bar-graph-widget.css';

const BarGraphWidget = ({ widget }) => {

  const series = useMemo(() => [
      {
        name: widget.title,
        data: widget.data.map((item) => parseInt(item.value, 10)),
      },
    ],
    [widget.title, widget.data]
  );
  const labels = useMemo(() => widget.data.map((item) => item.field),[widget.data]);
  const colors = useMemo(() => widget.data.map((item) => item.color),[widget.data]);

  const options = useMemo(
    () => ({
      chart: {
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          columnWidth: '50%',
          distributed: true,
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '10px',
          fontWeight: '500',
        },
      },
      xaxis: {
        categories: labels,
        labels: {
          style: {
            fontSize: '10px',
            fontWeight: '500',
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '12px',
            fontWeight: '500',
          },
        },
      },
      colors,
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
    [labels, colors]
  );

  return (
    <div className="bar_graph_widget">
      <p className="widget_title">{widget.title}</p>
      <div className="bar_graph_widget_main">
        <Chart options={options} series={series} type="bar" height={250} width={250} />
      </div>
    </div>
  );
};

export default memo(BarGraphWidget);
