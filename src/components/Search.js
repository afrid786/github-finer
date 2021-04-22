import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {

    

    state = {
        text:''
    }

    static propTypes = {
        searchUser: PropTypes.func.isRequired,
        clearUser:PropTypes.func.isRequired
    }

    onSubmit  = e => {
        e.preventDefault();
        this.props.searchUser(this.state.text);
        this.setState({text:''});
    }

    render() {
        const {clearUser} = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type='text' placeholder='Search Box....'
                    value={this.state.text}
                    onChange={(e) => this.setState({text:e.target.value})}
                    />
                    <input type='submit' value='Search' className='btn btn-dark btn-block'/>
                    <input type='button' value='Clear' onClick={clearUser} className='btn btn-light btn-block'/>
                </form>
            </div>
        )
    }
}

export default Search
