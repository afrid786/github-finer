  import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import User from './components/User';
import Search from './components/Search';

import axios from 'axios';


class App extends React.Component {

  state = {
    user:[],
    isLoading:false

}
// async	componentDidMount () {
// this.setState({isLoading:true });  
// const res =   await axios.get('https://api.github.com/users')
//   this.setState({user:res.data});
//   this.setState({isLoading:false})
// }


searchUsers = async (text) => {
  this.setState({isLoading:true });  
  const res =   await axios.get(`https://api.github.com/search/users?q=${text}`)
  //console.log(res.data);
    this.setState({user:res.data.items});
    this.setState({isLoading:false})
}

clearUsers = () => {
  this.setState({user:[],isLoading:false});
}
  render() {

    const {user,isLoading} = this.state;
    return (
      <div className="App">
       <Navbar title="Github finder"/>
       <Search  searchUser={this.searchUsers} clearUser={this.clearUsers}/>
       <div className='container'>
        <User isLoading={isLoading} user={user} />
       </div>
       
      </div>
    );
  }
}

export default App;
