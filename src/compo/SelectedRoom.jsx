import React, { useState } from 'react'
import Product from './Product'
import { Link } from 'react-router-dom'

export default function SelectedRoom(props) {

  const [flag, setFlag] = useState(false)
  const [select2, setSelect2] = useState('')

  let products=props.selectedRoom.product
  const [productArr,setProductArr]=useState(products)
 


  class Products{
    name=''
    mode='rgb(143, 22, 22)'
    constructor(name){
      this.name=name
    }
  }

  const addProduct = () => {
    let flag=true
    if (productArr.length > 4 || select2 < 1) {
      alert('error')
    }

    if(select2==='Stereo-sound'){
      
      for (let i = 0; i < productArr.length; i++) {
        if(productArr[i].name==='Stereo-sound'){
          alert('You can only add 1 stereo sound')
          flag=false
          break
       }
        }
        if(flag===true){
          props.selectedRoom.product=productArr
          let temp=new Products(select2)  
          setProductArr([...productArr,temp])  
         props.selectedRoom.product.push(temp); 
         setFlag(!flag)
        }
       }
    

    else {
      props.selectedRoom.product=productArr
     let temp=new Products(select2)  
     setProductArr([...productArr,temp])  
    props.selectedRoom.product.push(temp); 
    setFlag(!flag)
    }
   
  }
    
   
  

  const showDiv = () => {
    if (flag === true && props.selectedRoom.select=== 'toilet') {
      return <div className='bar'>
        <div>
          <select onChange={(e) => { setSelect2(e.target.value) }} name="new product" className='select2' >
            <option value="title" disabled selected hidden>Choose new product</option>
            <option value="Air-conditioner">Air-conditioner</option>
            <option value="Boiler">Boiler</option>
            <option value="Stereo-sound">Stereo sound</option>
            <option value="lamp">lamp</option>
          </select>
        </div>
        <div><button className='btn3' onClick={(val) => { addProduct() }}>Add</button></div>
      </div>
    }

    if (flag === true) {
      return <div className='bar'>
        <div>
          <select onChange={(e) => { setSelect2(e.target.value) }} name="new product" className='select2' >
            <option value="title" disabled selected hidden>Choose new product</option>
            <option value="Air-conditioner">Air-conditioner</option>
            <option value="Stereo-sound">Stereo sound</option>
            <option value="lamp">lamp</option>
          </select>
        </div>
        <div><button className='btn3' onClick={(val) => { addProduct() }}>Add</button></div>
      </div>
    }

  
  }

  const deleteProduct=(index)=>{
    let temp=[...productArr]
    temp.splice(index,1)
    setProductArr([...temp]);
    
  }


  return (
    <div className='mainDiv' style={{ backgroundColor: props.selectedRoom.bgColor }}>
      <Link to={'/'}> <button className='backBtn' onClick={()=>{props.selectedRoom.product=productArr}} style={{ float: 'left' }} >{'<<'}</button> </Link><div> <h2 className='title'>Smart house</h2> </div>
      <div >
       
         <div className='roomDiv2' >
            <p style={{color:'white'}}> <span className='subStitle'> Room name: </span >{props.selectedRoom.name}</p>
            <p style={{color:'white'}}> <span className='subStitle'> Room type: </span>{props.selectedRoom.select}</p>
          </div>
      
        <div className='roomDiv3' > { productArr.map((val, i) => {
          return   <Product name={val.name} index={i} delete={deleteProduct} setColor={props.setColor} bgColor={val.mode} />
        })
        }
        </div>
      </div>

      <button onClick={() => { setFlag(!flag) }} className='btn2' >Add product</button>
      {showDiv()}



    </div>




  )



}
