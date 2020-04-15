import React from 'react'

export function Header() {
    return (
        <div className="navbar navbar-dark bg-dark justify-space-between">
            <h3 className='text-light'>
                Simple to do manager
            </h3>
           <button type="button" className="btn btn-outline-light"  data-toggle="modal" data-target="#addTodoForm">
                Add stuff to do
            </button>
        </div>
    )
}