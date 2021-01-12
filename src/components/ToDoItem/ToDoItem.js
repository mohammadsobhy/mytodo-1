import React from 'react';
import './ToDoItem.css'

const ToDoItem = (props) => {


    
    //call the items in the state
    //call the state from the app parent here as props step one
    //as ther deleteItem function from the same we write it as u can see no need to put another const
    const {items, deleteItem} = props;

    //check the length of the array to show the error msg
    let length = items.length;


    

    //show the items as props from step one
    //do not forget the key for the map methodin the main div
    const ListItems = length ? (items.map(item => {
        return (
            <div key={item.id}>
                <span className="name" name="name">{ item.name }</span>
                <span className="age" name="age">{ item.age }</span>
                <span className="action icon" onClick={() =>deleteItem(item.id)}>&times;</span>
            </div>
        )
    })
    ) : (
    <p>There is no Item</p>

    
)

     

    return ( 
            <div className="ListItems">
                <div>
                    <span className="name title" name="name">Name</span>
                    <span className="age title" name="age">Age</span>
                    <span className="action title">Action</span>
                </div>
                {ListItems}
            </div>
         );
    
}
 
export default ToDoItem;