import Hoodie from "../assets/hoodie.jpg"

import React from 'react'

function hero() {
  return (
    <>
    <div style={{display:"flex", flexDirection:"row"}}>
    <div>
        <h2 style={{fontSize:"200%",marginTop:"12%"}}>New Arravals</h2>
        <h1 style={{fontSize:"400%", fontWeight: "bolder",lineHeight:"2"
        }}>Just for</h1>
        <h3 style={{fontSize:"200%"}}>Just for ---</h3>
    </div>
    <div >
      <img src={Hoodie} alt="" style={{borderRadius:"50%", width:"50%", position:"absolute",left:"25%"}} />
    </div>
    </div>
    </>
  )
}

export default hero
