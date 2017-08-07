import React from 'react';
import { colorClass } from './helper_functions';


export default props => {

    let color = colorClass(props.bgColor);

    if(color !== ''){
        color = `card-inverse card-${color}`;
    }

    return(
        <div className={`card ${color} ${props.className}`}>
            <div className="card-block">
                <h4 className="card-title">{props.title}</h4>
                <h6 className="card-subtitle">{props.subtitle}</h6>
                {props.children}
            </div>
        </div>
    )
}