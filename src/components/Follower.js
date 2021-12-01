import React from 'react';

class Follower extends React.Component {
  render () {
    const { follower } = this.props; 
    return(
      <div className="follower">
        <img width="200px" src={follower.avatar_url}/>
        <a href={follower.html_url} target="_blank"><p>{follower.login}</p></a>
      </div>
    )
  }
}

export default Follower;
