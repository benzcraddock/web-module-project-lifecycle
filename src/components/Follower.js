import React from 'react';

class Follower extends React.Component {
  render () {
    const { follower } = this.props; 
    return(
      <div className="follower">
        <img width="200px" src={follower.avatar_url}/>
        <a href={follower.html_url} target="_blank"><p>{follower.login}</p></a>
      </div>
      // <div className="follower">
      //   <img width="200px" src="https://avatars.githubusercontent.com/u/45055471?v=4"/>
      //   <a href="https://github.com/Jmz0127" target="_blank"><p>Jmz0127</p></a>
      // </div> 
      // <div className="follower">
      //   <img width="200px" src="https://avatars.githubusercontent.com/u/60374084?v=4"/>
      //   <a href="https://github.com/jmerz826" target="_blank"><p>jmerz826</p></a>
      // </div>
      // <div className="follower">
      //   <img width="200px" src="https://avatars.githubusercontent.com/u/68617120?v=4"/>
      //   <a href="https://github.com/oscy7" target="_blank"><p>oscy7</p></a>
      // </div>
    )
  }
}

export default Follower;
