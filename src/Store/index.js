import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import{persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default to localStorage for web
import { profileReducer } from './Profile/reducer';
import { chatsReducer } from './Chats/reducer';
import { messagesReducer } from './Messages/reducer';
import { articlesReducer } from './Articles/reducer';

const persistConfig={
    key: 'gbMessenger',
    storage,

};

const rootReducer=combineReducers({
    messages: messagesReducer,
    chats: chatsReducer,
    profile: profileReducer,
    articles: articlesReducer,       

});

const persistedReducer=persistReducer(persistConfig, rootReducer);

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk)),
);

export const persistor=persistStore(store);

