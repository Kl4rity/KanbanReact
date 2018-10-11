import React from 'react';

const Card = (props)=>{
    
    return(
        <React.Fragment>
            <div>{props.title}</div>
            <div>{props.content}</div>
            <div>
                <span>{'<-'}</span>
                <span>{props.timeEstimate}</span>
                <span>{'->'}</span>
            </div>
        </React.Fragment>
    )
}

export default Card;