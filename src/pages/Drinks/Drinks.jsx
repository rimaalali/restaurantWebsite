import React from 'react'
import './Drinks.css' 
import Navbar from '../../componante/navbar/Navbar'
import Logo from '../../componante/logo/Logo'
import CardNum from '../../componante/Cardnumber/CardNum'
import Searsh from '../../componante/searsh/Searsh'
import r1 from '../../assets/drink/6aa5e9febdb74d40032199d9dba45fc7.jpg'
import r2 from '../../assets/drink/EZmkT5LWkAcTUyF.jpg'
import r3 from '../../assets/drink/78GpIkbEsTCeX.png!w700wp.webp'
import r4 from '../../assets/drink/704371-easy-peach-tea-46a45.jpg'
import r5 from '../../assets/drink/strowperry.jpg'
import r6 from '../../assets/drink/images (4).jpeg'
import r7 from '../../assets/drink/pomegranate-fresh-juice-for-health_10757918.jpg!f305cw.webp'
import r8 from '../../assets/drink/shutterstock_376612666.jpg'
import r9 from '../../assets/drink/cafe-glase.jpg'
import r10 from '../../assets/drink/Screenshot_٢٠٢٥٠٣١٠-٢٢٤٧٢٥_1.jpg'
import r11 from '../../assets/drink/Screenshot_٢٠٢٥٠٣١٠-٢٢٤٧٤٥_1.jpg'
import r12 from '../../assets/drink/افوكلكوكتيل.jpg'
import r13 from '../../assets/drink/Screenshot_٢٠٢٥٠٣١٠-٢٢٤٨٣٧_1.jpg'
import r14 from '../../assets/drink/Screenshot_٢٠٢٥٠٣١٠-٢٢٤٩٠٢_1.jpg'
import r15 from '../../assets/drink/Screenshot_٢٠٢٥٠٣١٠-٢٢٥٠٠٥_1.jpg'
import r16 from '../../assets/drink/Screenshot_٢٠٢٥٠٣١٠-٢٢٥٠١٣_1.jpg'
import r17 from '../../assets/drink/sdCJ8r8LQNEHRxr9minNUbBxtGrVvoQLG2mQ6z37.jpg'
import r18 from '../../assets/drink/Screenshot_٢٠٢٥٠٣١٠-٢٢٤٢٣٨_1.jpg'
import r19 from '../../assets/drink/Screenshot_٢٠٢٥٠٣١١-١٤٢٩٥٦_1.jpg'
import r20 from '../../assets/drink/Screenshot_٢٠٢٥٠٣١١-١٤٣٠٠٥_1.jpg'
import r21 from '../../assets/drink/water milon.jpg'
export default function Drinks() {

  return (
    
    <div className='allpagDrink'>
      <Logo/>
      
     <Navbar/>
     <div className='Arabic-sweet'>
         <div className='d3'>
           <CardNum  image={r1} title={'Berry Cocktail'} price={3}/>
           <CardNum image={r2} title={'Limon Juice with Mint'} price={2.2}/>
           <CardNum  image={r3} title={'Mango Juice'} price={4}/>
           <CardNum  image={r4} title={'Peach Juice'} price={4}/>
           </div>
           <div className='d3'>
          < CardNum  image={r5} title={'Strawberry Cocktail'} price={2.5}/>
           <CardNum  image={r6} title={'Orange Juice'} price={0.99}/>
           <CardNum  image={r7} title={'Pomegranate Juice'} price={2}/>
           <CardNum  image={r8} title={'Orange And Carrot Juice'} price={1.75}/>
           </div>
           <div className='d3'>
           <CardNum  image={r9} title={'Ice Coffee With Milk)'} price={2}/>
           <CardNum image={r10} title={'Special Mix'} price={7.99}/>
           <CardNum  image={r11} title={'Mango Ashate'} price={7.5}/>
           <CardNum  image={r12} title={'Avoca Coktail'} price={7}/>
           </div>
           <div className='d3'>
           <CardNum  image={r13} title={'Chocolate Ashate'} price={7}/>
           <CardNum  image={r14} title={'Avoca Royal'} price={5.3}/>
           <CardNum  image={r15} title={'Kinder With Came Milkshake'} price={4.7}/>
           <CardNum  image={r16} title={'Kinder With Chocolate Milkshake'} price={5}/>
           </div>
           <div className='d3'>
           <CardNum  image={r17} title={'Coffee'} price={1}/>
           <CardNum image={r18} title={'Caramel Mocha Frappe'} price={4}/>
           <CardNum image={r19} title={'Iced Chai Latte'} price={3.5}/>
           <CardNum image={r20} title={'Iced Caramel Waffle Latte'} price={3.7}/>
              </div>
             <div className='d3'>
           <CardNum image={r21} title={'Water Milon'} price={2.7}/>
        
           </div >
           <div className='spaceunder' >
       <p>hidden paragraf<br />to make a space under the cards <br /></p>
      
           </div>
 
    </div>

   
    </div>
  )
}
