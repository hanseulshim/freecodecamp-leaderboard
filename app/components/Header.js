import React from 'react'

export default class Header extends React.Component{
  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Freecodecamp Leaderboard</a>
            </div>
          </div>
      </nav>
    )
  }
}