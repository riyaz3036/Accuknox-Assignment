import React,{useState,memo} from 'react'
import './add-widget-form.css'
import { useDispatch } from 'react-redux';
import { addWidget } from '../../Store/widgetSlice';

const AddWidgetForm = () =>{

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('donut');
    const [fields, setFields] = useState([{ field: '', value: '', color: '' }]);
    const dispatch = useDispatch();
    
    //to handle change in input feilds
    const handleInputChange = (index, event) => {
        const values = [...fields];
        values[index][event.target.name] = event.target.value;
        setFields(values);
    };

    // to add a new feild to feilds
    const handleAddField = () => {
        setFields([...fields, { field: '', value: '', color: '' }]);
    };
    
    // to remove a feild from feilds
    const handleRemoveField = (index) => {
        const values = [...fields];
        values.splice(index, 1);
        setFields(values);
    };

    //to handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const newWidget = {
            title,
            category,
            data: fields,
        };
        dispatch(addWidget(newWidget));
        alert('Added Widget Successfully!')
        window.location.reload();
    };

    return(
        <form onSubmit={handleSubmit} className="add_widget_form">
            <div className="widget_form_title">
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div className="widget_form_title">
                <label>Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="donut">Donut Chart</option>
                    <option value="bar">Bar Graph</option>
                    <option value="line">Stacked Line Graph</option>
                </select>
            </div>
            {fields.map((field, index) => (
                <div key={index} className="widget_form_feilds">
                    <div className="widget_form_feild">
                        <label>Field Name:</label>
                        <input type="text" name="field" value={field.field} onChange={(e) => handleInputChange(index, e)} required />
                    </div>
                    <div className="widget_form_feild">
                        <label>Value:</label>
                        <input type="number" name="value" value={field.value} onChange={(e) => handleInputChange(index, e)} required />
                    </div>
                    <div className="widget_form_feild">
                        <label>Color:</label>
                        <input type="color" name="color" value={field.color} onChange={(e) => handleInputChange(index, e)} required />
                    </div>
                    <button className="widget_form_remove" type="button" onClick={() => handleRemoveField(index)}>Remove Field</button>
                </div>
            ))}
            <button className="widget_form_add_feild" type="button" onClick={handleAddField}>Add Another Field</button>
            <button className="widget_form_submit" type="submit">Add Widget</button>
        </form>
    )
}

export default memo(AddWidgetForm);