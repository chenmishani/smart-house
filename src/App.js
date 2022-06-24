import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './compo/HomePage';
import AddRoom from './compo/AddRoom';
import SelectedRoom from './compo/SelectedRoom';
import { useState } from 'react';
import smartHome from './smart-home.jpg' 


function App() {

  
  const [rooms,setRooms]=useState([])
    
const [selectedRoom,setSelectedRoom]=useState()
const [product, setProduct] = useState([])
const [flag,setflag]=useState(false)

   const sendRoom=(index)=>{
    setSelectedRoom(rooms[index])
    
  }
   
   
  const setColor=(i)=>{
   console.log(selectedRoom.product);
    if(selectedRoom.product[i].mode==='rgb(143, 22, 22)'){
      selectedRoom.product[i].mode='rgb(25, 78, 13)'
    setflag(!flag)
    // if (selectedRoom.product[i].mode === 'rgb(101, 6, 6)') {
    //   selectedRoom.product[i].mode = 'rgb(101, 6, 6)'
  
   }  
   else{
    selectedRoom.product[i].mode='rgb(143, 22, 22)'
    setflag(!flag)
   
   }
   console.log( selectedRoom.product[i].mode);
  }  
   
   
  
  return (
    <div className="App" style={{backgroundImage:`url(${smartHome})`} }> 
       <BrowserRouter basename='smart-house'>
        <Routes>
          <Route path='/' element={<HomePage rooms={rooms} send={sendRoom}/>} />
          <Route path='/addroom' element={<AddRoom  rooms={rooms}/>} />
          <Route path='/room' element={<SelectedRoom selectedRoom={selectedRoom} rooms={setRooms} product={product} setProduct={setProduct} setColor={setColor} />}/>
        </Routes>
    
      
      </BrowserRouter>



    </div>
  );
}



export default App;
