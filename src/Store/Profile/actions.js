import { SHOW_NAME, SET_NAME,} from "./constants";
import { SIGN_IN, SIGN_OUT } from "./constants";
import {onAuthStateChanged} from 'firebase/auth';
import { auth } from "../../Service/Firebase";
import {onValue, set} from 'firebase/database';
import { userNameRef, userShowNameRef } from "../../Service/Firebase";

export const toggleName=(value)=>({
    type: SHOW_NAME,
    payload: value,   
});

export const setName=(newName)=>({
    type:SET_NAME,
    newName,

});

export const signIn=()=>({
    type: SIGN_IN,
});

export const signOut=()=>({
    type: SIGN_OUT,
});

//Firebase

export const initAuthTracking=()=>(dispatch)=>{
    onAuthStateChanged(auth, (user)=>{
        if (user) {
            dispatch(signIn());
        } else {
            dispatch(signOut());
        }
    });

};

export const initUserData=()=>(dispatch)=>{
    onValue(userNameRef, (snapshot)=>{
        const userName=snapshot?.val();
        dispatch(setName(userName));
    });
    onValue(userShowNameRef, (snapshot)=>{
        const userShowName=snapshot?.val();
        dispatch(toggleName(userShowName));
    });

};

export const setNameInDB = (newName)=>() => {
    set(userNameRef, newName);
};

export const setShowNameInDB = (newValue)=>() => {
    set(userShowNameRef, newValue);
};

