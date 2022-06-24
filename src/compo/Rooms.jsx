import React from 'react'
import { Link } from 'react-router-dom'


export default function Rooms(props) {



  return (
    <div >

      <Link to={'/room'}>  <button onClick={() => { props.send(props.index) }} className='room' style={{ backgroundColor: props.color }}> <p className='pRoom'>{props.name}</p> </button> </Link>
    </div>


  )
}
