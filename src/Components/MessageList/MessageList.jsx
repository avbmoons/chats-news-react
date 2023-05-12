import './MessageList.css';
import { Message } from '../Message/Message';
import {AUTHORS} from '../../utils/constants';

export function MessageList({messages}){

    return <div className="Message-list-box">{messages.map(({id, author, text,})=>(
        <Message key={id} className={author===AUTHORS.HUMAN ? "human-msg" : "bot-msg"} author={author} text={text} />
        ))}
    </div>


};

