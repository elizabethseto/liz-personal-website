import React, { Component } from 'react';
import { Link } from "react-router-dom";

const items = [
    'home',
    'about',
    'education',
    'experience',
]

const activeStyle = {
    fontStyle: 'italic'
}

class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = {
            active : 'home'
        }
    }

    handleClick(item) {
        this.setState({active : item})
    }

    render() {
        return (
            <nav>
                {items.map(item =>
                    <ul>
                        <Link
                            to= {item == 'home' ? '/' : '/' + item}
                            style = {this.state.active == item ? activeStyle : {}}
                            onClick = {this.handleClick.bind(this, item)}
                        >
                            {item}
                        </Link>
                    </ul>
                )}
            </nav>
        )
    }
}
    
export default Navbar