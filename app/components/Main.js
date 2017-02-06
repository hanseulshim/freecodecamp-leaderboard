import React from 'react'
import Header from './Header'
import TableContainer from '../containers/TableContainer'

export default class Main extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <TableContainer />
      </div>
    )
  }
}

