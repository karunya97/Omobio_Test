import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
//import Axios from 'axios';


function Login() {

  /*const logininfo = (data) => {
  
    Axios.post("http://localhost/Omobio/Authentication/backend/loginapi.php", {
      
     username: data.username,
     password: data.password,
          
    }).then((response) => {
      console.log(response)
      window.location.href='/DashboardNew'
        } 
    );
  };*/

  
  

    return (
        <div className="mt-5">
          <Container>
            <Col md="auto">
              <h3>Login Form</h3>
              <Form className="mt-5">

                  <Form.Group as={Row} className="mb-3" controlId="formHorizontalUserName">
                  <Form.Label column sm={2}>
                    User Name
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control type="text" placeholder="User Name" />
                  </Col>
                  </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                  <Form.Label column sm={2}>
                    Password
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control type="password" placeholder="Password" />
                  </Col>
                </Form.Group>
                    
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                
              </Form>
            </Col>
          </Container>
        </div>
    )
}

export default Login;


