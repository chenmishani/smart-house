import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Rooms from './Rooms'





export default function HomePage(props) {





  return (
    <div className='mainDiv'>
      <div> <h2 className='title'>Smart house</h2> </div>


      <div className='roomDiv'>
        {props.rooms.map((val, i) => {
          return <Rooms send={props.send} index={i} name={val.name} color={val.bgColor} select={val.select} />
        })}
      </div>

      <div><Link to={'/addroom'}><button className='btn'>+</button></Link> </div>









    </div>
  )
}
