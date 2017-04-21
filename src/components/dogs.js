import React from 'react';
import puppy1 from './imgs/puppy.jpg';
import puppy2 from './imgs/puppy2.jpg';
import puppy3 from './imgs/puppy3.jpeg';
import puppy4 from './imgs/puppy4.jpeg';

import './css/dogs.css';


export default () => (
    <div className="dog-grid">
        <div>
            <img className="dog-img" src={puppy1} alt=""/>
        </div>
        <div>
            <img className="dog-img" src={puppy2} alt=""/>
        </div>
        <div>
            <img className="dog-img" src={puppy3} alt=""/>
        </div>
        <div>
            <img className="dog-img" src={puppy4} alt=""/>
        </div>
    </div>
)