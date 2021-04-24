  import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import User from './components/User';
import Search from './components/Search';
import Alert from './components/Alert';
import About from './pages/About';


import axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SingleUser from './components/SingleUser';

class App extends React.Component {

  state = {
    user:[],
    singleUser:{},
    repos:[],
    isLoading:false,
    alert:null

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

//Get single user
getUser = async (username) => {
  this.setState({isLoading:true });  
  const res =   await axios.get(`https://api.github.com/users/${username}`)
    this.setState({singleUser:res.data});
    this.setState({isLoading:false})
}

//Get user repos
getUserRepos = async (username) => {
  this.setState({isLoading:true });  
  const res =   await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`)
    this.setState({repos:res.data});
    this.setState({isLoading:false})
}


clearUsers = () => {
  this.setState({user:[],isLoading:false});
}
 setAlert = (msg,type) => {
   this.setState({alert:{msg,type}});

   setTimeout(() => this.setState({alert:null}),2000);
 }

  render() {

    const {user,isLoading,alert,singleUser,repos} = this.state;
    return (
      <Router>
      <div className="App">
       <Navbar title="Github finder"/>
       <div className='container'>
        <Alert alert={alert}/>

        <Switch>
          <Route exact path='/' render={props => (
            <React.Fragment>
              <Search  searchUser={this.searchUsers}
              clearUser={this.clearUsers}
              setAlert={this.setAlert}
              />
              <User isLoading={isLoading} user={user} />
            </React.Fragment>
          )}/>

          <Route exact path='/about' component={About}/>
          <Route exact path='/user/:login'
          render={(props) => (
            <SingleUser
              {...props}
              getUser={this.getUser}
              getUserRepos={this.getUserRepos}
              repos={repos}
              user={singleUser}
              isLoading={isLoading}
            
            />
          )} />
        
        </Switch>
       </div>
       
      </div>
      </Router>
    );
  }
}

export default App;
