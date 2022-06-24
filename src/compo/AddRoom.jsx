import React, { useState } from 'react'
import { Link } from 'react-router-dom'




export default function AddRoom(props) {

  const [roomName, setRoomName] = useState('')
  const [roomColor, setRoomColor] = useState('')

  class Room {
    name = ''
    bgColor = ''
    select = ''
    product = []

    constructor(name, bgColor, select) {
      this.name = name
      this.bgColor = bgColor
      this.select = select
    }

  }

  const checkName = () => {
    if (roomName.length < 1||roomName.length > 5 ) {
      alert('error')
    }
    else {

      let room = new Room(roomName, roomColor, select)

      props.rooms.push(room)
    }


  }

  const [select, setSelect] = useState()


  return (
    <div className='addRoomDiv'>
      <h2 className='title'>Smart house</h2>
      <div className='inpDiv'> <select onChange={(e) => { setSelect(e.target.value) }} name="new room" className='select' >
        <option value="title" disabled selected hidden>Choose new room</option>
        <option value="badroom">Bedroom</option>
        <option value="toilet">Toilet</option>
        <option value="kitchen">Kitchen</option>
      </select>
        <br />

        <input onChange={(e) => { setRoomName(e.target.value) }} className='inp' type="text" placeholder='Room name' />
        <select onChange={(e) => { setRoomColor(e.target.value) }} name="roomColor" className='select' >
          <option value="title" disabled selected hidden>Room color </option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
        </select>
      </div>

      <Link to={'/'}> <button onClick={() => { checkName() }} className='btn1'>Create</button> </Link>
    </div>

  )


}
