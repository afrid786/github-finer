import React from 'react';
import PropTypes from 'prop-types';

import UserItem from './UserItem';
import Spinner from './Spinner'

 const User = ({isLoading,user}) => {
    if(isLoading) {
        return (<Spinner/>)
    }else {
        return (
            <div style={userStyle}>
            {user.map(user => <UserItem key={user.id} user={user}/>)}
            </div>
       )
    }
	
}

User.propTypes = {
    isLoading:PropTypes.bool.isRequired,
    user:PropTypes.array.isRequired
}

const userStyle = {
    display:'grid',
    gridTemplateColumns:'repeat(3,1f)',
    gridGap:'1rem'

}

export default User;
