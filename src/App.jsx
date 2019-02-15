import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from './components/forms-panel';



class App extends Component {
  constructor(props){
    super(props);
    //set default state
    this.state = {
      userList: [
        {
          name: 'Mela',
          age: 25,
          occupation: 'Trainee'
        },
        {
          name: 'Yedda',
          age: 20,
          occupation: 'Trainee'
        },
        {
          name: 'Enj',
          age: 21,
          occupation: 'Trainee'
        },
        {
          name: 'Sheena',
          age: 21,
          occupation: 'Trainee'
        },
      ],
      user: {
        name: '',
        age: '',
        occupation: ''
      }
    }
    //Add function bindings    
    
  }
  //Add event handlers
  handleChangeInfo = e => {
    console.log('EVENT');

    console.log(e.target);
    
    const  {name, value} = e.target;

    this.setState((prevState)=> ({
      user: {
        ...prevState.user,
        [name]: value
      }
    }));
  }
  
  handleAddUser = e => {
    console.log('PASSED HANDLE AND USER');

    console.log(this.state.userList);

    let user = this.state.user;
    let userList = [...this.state.userList];

    userList.push(user);

    console.log(this.state.userList);

    this.setState({userList : userList});

    e.preventDefault();


  }
  deleteUser = index => {
    let userList = [...this.state.userList];
    userList.splice(index, 1);
    this.setState({userList : userList});
  }

  render() {

    let userList = this.state.userList;
    let user = this.state.user;

    console.log('USERS');
    console.log(this.state.userList);

    console.log('USER');
    console.log(this.state.user);

    return (
      <div className="App">

        <Forms />

        <table>
        <thead></thead>
        <tbody>
          <tr>
            <th className = 'user-table-cell'>NAME</th>
            <th className = 'user-table-cell'>AGE</th>
            <th className = 'user-table-cell'>OCCUPATION</th>
          </tr>
          {
            userList.map((user, index) => {
              return(
                  <tr className = 'user-table-row'>
                  <td className = 'user-table-cell'>{user.name}</td>
                  <td className = 'user-table-cell'>{user.age}</td>
                  <td className = 'user-table-cell'>{user.occupation}</td>
                  <td className = 'user-table-cell'>
                    <button type = 'button' onClick = {() => this.deleteUser(index)}>DELETE USER</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      </div>
      
    );
  }
}

export default App;


