import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Navbar extends Component {

    static propTypes = {
        title:PropTypes.string.isRequired,
    }

    render() {
        return (
            <nav className='navbar bg-primary'>
                {this.props.title}
            </nav>
        )
    }
}

export default Navbar
