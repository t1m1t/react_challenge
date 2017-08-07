import React from 'react';
import Card from './card';
import Button from './button';


function clickHandler(e){
    console.log('Button clicked', e.target.innerText);
}

const App = () => (
    <div className="container">
        <Card className="mt-3" title="Some title" subtitle="Something sub" bgColor="blue">  
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
            <ul>
                <li>Some</li>
                <li>List</li>
                <li>Of Stuff</li>
            </ul>
        </Card>
        <Card className="mt-3" title="Angry card" subtitle="This is an example of an angry card" bgColor="yellow">
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </Card>
        <div className="my-4">
            <Button onClick={clickHandler} color="red" text="Click me 1" outline />
            <Button onClick={clickHandler} color="success" text="Click me 2" />
            <Button onClick={clickHandler} color="babyblue" text="Click me 3" />
        </div>
    </div>
);

export default App;
