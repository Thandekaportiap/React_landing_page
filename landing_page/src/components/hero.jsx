import Hoodie from "../assets/hoodie.jfif"

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
      <img src={Hoodie} alt="" style={{borderRadius:"50%",border:"solid 4px green", width:"30%", position:"absolute",left:"25%"}} />
    </div>
    <div style={{display:"flex",flexDirection:"column", position:"absolute", right:"0",gap:"2"}}>
    <div style={{border:"solid 1px black",}}>
        <img src={Hoodie} alt="" style={{width:"180px",height:"120px"}} />
        <h1>Kids Clothes</h1>
        <p>Get latest trands</p>
        <h1>US $41.25-43.46/Price</h1>
        <button>Add to cart</button>
    </div>
    <div style={{border:"solid 1px black"}}>
        <img src={Hoodie} alt=""  style={{width:"180px",height:"120px"}}/>
        <h1>Kids Clothes</h1>
        <p>Get latest trands</p>
        <h1>US $41.25-43.46/Price</h1>
        <button>Add to cart</button>
    </div>
    <div style={{border:"solid 1px black",backgroundolor: "radial-gradient(green,white,white)"}}>
        <img src={Hoodie} alt="" style={{width:"180px",height:"120px"}}/>
        <h1>Kids Clothes</h1>
        <p>Get latest trands</p>
        <h1>US $41.25-43.46/Price</h1>
        <button>Add to cart</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default hero