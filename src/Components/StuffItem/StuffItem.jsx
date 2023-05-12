import './StuffItem.css';

export function StuffItem({id,title,summary,url}){
    return (
    <div key={id} className='Stuff-item-box'>
    <span className='Stuff-item-title'>{title}</span>
    <div className='Stuff-item-content'>
        <span className='Stuff-item-summary'>{summary}</span>
        <span className='Stuff-item-url'><a href={url}>More information...</a></span>
    </div>
    
    </div>
    );
};