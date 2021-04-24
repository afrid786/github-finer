import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export class Navbar extends Component {

    static propTypes = {
        title:PropTypes.string.isRequired,
    }

    render() {
        return (
            <nav className='navbar bg-primary'>
                {this.props.title}
            <ul>
                <li>
                    <Link to='/'>Home</Link> 
                </li>
                <li>
                    <Link to='/about'>About</Link> 
                </li>
            </ul>
            </nav>
        )
    }
}

export default Navbar
