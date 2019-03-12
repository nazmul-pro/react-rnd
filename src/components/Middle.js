import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const userList = [
  {name: 'Sumon', home:'Jhenidah'},{name: 'Sumon', home:'Jhenidah'},{name: 'Sumon', home:'Jhenidah'}
 ];

if (localStorage.getItem("userList") === null)
localStorage.setItem('userList', JSON.stringify(userList));

export default class Middle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: []
    }
    
  }
  render() {
    return (
      <div>
       <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Home Dist</Form.Label>
                <Form.Control type="text" placeholder="Home" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <div>
        <ul>
            {this.state.mockData.map(item => (
              <li key={item.id}>
                {item.title}
                <button onClick={this.onDeleteHandle.bind(this, item.id)}>Delete</button>
                <button onClick={this.onEditHandle.bind(this, item.id, item.title)}>Edit</button>
                <button onClick={this.onCompleteHandle}>Complete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
} 
}
