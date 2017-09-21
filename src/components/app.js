import React from 'react';
import './app.css';
import StaffSection from './staff_section';
import PaneOne from './pane_1';
import PaneTwo from './pane_2';
import PaneThree from './pane_3';


const App = () => (
    <div className="about_us">
        <div className="top_pane_area">
            <PaneOne />
            <PaneTwo />
            <PaneThree />
        </div>
        <div className="bottom_staff_area">
            <StaffSection />
        </div>
    </div>
);

export default App;
