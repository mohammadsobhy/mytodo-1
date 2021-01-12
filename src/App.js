import {  Component } from 'react';
import './App.css';


//COMPONENTS
import ToDoItem  from './components/ToDoItem/ToDoItem';
import AddItem  from './components/AddItem/AddItem';



class App extends Component {
 state ={
    items: [
      {id: 1, name: "put it", age:"??"},
      
     
    ]
  };

  //main delete function
  deleteItem = (id) => {

    //catch all items state from the state -1
    let items = this.state.items;

    //if the id of the item are the same / check
    let i = items.findIndex(item =>item.id ===id);

    //delete the item with the same id ok
    items.splice(i,1);

    //update the items state after delete note the key and value the same write this
    this.setState({items})

    //second way prefer this one
    //let items = this.state.items.filter (
    //  item => {
     //    return item.id !==id
    //  }
    // )
    //this.setState({items})
  }

  //add function
addItem = (item) => {



 //catch the items
  let items = this.state.items;

 //add the item from the input 
  items.push(item);


//update the items of the todo list
  this.setState({items});

//give unique key for every item added
  item.id = Math.random();

  }


  render() {
    return(
      
      <div className="App container">
        <h1 className="text-center">TO DO LIST</h1>
        <ToDoItem
         items={this.state.items}
         deleteItem={this.deleteItem} />

        <AddItem 
        addItem={this.addItem}
        />

      </div>
    )
  }
};

export default App;
