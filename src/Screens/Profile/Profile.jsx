import Button from '@mui/material/Button';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {FormSubmit} from '../../Components/FormSubmit/FormSubmit';
import './Profile.css';
import  {initUserData, setName, toggleName} from '../../Store/Profile/actions';
import { selectShowName, selectUserName } from '../../Store/Profile/selectors';
import { logOut, userNameRef, userShowNameRef } from "../../Service/Firebase";
import { useEffect } from "react";
import { set} from 'firebase/database';

export function Profile(){

    const showName=useSelector(selectShowName);
    const userName=useSelector(selectUserName);
    
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(initUserData());      

    },[]);

    const handleChange=(e)=>{
        set(userShowNameRef, e.target.checked);
        dispatch(toggleName(e.target.checked)); 
    };

    const handleSubmitName=(newName)=>{
        set(userNameRef, newName);
        dispatch(setName(newName));
    };

    const handleLogOutClick=()=>{
        logOut();
    };

    return (
        <>
    <h3 className="Profile-heading">PROFILE PAGE</h3>
        <div>
        <Button variant="outlined" className='User-log-out-box' style={{borderColor:'red', color:'red',}} onClick={handleLogOutClick}>Sign Out</Button>
        </div>
    <div className='Profile-form-block'>
        <div className='User-name-block'>
            <div className='User-name-field-box'>
        {showName && <span className='User-name-field'>{userName}</span>}
            </div>

        <div className='User-name-check-box'>
        <input type="checkbox" className='User-name-check' checked=
        {showName} onChange={handleChange}  />
        {/* {fbData.showName} onChange={handleChange}  /> */}
        {/* <input type="checkbox" className='User-name-check' checked={showName} onChange={handleChange}  /> */}
        </div>

        </div>
        
      <FormSubmit onSubmit={handleSubmitName} />

    </div>
            
        </>
        
    )


};

export default Profile;

