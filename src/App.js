import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';

import axios from 'axios';

class App extends React.Component {
  state = {
    currentUser: "benzcraddock",
    user: {},
    followers: []
  }

  componentDidMount () {
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
      .then(res => {
        this.setState({
          ...this.state,
          user: res.data
        });
      })
  }

  componentDidUpdate (prevProps, prevState) {
    if(this.state.user !== prevState.user) {
      axios.get(`https://api.github.com/users/${this.state.currentUser}/followers`)
      .then(res => {
        this.setState({
          ...this.state,
          followers: res.data
        });
      })
    }
  }

  render() {
    return(
    <div>
      <h1>Github Info</h1>
      <form>
        <input placeholder="Github Handle"/>
        <button>Search</button>
      </form>

      <User user={this.state.user}/>
      <FollowerList followers={this.state.followers}/>
      
    </div>
    );
  }
}

export default App;
