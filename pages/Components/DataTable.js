import React from "react"
// import { Card } from "react-bootstrap";
import ReactTable from "react-table";
// import "react-table/react-table.css"sss

class DataTable extends React.Component {
  constructor(props){
  super(props);
  this.state={
    posts:[]
  }
}
componentDidMount(){
  const url="http://jsonplaceholder.typecode.com/posts";
  fetch(url, {
    method: "GET"
  }).then(response => response.json()).then(posts =>{
    this.setState({posts:post})
  })
}
  render(){
    const columns =[
      {
      Header: "User ID",
      accessor: "userId"
      },
      {
        Header: "ID",
        accessor: "id"
        },
        {
          Header: "Title",
          accessor: "title"
          },
          {
            Header: "Content",
            accessor: "body"
            }
    ]
  return(
  <ReactTable 
  columns={columns}
    data={this.state.posts}>
    

  </ReactTable>
  )
  }
}
export default DataTable;