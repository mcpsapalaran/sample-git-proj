import React, { Component } from 'react';



class Forms extends Component{

    
    render(){
       
        return (
        < div className = 'forms-panel'>
         <form>
            Name: <br/> <input type = 'text' name = 'name'
            placeholder = 'Name' onChange = {this.handleChangeInfo} /><br/>
            Age: <br/> <input type = 'text' name = 'age'
            placeholder = 'Age' onChange = {this.handleChangeInfo} /><br/>
            Occupation: <br/> <input type = 'text' name = 'occupation'
            placeholder = 'Occupation' onChange = {this.handleChangeInfo}/><br/>
            <button type = 'button' onClick = {this.handleAddUser}>Add User</button>
            <br/>
          </form>
        </div>
        );
    }
}


export default Forms;