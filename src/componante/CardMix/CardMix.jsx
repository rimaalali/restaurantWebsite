import React from 'react'
import { useState } from "react";
import './CardMix.css'
export default function CardMix({title , price, image,link}) {
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
         console.log('clicked');
       };
  return (
    <div>
            <div className="card3" >
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <div className='first'>
    <h5 className="card-title">{title}</h5>
    <a onClick={handleBuy} className="btm3">Buy</a>
    </div>
    
    <h5 className="card-text">{price}$</h5>
    </div>
    <div className='count'>


    <div className='counter3'>
    <button onClick={() => setCount(count + 1)}>+</button>
      <h4>Amount <i id='amount' > {count} </i></h4>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>



    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Choose Size
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><button onClick={() => setSize('Big Size')}className="dropdown-item" href="#">Big Size</button></li>
    <li><button onClick={() => setSize('Medium Size')} className="dropdown-item" href="#">Medium Size</button></li>
    <li><button onClick={() => setSize('Small size')} className="dropdown-item" href="#">Small size</button></li>
  </ul>
</div>


   
  

</div>
    </div>
    </div>
  )
}
