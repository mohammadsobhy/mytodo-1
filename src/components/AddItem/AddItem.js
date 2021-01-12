import React, { Component } from 'react';
import './AddItem.css'

class AddItem extends Component {
    //the state
    state ={
        name:localStorage.getItem('name'),
        age: localStorage.getItem('age')
    }
//handle and to add main function
//give every input id 
// [e.target.id] : e.target.value

    handleChange = (e) => {
        this.setState(
            {
                [e.target.id] : e.target.value,
               
            }
        )
    }
    
    handleSubmit = (e) => {

       
        //prevent loading the page
        e.preventDefault();

        if(e.target.name.value === ''){
            return false
        
        } else {
            //to send the state in this component to the app component
        this.props.addItem(this.state);

        //to clear the input
        this.setState({
            name:'',
            age: ''
        }
        )
        }

        
     
    }

   
    
    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                
                    type="text"
                    placeholder="Put Your Name ..."
                    id="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                    />

                    <input
                  
                    type="number"
                    placeholder="Put Your Age ..."
                    id="age"
                    onChange={this.handleChange}
                    value={this.state.age}
                    />

                    <input 
                    value="ADD"
                    type="submit" 
                    onClick={this.handleFormSubmit} onChange={this.getData}/>
                </form>
            </div>
         );
    }
}
 
export default AddItem;