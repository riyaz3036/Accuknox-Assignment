import React, { useState,memo } from 'react';
import './add-widget.css';
import AddWidgetForm from '../AddWidgetForm/AddWidgetForm';
import { useSelector,useDispatch } from 'react-redux';
import { selectWidgetsByCategory } from '../../Store/widgetSlice';
import { deleteWidget } from '../../Store/widgetSlice';

const AddWidget = ({ setAddWidget }) => {
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(0);

    const donutWidgets = useSelector(state => selectWidgetsByCategory(state, 'donut',''));
    const barWidgets = useSelector(state => selectWidgetsByCategory(state, 'bar',''));
    const lineWidgets = useSelector(state => selectWidgetsByCategory(state, 'line',''));

    const handleDelete= (id) => {
        dispatch(deleteWidget(id));
        alert('Widget Deleted Successfully!');
    }
    
    return (
        <div className="add_widget">
            <div className="add_widget_main">
                {/* Top Section */}
                <div className="add_widget_head">
                    <p>Add Widget</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" onClick={() => setAddWidget(0)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>  

                {/* Title */}
                <div>
                    <p className="add_widget_title">Personalize your dashboard by adding the following widget</p>
                </div>

                {/* Categories */}
                <div className="add_widget_categories">
                    <div className={`add_widget_category ${toggle === 0 ? 'add_widget_category_active' : ''}`} onClick={() => setToggle(0)}>
                        <p className="widget_category_title">ADD</p>
                    </div>
                    <div className={`add_widget_category ${toggle === 1 ? 'add_widget_category_active' : ''}`} onClick={() => setToggle(1)}>
                        <p className="widget_category_title">Pie Chart</p>
                    </div>
                    <div className={`add_widget_category ${toggle === 2 ? 'add_widget_category_active' : ''}`} onClick={() => setToggle(2)}>
                        <p className="widget_category_title">Bar Graph</p>
                    </div>
                    <div className={`add_widget_category ${toggle === 3 ? 'add_widget_category_active' : ''}`} onClick={() => setToggle(3)}>
                        <p className="widget_category_title">Line Chart</p>
                    </div>
                </div>

                {/* Form Section */}
                {toggle === 0 && (
                    <AddWidgetForm />                    
                )}

                {/* Widgets Preview */}
                {toggle !== 0 && (
                    <div className="add_widget_widgets">
                        {toggle===1 && donutWidgets.length===0 && (<p className="no_widgets">( No Widgets )</p>)}
                        {
                            toggle===1 && donutWidgets.map((widget)=>(
                                
                                <div key={widget.id} className="add_widget_widget">
                                    <p>{widget.title}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={()=>handleDelete(widget.id)}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </div>
                            ))
                        }
                        {toggle===2 && barWidgets.length===0 && (<p className="no_widgets">( No Widgets )</p>)}
                        {
                            toggle===2 && barWidgets.map((widget)=>(
                                <div key={widget.id}  className="add_widget_widget">
                                    <p>{widget.title}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={()=>handleDelete(widget.id)}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </div>
                            ))
                        }
                        {toggle===3 && lineWidgets.length===0 && (<p className="no_widgets">( No Widgets )</p>)}
                        {
                            toggle===3 && lineWidgets.map((widget)=>(
                                <div key={widget.id}  className="add_widget_widget">
                                    <p>{widget.title}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={()=>handleDelete(widget.id)}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </div>
                            ))
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default memo(AddWidget);
