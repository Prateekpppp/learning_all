import React from 'react'
import './style.css';
const Todo = () => {
  return (
    <>
        <div className='main-div'>
            <div className='child-div'>
                <figure>
                    <img src='./images/todo.svg' alt='todo' />
                    <figcaption>Add Todo</figcaption>
                </figure>
                <div className='addItems'>
                    <input type="text" placeholder='❤ Add' className='form-control'/>
                    <i className='fas fa-plus add-btn'></i>
                </div>
                <div className='showItems'>
                    <div className='eachItem'>
                        <h3>Orange</h3>
                        <div className='todo-btn'>
                            <i className='fas fa-edit add-btn'></i>
                            <i className='fas fa-trash-alt add-btn'></i>
                        </div>
                    </div>
                </div>
                <div className='showItems'>
                    <button className='btn effect04' data-sm-link-text="Remove All"><span>List Item</span></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo;