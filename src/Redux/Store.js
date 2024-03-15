import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from "./reducer";

const persistConfig = {
    key : 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig,reducer )
export const myStore = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
export const persistor = persistStore(myStore)