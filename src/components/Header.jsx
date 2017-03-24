import React, {Component} from 'react';
import './Header.css';



class Header extends Component {

    render() {
        return (

            <div className="header-main">
                <ul>
                    <li>Measure</li>
                    <li>Cash</li>
                    <li>Weather</li>
                </ul>
            </div>
        );
    }
}

export default Header;