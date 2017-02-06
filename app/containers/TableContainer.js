import React from 'react'
import Table from '../components/Table'
import TableHelper from '../helpers/TableHelper'

export default class TableContainer extends React.Component{
  constructor() {
    super()
    this.state = {
      table: [],
      active: true
    }
  }
  getTable(recent) {
    if(recent){
      TableHelper.getRecent()
        .then(result => {
          this.setState({
            table: result.data,
            active: true
          })
        })
    }
    else{
      TableHelper.getAllTime()
        .then(result => {
          this.setState({
            table: result.data,
            active: false
          })
        })
    }

  }
  componentDidMount() {
    this.getTable(true)
  }
  handleClickRecent(e) {
    this.getTable(true)

  }
  handleClickAllTime(e) {
    this.getTable(false)
  }
  render() {
    return(
      <div>
        <Table table={this.state.table} active={this.state.active} onClickRecent={this.handleClickRecent.bind(this)} onClickAllTime={this.handleClickAllTime.bind(this)}/>
      </div>
    )
  }
}