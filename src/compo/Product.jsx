import React from 'react'



export default function Product(props) { 
 

  return (
    <div>
      <div ><button style={{backgroundColor:props.bgColor}} onClick={()=>{props.setColor(props.index)}}className='product'>{props.name}</button > <button onClick={()=>{props.delete(props.index)}}>x</button> </div>
    </div>
  )
}
