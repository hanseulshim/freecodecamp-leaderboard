import React from 'react'
import Header from './Header'
import Row from './Row'

const style = {
  panel: {
    width: "70%",
    margin: "auto"
  },
  panelHeading: {
    fontWeight: 'bold'
  }
}

export default class Table extends React.Component{
  render(){

      let tableData = this.props.table.map((data, index) => 
        <Row key={index} rank={index+1} username={data.username} recent={data.recent} alltime={data.alltime} img={data.img} />
      )

    return (
      <div className="panel panel-default" style={style.panel}>
        <div className="panel-heading text-center" style={style.panelHeading}>Leaderboard</div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
               <th style={{width:'3%'}}>#</th>
               <th style={{width:'40%'}}>Name</th>
               <th style={{width:'30%'}} className={this.props.active ? 'active' : 'default'} onClick={this.props.onClickRecent}>Points in last 30 days</th>
               <th style={{width:'27%'}} className={this.props.active ? 'default' : 'active'} onClick={this.props.onClickAllTime}>All Time Points</th>
            </tr>
          </thead>
          <tbody>
            {tableData}
          </tbody>
        </table>
      </div>

    )
  }
}

Table.propTypes = {
  table: React.PropTypes.array.isRequired,
  active: React.PropTypes.bool.isRequired,
  onClickRecent: React.PropTypes.func.isRequired,
  onClickAllTime: React.PropTypes.func.isRequired
}