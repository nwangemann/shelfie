import React, {Component} from 'react';
import './Header.css'
import logo from './logo.png'

class Header extends Component {
    constructor(){
        super()


    }

    render(){
        return(
            <div className="headerParent">
                <img src={logo} alt="logo" className="logo" />
            <div className="headerText">
                <h1>SHELFIE</h1>
            </div>
            </div>
        )
    }
}

export default Header;