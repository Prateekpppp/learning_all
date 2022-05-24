import React from 'react'

const Todoitems = (props) => {
  if(props.item){
    return (
      <>
        {props.item.map((curelem)=>{
          return(
            <div className='eachItem'>
              <h3>{curelem}</h3>
              <div className='todo-btn'>
                  <i className='far fa-edit add-btn'></i>
                  <i className='far fa-trash-alt add-btn'></i>
              </div>
            </div>
          );
        })}
      </>
    )
  } else{
    return(
      <>
      </>
    )
  }
}

export default Todoitems