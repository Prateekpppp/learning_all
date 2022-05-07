import React from 'react'

const Menucard = (props) => {
  return (
      {menuData.map(curelem)}
    <div className="card-container">
      <div className="card">
        <div className="card-body">
          <span className="card-number card-circle subtle">1</span>
          <span className='card-author subtle'>Breakfast</span>
          <h2 className='card-title'>Joota with {props.menuData}</h2>
          <span className='card-description subtle'>
            I don't Like Joota but getting that in every morning.
          </span>
          <div className="card-read">Read</div>
        </div>
        <img src="/images/streamy.png" alt="img" className='card-media'/>
        <span className="card-tag subtle">Order Now</span>
      </div>
    </div>
  )
}

export default Menucard;