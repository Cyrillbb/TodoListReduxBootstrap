import React from 'react'
import { connect } from 'react-redux'
import { getTodo, remove, add } from '../actions/actions'


function List(props) {    
    const allowDrop = (e) => {
        e.preventDefault()
    }  

    return (
        <div className="list-group text-break overflow-auto" 
        style={{ "width": '400px', 'margin': '20px', 'maxHeight': '800px', "scrollbarWidth": 'thin' }}
        onDragOver={allowDrop}
        onDrop={(e) => {
            e.preventDefault()
            props.removeTodo(props.todo.entry);
            props.addTodo(props.todo.entry, props.type);
        }}
        >
            <div className="list-group-item list-group-item-action active sticky-top ">
                {props.name}
            </div>
            {props.todos.filter(item => item.categ === props.type)
                .map((item, i) =>
                    <button key={i}
                    draggable='true'
                    onDragStart={() => {props.get(item.entry, item.categ)}}
                    data-toggle="modal" data-target="#todoForm"
                    onClick={() => props.get(item.entry, item.categ)}
                        className="list-group-item list-group-item-action"
                    >
                        {item.entry}
                    </button>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        todo: state.todo,
        todos: state.todos,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        get: (entry, categ) => dispatch(getTodo(entry, categ)),
        addTodo: (entry, categ) => dispatch(add(entry, categ)),
        removeTodo: (entry) => dispatch(remove(entry))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
