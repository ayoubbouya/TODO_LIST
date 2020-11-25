import React, { Component } from 'react';
import { IconName, TiDelete, TiUserDelete } from "react-icons/ti";
import './Home.css'

 class Home extends Component {
        state = {
             newName : "",
             myArray :[
                {name:"Task 1"},
                {name:"Task 2"},
                {name:"Task 3"},
                {name:"Task 4"},
                {name:"Task 5"}
            
            ]
        }
        toDelete = (index) => {
            const myArray = [...this.state.myArray];
            myArray.splice(index,1); // delete
            this.setState({
                myArray
            })
        }

        change = (event) => {
            this.setState({
                newName : event.target.value
            })
        }

        addName = () => {
            const myArray = [...this.state.myArray];
            myArray.push({ // add at the last , unsifht add at the first
                name:this.state.newName
            });
            this.setState({
                myArray
            });
        }
    render() {
      
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th> <h2>  TO-DO LIST </h2> </th>
                        </tr>
                    </thead>
                    <tbody> 
                        <tr>
                            <td>  
                               
                                {this.state.myArray.map((todo , index) => 
                                <li key={index}><h6>  {todo.name}   </h6>
                              
                                <button className="btn" onClick={() => {this.toDelete(index)}}>
                                <TiDelete /></button>   
                                     </li>  )} 
                                <input value={this.state.newName} onChange={this.change}  />                                   
                                <button className="one" onClick={this.addName}>Add</button> 
                                
                             </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}
export default Home;