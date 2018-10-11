import React from 'react';
import Card from '../card-component/card.component';

const Column = (props)=>{

    return (
        <React.Fragment>
            <h3>{props.title}</h3>
            {props.cards.map((card)=>{return <Card {...card} key={card.id}/>})}
        </React.Fragment>
    )
}

export default Column;