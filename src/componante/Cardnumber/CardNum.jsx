import React from 'react'
import { useState } from "react";
import './CardNum.css'
import Buy from '../../pages/Buy/Buy'; 
export default function CardNum({title , price, image}) {
 const [size, setSize] = useState('Medium Size');
    const [count, setCount] = useState(1);
  const [order,setOrder]=useState(()=>{
    const stored =localStorage.getItem('order');
    try{
  return stored && stored !== "undefined" && stored !== "null" 
      ? JSON.parse(stored) 
      : [];
    }catch (e) {
    console.error("Invalid JSON in localStorage", e);
    return [];
}});
  const handleBuy =()=>{
 setOrder(prev => {const newOrder=[...prev,{title,price,count,size}];
  localStorage.setItem('order',JSON.stringify(newOrder));
  return newOrder;});
  window.Location.href='/Buy';
  console.log('clicked');
};
  return (
    <div>
      <div className="card" >
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <div className='first'>
    <h5 className="card-title">{title}</h5>
    <a onClick={handleBuy} className="btm">Buy</a>
    </div>
    
    <h5 className="card-text">{price}$</h5>
    </div>
    <div className='count'>




    <div className='counter'>
    <button onClick={() => setCount(count + 1)}>+</button>
      <h4>Amount <i id='amount' > {count} </i></h4>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  

</div>
    </div>
    </div>
  )
}

