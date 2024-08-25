import React,{useState} from 'react'
import '../styles/home.css'
import DonutChartWidget from '../Components/Widgets/DonutChartWidget/DonutChartWidget'
import BarGraphWidget from '../Components/Widgets/BarGraphWidget/BarGraphWidget'
import LineGraphWidget from '../Components/Widgets/LineGraphWidget/LineChartWidget'
import AddWidget from '../Components/AddWidget/AddWidget'
import { useSelector } from 'react-redux';
import { selectWidgetsByCategory } from '../Store/widgetSlice';


const Home =()=> {

  const [addWidget,setAddWidget] = useState(0);

  const donutWidgets = useSelector(state => selectWidgetsByCategory(state, 'donut', ''));
  const barWidgets = useSelector(state => selectWidgetsByCategory(state, 'bar',''));
  const lineWidgets = useSelector(state => selectWidgetsByCategory(state, 'line',''));

  return (
    <div className="dashboard"> 
        {/* Top Section */}
        <div className="dashboard_title_section">
            <p className="dashboard_title">Dashboard</p>
            <div className="dashboard_title_right">
                <button className="dashboard_title_right_button" onClick={()=>setAddWidget(1)}>
                    <p>Add Widget</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
                <button className="dashboard_title_right_button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                </button>
                <button className="dashboard_title_right_button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                </button>
                <div className="last_seen">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="last_seen_icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <div className="last_seen_main">
                        <p>Last 2 days</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        {/* Dashboard Main Section */}
        <div className="dashboard_main">
          {/* Donut charts Section */}
          <div className="widgets_section">
            <p className="widgets_section_title">Pie Charts:</p>
            <div className="widgets_section_main">
              {
                donutWidgets?.map((widget=>(
                    <DonutChartWidget key={widget.id} widget={widget}/>
                )))
              }
              <div className="dashboard_add_widget" onClick={()=>setAddWidget(1)}>
                  <div className="dashboard_add_widget_main">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                      <p>Add Widget</p>
                  </div>
              </div>
            </div>
          </div>

          {/* Bar Graphs Section */}
          <div className="widgets_section">
            <p className="widgets_section_title">Bar Graphs:</p>
            <div className="widgets_section_main">
              {
                barWidgets?.map((widget=>(
                    <BarGraphWidget key={widget.id} widget={widget}/>
                )))
              }
              <div className="dashboard_add_widget" onClick={()=>setAddWidget(1)}>
                  <div className="dashboard_add_widget_main">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                      <p>Add Widget</p>
                  </div>
              </div>
            </div>
          </div>

          {/* Line charts Section */}
          <div className="widgets_section">
            <p className="widgets_section_title">Line Graphs</p>
            <div className="widgets_section_main">
              {
                lineWidgets?.map((widget=>(
                    <LineGraphWidget key={widget.id} widget={widget}/>
                )))
              }
              <div className="dashboard_add_widget" onClick={()=>setAddWidget(1)}>
                  <div className="dashboard_add_widget_main">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                      <p>Add Widget</p>
                  </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Widget */}
        {
          addWidget?
          <AddWidget setAddWidget={setAddWidget} />
          :
          <></>
        }

    </div>
  )
}

export default Home;
