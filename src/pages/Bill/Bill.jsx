import React from 'react'
import'./Bill.css'
import  {useEffect, useState } from "react"
import { ImEnter } from "react-icons/im";
export default function Bill() {
    const [item,setItem] = useState('');
     const [total, setTotal] = useState(0);
      //---------------------------------------------------------------------------
              useEffect(() => {
                const stored= localStorage.getItem('order')
                if(stored)
                 setItem(JSON.parse(stored));
            }, []);
                    useEffect(() => {
  if (item && Array.isArray(item)) {
    const sum = item.reduce((acc, curr) => {
      const price = parseFloat(curr.price);
      const count = parseInt(curr.count) ;
      return acc + price * count;
    }, 0);
    setTotal(sum);
  }
}, [item]);
  return (
    <div className='back'>
       <div className='bill_content'>
        <h1>The Bill<i className='walk'>$</i></h1>
       {item.length > 0 ? (
             item.map((m,indx) =><div key={indx}> <h3 ><i>{m.title}</i> :(<i>{m.price}</i> × <i>{m.count}</i>)$ </h3> 
              </div>)
            ):(
              <h2>nothing here</h2>
             )}       
   
       <h3>Delevery : 5$</h3>
         <h2>total is:{total+5}$</h2> 
        </div>
        <button className='back_but'><a href='/'>Back <ImEnter /></a></button>
    </div>
  )
}
