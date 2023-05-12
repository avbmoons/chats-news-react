import {ADD_CHAT} from './constants';
import { DELETE_CHAT } from './constants';

export const addChat=(newChat)=>({
    type: ADD_CHAT,
    payload: newChat,

});

export const deleteChat=(chatId)=>({
    type: DELETE_CHAT,
    payload: chatId,
});

// export const thunkAction=(arg)=>(dispatch, getState)=>{
//     console.log(arg);
//     console.log(getState());
// }
