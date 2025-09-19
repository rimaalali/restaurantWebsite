import React from 'react'
import './Cards.css'
import  { useState } from "react"
import Buy from '../../pages/Buy/Buy';  
export default function Cards({title , price, image}) {
    const [count, setCount] = useState(1);
       const [size, setSize] = useState('Medium Size');
  const [order,setOrder]=useState(()=>{
    const stored =localStorage.getItem('order');
    return stored? JSON.parse(stored):[];
  });
  const handleBuy =()=>{
 setOrder(prev => {const newOrder=[...prev,{title,price,count,size}];
  localStorage.setItem('order',JSON.stringify(newOrder));
  return newOrder;});
  window.Location.href='/Buy';
  
};
 
  return (
    <div>
      <div className="card" >
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <div className='first'>
    <h5 key={title} className="card-title">{title}</h5>
    <button  className="btm" onClick={handleBuy}>Buy</button>
    </div>
    
    <h5 className="card-text">{price}$</h5>
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Choose Size
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><button className="dropdown-item" href="#">Big Size</button></li>
    <li><button className="dropdown-item" href="#">Medium Size</button></li>
    <li><button className="dropdown-item" href="#">Small size</button></li>
  </ul>
</div>
 
    
  </div>
</div>
    </div>
    
  )
}
