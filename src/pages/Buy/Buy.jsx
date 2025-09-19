import React from 'react'
import  {useEffect, useState } from "react"
import './Buy.css'
import Navbar from '../../componante/navbar/Navbar'
import Logo from '../../componante/logo/Logo'
import { BiPhoneCall } from 'react-icons/bi'
import { MdSettingsPhone } from 'react-icons/md'
import Cards from '../../componante/Cards/Cards'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Buy() {
    const navigate = useNavigate();
    const [location, setLocation] = useState("");
    const [name, setname] = useState("");
     const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
   const [nots, setnots] = useState("");
   
     const [item,setItem] = useState('');
  //---------------------------------------------------------------------------
          useEffect(() => {
            const stored= localStorage.getItem('order')
            if(stored)
             setItem(JSON.parse(stored));
        }, []);

//-------------------------------------------------------------------------
    const handleChange = (e) => {
      const value = e.target.value;
     
      if (!/^\d*$/.test(value)) {
        setError('inter only number');
      } else if (value.length > 0 && value.length < 10) {
        setError("The Number must consist of ten digits");
      } else {
        setError('');
      }
      setPhone(value);}
  
  //  وقت المستخدم يضغط زر الإرسال
  const handleSubmit = async (e) => {
    e.preventDefault();            // ما نخلّي الصفحة تعيد تحميل حالها
    try {
      const response = await axios.post(
        ['http://Localhost:8000/api/orders'], 
        {
    cart_items:JSON.stringify(item),
    notes:  nots,      
    phone_number:phone,
    full_name: name,
    full_address: location
    
       }
    
      );
      console.log('تم الحجز بنجاح:', response.data);
      alert('Thankyou , your order will arrive soon 🎉');
      // فيك تفضّي الحقول:
        navigate("/Bill");
      setname('');
      setPhone('');
      setLocation('');
    
    }catch(err){
  if (err.response) {
    console.log('🔥 السيرفر رد بخطأ:', err.response.data);
  } else if (err.request) {
    console.log('🚫 ما وصل الطلب للسيرفر:', err.request);
  } else {
    console.log('❗ في مشكلة بالكود:', err.message);
  } alert('something went wrong,try again😔');
   navigate("/Bill");
}
};

  const handleDelete = (index) => {
  const updatedItems = [...item];
  updatedItems.splice(index, 1); // احذف العنصر يلي عنده هالموقع

  setItem(updatedItems);
  // عدلي الحالة
  localStorage.setItem('order', JSON.stringify(updatedItems));

};


 
  return (
    <div className='allpage'> 
        <Logo/>
        <Navbar/>
        <div className='child1'>
      <div className='your-bascket'>
      <h2>Your Basket</h2>
      
        <div>
       {item.length > 0 ? (
             item.map((m,indx) =><div className='cart-item'key={indx}> <h3 className='thing'><i>{m.title}</i> And It's Price (<i>{m.price}</i> × <i>{m.count}</i>)$ (<i>{m.size})</i></h3> 
             <button onClick={() => handleDelete(indx)} className='del-but'>🗑️</button>
        
             </div>)
             
         ):(
              <h2>nothing here</h2>
             )}  
             

       
        </div>
      
      </div>
   { /*--------------------------------------------------------------*/}
  
      <div className='note'>
           <input 
        type="text"
        value={nots}
         placeholder="Add Your Notes About The Order"
            onChange={(e) => setnots(e.target.value)}/>
      </div>
      {/* -------------------------------------------------------------------------------------------------------- */}
       <form onSubmit={handleSubmit} className='logIn'>
      <div >
      <div>
      <input 
        type="text"
        value={phone}
         placeholder="Inter Your Phone Number"
        onChange={handleChange} />
      {error && <p style={{ color: 'rgb(202, 7, 124)', fontSize: '1.2em' }}>{error}</p>}
    </div>
    <div className="fullName">
          <input
            type="text"
            value={name}
            placeholder="Inter Your Full Name"

            onChange={(e) => setname(e.target.value)}
          />
         
        </div>
        <div className="location">
          <input type="text" value={location}
            placeholder="Your exact location (city,Street,Building,Floor)"
            onChange={(e) => setLocation(e.target.value)}
          />
         
        </div>
         <button type='submit'onSubmit={handleSubmit} className="orderBut">Order now

        </button>
         </div>
   
      </form>
    
    
      <div className='spaceunderBUY' >
       <p>hidden paragraf<br />to make a space under the cards <br /></p>
      
           </div>
      </div>
    </div>
  )
}
