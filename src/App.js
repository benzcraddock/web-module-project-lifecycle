import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';

class App extends React.Component {
  state = {
    currentUser: "benzcraddock",
    user: {
      avatar_url: "https://avatars.githubusercontent.com/u/84107471?v=4",
      html_url: "https://github.com/benzcraddock",
      name: "Benjamin Craddock",
      login: "benzcraddock",
      public_repos: 50,
      followers: 29
    },
    followers: [
      {
        login: "mayankmmmx",
        avatar_url: "https://avatars.githubusercontent.com/u/5217785?v=4",
        html_url: "https://github.com/mayankmmmx"
      },
      {
        login: "mayankmmmx",
        avatar_url: "https://avatars.githubusercontent.com/u/5217785?v=4",
        html_url: "https://github.com/mayankmmmx"
      },
      {
        login: "mayankmmmx",
        avatar_url: "https://avatars.githubusercontent.com/u/5217785?v=4",
        html_url: "https://github.com/mayankmmmx"
      }
    ]
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
