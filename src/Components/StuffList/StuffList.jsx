import './StuffList.css';
import {StuffItem} from '../StuffItem/StuffItem';
import {v4 as uuidv4} from 'uuid';

export function StuffList({stuff}){
    return             <div className='Stuff-list-box'>
    {stuff.map((stuff)=>(
        <StuffItem key={uuidv4()} id={stuff.id} title={stuff.title} summary={stuff.summary} url={stuff.url} />
    ))}
</div>
}