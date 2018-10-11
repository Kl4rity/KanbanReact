import React from 'react';

const Card = (props) => {

    return (
        <React.Fragment>
            <div className="card">
                <div className="card-content">
                    <span className="card-title" style={cardRootStyle}>{props.title}</span>
                    <p>{props.content}</p>
                    <div className="card-action" style={actionSectionStyle}>
                        <span className="col s4 m4 l4"><a style={leftArrowStyle}>{'<-'}</a></span>
                        <span className="col s4 m4 l4"><a style={centerStyle}>{props.timeEstimate}</a></span>
                        <span className="col s4 m4 l4"><a style={rightArrowStyle}>{'->'}</a></span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const paddingStrength = "15%";

const cardRootStyle = {
    fontSize : "1.5em",
    lineHeight: "normal",
    color : "black"
}

const leftArrowStyle = {
    paddingLeft: paddingStrength,
    paddingRight: paddingStrength
}

const centerStyle = {
    paddingLeft: paddingStrength,
    paddingRight: paddingStrength
}

const rightArrowStyle = {
    paddingLeft: paddingStrength,
    paddingRight: paddingStrength
}

const actionSectionStyle = {
    padding: "0.5em"
}

export default Card;