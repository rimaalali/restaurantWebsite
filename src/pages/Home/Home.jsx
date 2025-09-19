import React from 'react'
import'./Home.css'
import  { useState } from "react"
import Navbar from '../../componante/navbar/Navbar'
import { PiMapPinLineBold } from "react-icons/pi";
import imagepath from '../../assets/photo/PhotoRetouch1737756971352.jpg' ; 
import image from '../../assets/photo/file-E3CeWs5F9vDiTbSkCdbUp9.webp' ; 
import Logo from '../../componante/logo/Logo';
import imge1 from '../../assets/photo/file.webp';
import cloudVisit from '../../assets/1.png';
import cloudMake from '../../assets/2.png';
import cloudOrder from '../../assets/order.png';
import Searsh from '../../componante/searsh/Searsh';
import axios from 'axios';
import { ImUserTie } from "react-icons/im";
import { ImPhone } from "react-icons/im";
export default function Home(){
  const [error, setError] = useState(''); 
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [numchairs, setnumchairs] = useState("");
  const [date_time, setdate_time] = useState("");
  const [phonenum, setPhonenum] = useState('');
  const handleNavigation = () => {
      // استخدم window.location.hash للتنقل داخل نفس الصفحة
      window.location.hash = "#makeOrder";
    };
    const handleNavigation2 = () => {
      window.location.hash = "#makeReservation";
    };
    const handleNavigation3 = () => {
      window.location.hash = "#visit-us";
    };
      const handleChange = (e) => {
      const value = e.target.value;
      // بس بتسمح بأرقام
      if (!/^\d*$/.test(value)) {
        setError('inter only number');
      } else if (value.length > 0 && value.length < 10) {
        setError("The Number must consist of ten digits");
      } else {
        setError('');
      }
      setPhonenum(value);}
      //----------------------------------------------------------------------
 const handleReservation = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://Localhost:8000/api/reservations', {
      full_name: username,
      email:useremail,
      phonenum,
      guests:numchairs,
     reservation_date:date_time,
    });

    alert('you have a reservation with us now 🎉');
   
    setUsername('');
   setUseremail('');
   setnumchairs('');
    setdate_time('');
  } catch(err){
  if (err.response) {
    console.log(' السيرفر رد بخطأ:', err.response.data);
  } else if (err.request) {
    console.log('🚫 ما وصل الطلب للسيرفر:', err.request);
  } else {
    console.log('❗ في مشكلة بالكود:', err.message);
  }     alert('Reservation faild, please check the data❌  ');
  }
};
   
 
    
   
  return (
    

<div className='allpg'>
  
<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide3"></button>
    <button className='admn_but'><a href='/Admin'><ImUserTie /></a></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="100">
    <img src={imge1} className="d-block" alt="111"/>
 
    </div>
    <div className="carousel-item" data-bs-interval="200">
      <img src={image} className="d-block" alt="222"/>
    
    </div>
    <div className="carousel-item" data-bs-interval="300">
      <img src={imagepath} className="d-block " alt="333"/>
      
    </div>
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
   
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">

    <span className="carousel-control-next-icon" aria-hidden="true"></span>
   
  </button>
  
</div>

{/* ----------------------------------------------------------------------- */}
<div className='cloud-contener'>
<div className='fir' >
        <button  className='btnimg3' onClick={handleNavigation} >
        <img src={cloudOrder} alt="Navigate" className='clod1' />
       </button>
      <button  className='btnimg3' onClick={handleNavigation2} >
        <img src={cloudMake} alt="Navigate" className='clod2' />
  </button>
      </div>
      <div className='sec'>
   <button  className='btnimg3' onClick={handleNavigation3} >
        <img src={cloudVisit} alt="Navigate" className='clod3' />
        
      </button>
      </div> 
      </div>
      {/*------------------------------------------------------------------------------------------------------ */}
      <div className='makeOrder' id='makeOrder'>
      
        
      <Searsh/>        
      
      </div>
        {/*------------------------------------------------------------------------------------------------------ */}
        <div className='makeReservation' id='makeReservation'>
        <h3 className="titlelocation">
            Make Your Reservation
        </h3>
        <form onSubmit={handleReservation}>
        <input
          type="text"
      placeholder='your full name'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={useremail}
          onChange={(e) => setUseremail(e.target.value)}
        />
        <div>
          <input 
        type="text"
        value={phonenum}
         placeholder="Inter Your Phone Number"
        onChange={handleChange} />
              {error && <p style={{ color: 'rgb(202, 7, 124)', fontSize: '1.2em' }}>{error}</p>}
    </div>
     <input
          type="number"
          placeholder="Number of chairs"
          value={numchairs}
          onChange={(e) => setnumchairs(e.target.value)}
        />
   
            <input
          type="datetime-local"
      
          value={date_time}
          onChange={(e) => setdate_time(e.target.value)}
        />
   

   

        <button className="login-btn" type='submit'>Reserve Now</button>
        </form>
        <div className='call_contener'>
          <a href="tel:+963997903374" className="links">   <ImPhone className='ic' /> Call Us</a>
        
    </div>
      </div>
      

      <section className='visit-us' id='visit-us'>
        <h3 className="titlelocation">
            Our Location <PiMapPinLineBold />
        </h3>
        <iframe src="https://maps.app.goo.gl/JUdTzWzN6wEzxopr7?g_st=atm"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>

      <div className='spaceunder' >
       <p>hidden paragraf<br />to make a space under the cards <br /></p>
      
           </div>
     
    
      <Navbar/>
    
    </div>
     );
    }
  
   