import React from 'react'
import { connect } from 'react-redux'
import { remove, add } from './../actions/actions';
import { useState } from 'react';
import { TODO_TYPES } from '../actions/constants';

function TodoForm(props) {
    const [categ, setCateg] = useState('')
    return (
        <div>
            <div className="modal" id="todoForm" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Activity category: {props.todo.categ}</h5>
                        </div>
                        <div className="modal-body">
                            {props.todo.entry}
                        </div>
                        <div className="modal-footer">
                            <select className="form-control" id="todoType" onChange={(event) => setCateg(event.target.value)}>
                                <option value={TODO_TYPES.PLANNED}>Planned</option>
                                <option value={TODO_TYPES.IN_THE_WORKS}>In the works</option>
                                <option value={TODO_TYPES.DROPPED}>Dropped</option>
                                <option value={TODO_TYPES.COMPLETED}>Completed</option>
                            </select>
                            <button className="btn btn-primary"
                                data-dismiss="modal"
                                onClick={() => {
                                    props.removeTodo(props.todo.entry);
                                    props.addTodo(props.todo.entry, categ);
                                   
                                }}
                            >
                                Move to
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => {
                                    props.removeTodo(props.todo.entry)
                                    if(props.todos.length === 1) localStorage.clear()
                                }}
                                data-dismiss='modal'
                            >
                                Remove activity
                            </button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
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
        addTodo: (entry, categ) => dispatch(add(entry, categ)),
        removeTodo: (entry) => dispatch(remove(entry))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
