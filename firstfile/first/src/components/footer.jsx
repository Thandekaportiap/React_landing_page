import React from 'react'

function footer() {
  return (
    <>
    <div className='footer'>
    
      <h1 style={{fontWeight:"bolder", fontSize:"400%", lineHeight:"2"}} >For online <br/> Order</h1>
      <div style={{border: "solid 1px black", fontSize: "40px", display:"flex", flexDirection:"column"}}>
        <li>color 1 2 3</li>
        <li>Size ssm xs s m<br/> l xl xxl</li>
        <li>Review</li>
       <li>*****</li> 
        <li>$790</li>
        <button className='btn'>Add to cart</button>
        </div>
      </div>

    </>
  )
}

export default footer
