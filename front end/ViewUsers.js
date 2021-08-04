import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class ViewUsers extends Component{
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('http://localhost/Omobio/Authentication/backend/viewUsers.php')
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          records: result
        });
      });
  }
    render(){
      //const { records } = this.state;
     return(
        
              <Table striped bordered hover responsive>
              <thead >
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Email</th>

                  <th>Action</th>
                </tr>
              </thead>

             <tbody>
                 {this.state.records.map((record)=>{
                   return(
                    <tr>
                    <th scope="row">{record.user_id}</th>
                    <td>{record.e_name}</td>
                    <td>{record.e_email}</td>
                    
                    <td>
                    <Button variant="info">View</Button>{' '}
                    <Button variant="warning">Edit</Button>{' '}
                    <Button variant="danger">Delete</Button>
                      
                    </td>
                  </tr>
                   )
                 })}
              </tbody> 
            </Table>
          
     )
    }
}

export default ViewUsers;
