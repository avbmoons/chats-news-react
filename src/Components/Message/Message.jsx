import {AUTHORS} from '../../utils/constants';
import './Message.css';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../Store/Profile/selectors';

export function Message({id, author, text}){

    const userName=useSelector(selectUserName);

    return (
    <div className="Message-box" key={id}>
    <span className="Message-author">{author===AUTHORS.HUMAN ? userName : author}</span>

    <p className="Message-text">{text}</p>

    </div>
    );
};
