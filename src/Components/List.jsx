import React from 'react'
import { connect } from 'react-redux'
import { TODO_TYPES } from './../actions/constants';

function List(props) {
    return (
        <div>
            <li className="list-group">
                {props.todos.filter(item => item.type === TODO_TYPES.PLANNED).map(item => 
                    <li className="list-group-item">{item.entry}</li>
                )
                }
            </li>
        </div>
    )
}

const mapStateToProps = ({ todos }) => {
    return {
        todos: todos,
    }
}

export default connect(mapStateToProps, null)(List)