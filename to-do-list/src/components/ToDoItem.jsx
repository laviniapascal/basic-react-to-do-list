import React from "react"

class ToDoItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
         <div>
            {this.props.toDoItem.name}
        </div>

        )  
    }
}

export default ToDoItem;