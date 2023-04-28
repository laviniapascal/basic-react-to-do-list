import React from 'react'
import{v4 as uuidv4} from 'uuid'
import ToDoItem from './ToDoItem'

class ToDoList extends React.Component {
    constructor() {
        super()
        this.state ={
            items: [],
            inputValue: ''
        }
    }

    handleInputChange = (e) => {
            this.setState({
                inputValue: e.target.value
            })
    }

    handleAddItems = () => {
        const newItem ={
            id: uuidv4(),
            name: this.state.inputValue,
            complete : false
        }

        this.setState({
            items: [...this.state.items, newItem],
             inputValue:''
            })
    }

    render() {
        console.log('Items', this.state.name)
        return(
        <div>
            <>
             <input type='text'placeholder='things to do' onChange={this.handleInputChange} value={this.state.inputValue}/>   
            <button onClick={this.handleAddItems}>Add</button>  
            </>
        
            <ul>
                {
                    this.state.items.map(item => {
                        return <ToDoItem toDoItem={item}/>
                    })
                }
            </ul>
        </div>
        )
    }
}

export default ToDoList;