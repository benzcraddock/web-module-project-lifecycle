import React from 'react';

class App extends React.Component {
  render() {
    return(
    <div>
      <h1>Github Info</h1>
      <form>
        <input placeholder="Github Handle"/>
        <button>Search</button>
      </form>

      <div id="UserCard">
        <img src="https://avatars.githubusercontent.com/u/84107471?v=4"/>
        <a href="https://github.com/benzcraddock" target="_blank"><h3>Benjamin Craddock</h3></a>
        <p>(benzcraddock)</p>
        <p>Total Repos: 50</p>
        <p>Total Followers: 29</p>
      </div>

      <div id="followers">
        <div className="follower">
          <img width="200px" src="https://avatars.githubusercontent.com/u/5217785?v=4"/>
          <a href="https://github.com/mayankmmmx" target="_blank"><p>mayankmmmx</p></a>
        </div>
        <div className="follower">
          <img width="200px" src="https://avatars.githubusercontent.com/u/45055471?v=4"/>
          <a href="https://github.com/Jmz0127" target="_blank"><p>Jmz0127</p></a>
        </div>
        <div className="follower">
          <img width="200px" src="https://avatars.githubusercontent.com/u/60374084?v=4"/>
          <a href="https://github.com/jmerz826" target="_blank"><p>jmerz826</p></a>
        </div>
        <div className="follower">
          <img width="200px" src="https://avatars.githubusercontent.com/u/68617120?v=4"/>
          <a href="https://github.com/oscy7" target="_blank"><p>oscy7</p></a>
        </div>
      </div>
      
    </div>
    );
  }
}

export default App;
