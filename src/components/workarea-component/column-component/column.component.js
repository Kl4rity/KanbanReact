import React from 'react';
import Card from '../card-component/card.component';

const Column = (props)=>{

    return (
        <React.Fragment>
            <div className = "col s4 m4 l4">
                <h4 className="center-align">{props.title}</h4>
                {props.cards.map(
                    (card)=>{
                        return <Card {...card} key={card.id}/>
                    })}
            </div>
        </React.Fragment>
    )
}

export default Column;