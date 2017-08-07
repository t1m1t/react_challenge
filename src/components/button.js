import React from 'react';
import { colorClass } from './helper_functions';


export default props => {
    // let color = colorClass(props.color)

    // if (color !== ''){
    //     if (props.outline){
    //         color = `btn-outline-${color}`
    //     } else {
    //         color = `btn-${color}`
    //     }
    // }

    const color = colorClass(props.color);

    const btnClass = color !== '' ? props.outline ? `btn-outline-${color}` : `btn-${color}` : '';

    return <button onClick={(e) => props.onClick(e)} className={`btn ${btnClass} ${props.className}`}>{props.text}</button>
}