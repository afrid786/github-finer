import React from 'react'
// import axios from 'axios';

const UserItem = (props) => {
    const {html_url , avatar_url, login} = props.user;
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
                    <a href={html_url} className='btn btn-dark btn-sm my-I'>
                    more
                    </a>
                </div>    
            </div>
        )
}

export default UserItem