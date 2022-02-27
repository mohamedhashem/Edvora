import React, { Component } from 'react';
import {Link, Outlet} from 'react-router-dom'
import './tab-view.styles.scss'
 


class Tabview extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div className='tab-view'>
                <Link className='option' to='nearest-rides' >
                Nearest Rides
                </Link>
                <Link className='option' to='upcoming-rides' >
                   Upcoming Rides
                </Link>
                <Link className='option' to='past-rides' >
                    Past Rides
                </Link>
                <div >
                    <Outlet/>
                </div>

            </div>
        );
    }
}

export default Tabview;