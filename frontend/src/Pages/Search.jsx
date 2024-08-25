import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../styles/search.css'
import DonutChartWidget from '../Components/Widgets/DonutChartWidget/DonutChartWidget'
import BarGraphWidget from '../Components/Widgets/BarGraphWidget/BarGraphWidget'
import LineGraphWidget from '../Components/Widgets/LineGraphWidget/LineChartWidget'
import { useSelector } from 'react-redux';
import { selectWidgetsByCategory } from '../Store/widgetSlice';

const Search = ()=>{

    const navigate = useNavigate();
    const {id} = useParams();

    const donutWidgets = useSelector(state => selectWidgetsByCategory(state, 'donut', `${id}`));
    const barWidgets = useSelector(state => selectWidgetsByCategory(state, 'bar',`${id}`));
    const lineWidgets = useSelector(state => selectWidgetsByCategory(state, 'line',`${id}`));

    return(
        <div className="search_main">
            <div className="search_title_section">
                <p className="search_title">Search Results for '{id}'</p>
                <div className="search_return" onClick={()=>navigate('/home')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                    <p>Back to Home</p>
                </div>
            </div>

            <div className="dashboard_main">
                {/* Donut charts Section */}
                <div className="widgets_section">
                    <p className="widgets_section_title">Pie Charts:</p>
                    <div className="widgets_section_main">
                    {donutWidgets.length ===0 && (<p className="no_search_widgets">(No Widgets Found)</p>)}
                    {
                        donutWidgets?.map((widget=>(
                            <DonutChartWidget key={widget.id} widget={widget}/>
                        )))
                    }
                    </div>
                </div>

                {/* Pie charts Section */}
                <div className="widgets_section">
                    <p className="widgets_section_title">Bar Graphs:</p>
                    <div className="widgets_section_main">
                    {barWidgets.length ===0 && (<p className="no_search_widgets">(No Widgets Found)</p>)}
                    {
                        barWidgets?.map((widget=>(
                            <BarGraphWidget key={widget.id} widget={widget}/>
                        )))
                    }
                    </div>
                </div>

                {/* Donut charts Section */}
                <div className="widgets_section">
                    <p className="widgets_section_title">Line Graphs</p>
                    <div className="widgets_section_main">
                    {lineWidgets.length ===0 && (<p className="no_search_widgets">(No Widgets Found)</p>)}
                    {
                        lineWidgets?.map((widget=>(
                            <LineGraphWidget key={widget.id} widget={widget}/>
                        )))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;