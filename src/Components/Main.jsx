import React from 'react'
import List from './List';
import Form from './form';
import { Header } from './Header';
import { connect } from 'react-redux';
import { TODO_TYPES } from './../actions/constants';
import TodoForm from './todoForm';

function Main(props) {
    return (
        <div>
            <Header />
            <div style={{
                'display': 'flex', 
                'flexDirection': 'row',
                'justifyContent': 'center',
                'flexWrap': 'wrap'
                }}>
                <List todos={props.todos} type={TODO_TYPES.PLANNED} name='Planned todos' />
                <List todos={props.todos} type={TODO_TYPES.IN_THE_WORKS} name='Todos in the work' />
                <List todos={props.todos} type={TODO_TYPES.DROPPED} name='Dropped todos' />
                <List todos={props.todos} type={TODO_TYPES.COMPLETED} name='Completed todos' />
            </div>
            <Form />
            <TodoForm />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, null)(Main)