import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    widgets: [],
};

const widgetsSlice = createSlice({
    name: 'widgets',
    initialState,
    reducers: {
        addWidget: (state, action) => {
            const newWidget = {
                id: uuidv4(),
                ...action.payload,
            };
            state.widgets.push(newWidget);
        },
        deleteWidget: (state, action) => {
            state.widgets = state.widgets.filter(widget => widget.id !== action.payload);
        }
    },
});

export const selectWidgetsByCategory = (state, category, searchText) => state.widgets.widgets.filter(widget =>
    widget.category === category &&
    widget.title.toLowerCase().includes(searchText.toLowerCase()));
export const { addWidget, deleteWidget } = widgetsSlice.actions;
export default widgetsSlice.reducer;
