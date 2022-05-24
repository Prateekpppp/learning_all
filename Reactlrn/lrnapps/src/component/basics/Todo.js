import React from 'react'
import './style.css';
import Todoitems from './Todoitems';
const Todo = () => {
    const [val,setvalue] = React.useState('');
    const [item,setItem] = React.useState([]);
    const additem=()=>{
        setItem([...item,val]);
        // console.warn(item);
        // return item;
    };
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src='./images/todo.svg' alt='todo' />
                        <figcaption>Add Todo</figcaption>
                    </figure>
                    <div className='addItems'>
                        <input type="text" placeholder='❤ Add' className='form-control'
                        // value={val}
                        onChange={(e)=>{setvalue(e.target.value);}}
                        />
                        <i className='fa fa-plus add-btn' onClick={additem}></i>
                    </div>
                    <div className='showItems'>
                        <Todoitems item={item} />
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