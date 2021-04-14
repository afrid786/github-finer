  import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import User from './components/User';
import axios from 'axios';


class App extends React.Component {

  state = {
    user:[],
    isLoading:false

}
async	componentDidMount () {
this.setState({isLoading:true });  
const res =   await axios.get('https://api.github.com/users')
  this.setState({user:res.data});
  this.setState({isLoading:false})
}

  render() {
    return (
      <div className="App">
       <Navbar title="Github finder"/>
       <div className='container'>
        <User isLoading={this.state.isLoading} user={this.state.user} />
       </div>
       
      </div>
    );
  }
}

export default App;
