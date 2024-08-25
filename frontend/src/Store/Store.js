import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import widgetsReducer from './widgetSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, widgetsReducer);

const store = configureStore({
  reducer: {
    widgets: persistedReducer, 
  },
});

const persistor = persistStore(store);

export { store, persistor };
