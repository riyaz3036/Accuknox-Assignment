import React, { memo, useMemo } from 'react';
import './line-graph-widget.css';

const LineGraphWidget = ({ widget }) => {
  const { title, data } = widget;

  //calculating the total
  const totalValue = useMemo(() => data.reduce((acc, { value }) => acc + parseInt(value, 10), 0),[data]);

  return (
    <div className="stacked_line_widget">
      <p className="widget_title">{title}</p>

      <div className="stacked_line_chart_main">
        <div className="stacked_line_chart_content">
          {data.map(({ field, value, color }) => (
            <div key={field} className="stacked_line_chart_element" style={{width: `${(parseInt(value, 10) / totalValue) * 100}%`,backgroundColor: color,}}></div>
          ))}
        </div>
      </div>

      <div className="stacked_line_chart_labels">
        {data.map(({ field, value, color }) => (
          <div key={field} className="stacked_line_chart_label">
            <div className="label_color" style={{ backgroundColor: color }}></div>
            <p className="label_text">{field} ({value})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(LineGraphWidget);
