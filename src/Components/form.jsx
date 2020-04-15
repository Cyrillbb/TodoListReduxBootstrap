import React from 'react'
import { add } from './../actions/actions';
import { connect } from 'react-redux';
import { useState } from 'react';
import { TODO_TYPES } from './../actions/constants';

function Form(props) {
    const [input, setInp] = useState('')
    const [opt, setOpt] = useState(TODO_TYPES.PLANNED)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(input.length > 0)
        props.add(input, opt)
    }

    return (
        <div className='modal' id="addTodoForm" role="dialog">
            <div className='modal-dialog-centered modal-sm' style={{'margin': 'auto'}}>
                <form
                    className="modal-content"
                    tabIndex="-1" role="dialog"
                    onSubmit={(event) => handleSubmit(event)}
                >
                    <div className='modal-header'>
                        <h4 className='modal-title'>Add stuff to do</h4>
                    </div>
                    <div className="modal-body">
                        <input type="text"
                            className="form-control"
                            style={{ 'marginBottom': '5px' }}
                            id="stuffToDo"
                            placeholder="ur to do goes here boi"
                            onChange={(event) => setInp(event.target.value)}
                        >
                        </input>
                        <select className="form-control" id="todoType" onChange={(event) => setOpt(event.target.value)}>
                            <option value={TODO_TYPES.PLANNED}>Planned</option>
                            <option value={TODO_TYPES.IN_THE_WORKS}>In the works</option>
                            <option value={TODO_TYPES.DONE}>Done</option>
                            <option value={TODO_TYPES.COMPLETED}>Completed</option>
                        </select>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary" type='submit'>Submit ur todo</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        add: (item, type) => dispatch(add(item, type))
    }
}

export default connect(null, mapDispatchToProps)(Form)