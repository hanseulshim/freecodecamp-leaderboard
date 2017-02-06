import React from 'react'


export default class Row extends React.Component{
  render() {
    return(
      <tr>
        <td>{this.props.rank}</td>
        <td><img style={{width:'50px',marginRight:'10px'}} src={this.props.img} className="img-circle" />{this.props.username}</td>
        <td>{this.props.recent}</td>
        <td>{this.props.alltime}</td>
      </tr>
    )
  }
}

Row.propTypes = {
  rank: React.PropTypes.number.isRequired,
  img: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
  recent: React.PropTypes.number.isRequired,
  alltime: React.PropTypes.number.isRequired
}