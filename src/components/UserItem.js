import React from 'react'
import {Link} from 'react-router-dom';

const UserItem = (props) => {
    const { avatar_url, login} = props.user;
        return (
            <div  className="card text-center">
               <img 
                src={avatar_url}
                alt={login}
                className='round-img'
                style={{width:"60px"}}
               />
               <h3>{login}</h3>
                <div>
                    <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-I'>
                    more
                    </Link>
                </div>    
            </div>
        )
}

export default UserItem