import React from 'react'
import './FastFood.css'
import Logo from '../../componante/logo/Logo'
import Navbar from '../../componante/navbar/Navbar'
import Searsh from '../../componante/searsh/Searsh'
import CardNum from '../../componante/Cardnumber/CardNum'
import CardMix from '../../componante/CardMix/CardMix'
import f1 from '../../assets/FastFood/3653556429.jpg'
import f2 from '../../assets/FastFood/burger meet.jpg'
import f3 from '../../assets/FastFood/istockphoto-172449461-612x612.jpg'
import f4 from '../../assets/FastFood/mshoe.jpeg'
import f5 from '../../assets/FastFood/shraeh shiken.jpg'
import f6 from '../../assets/FastFood/potito.jpg'
import f7 from '../../assets/FastFood/prosted.jpg'
import f8 from '../../assets/FastFood/shesh.jpg'
import f9 from '../../assets/FastFood/normalpizza.jpg'
import f10 from '../../assets/FastFood/pizza margreta.jpg'
import f11 from '../../assets/FastFood/pizza.jpg'
import f12 from '../../assets/FastFood/spyce chiken pizza.jpeg'
import f13 from '../../assets/FastFood/shaorma djaj.jpg'
import f14 from '../../assets/FastFood/shaorma lahma.jpg'
import f15 from '../../assets/FastFood/sojok sandwesh.jpg'
import f16 from '../../assets/FastFood/prosted sandwesh.jpg'
import f17 from '../../assets/FastFood/poteto and chees sandwesh.jpg'
import f18 from '../../assets/FastFood/taco.jpg'
import f19 from '../../assets/FastFood/faheta.jpg'
import f20 from '../../assets/FastFood/chees steck.jpg'
export default function FastFood() {
  return (
    <div>
       <div className='allpag3'>
      <Logo/>
      <Navbar/>
       {/* <Searsh/>  */}
         
        
           <div className='FastFood'>
               <div className='d4'>
                 <CardMix image={f1} title={'French Fries With Cheese'} price={3.99}/>
                 <CardMix image={f2} title={'Meat Burger'} price={10}/>
                 <CardMix  image={f3} title={'Chicken Burger'} price={7}/>
                 <CardMix  image={f4} title={'Grilled Chicken '} price={6}/>
                 </div>
                 <div className='d4'>
                < CardMix  image={f5} title={'Crispy'} price={5.99}/>
                 <CardMix  image={f6} title={'French Fries'} price={2}/>
                 <CardMix  image={f7} title={'Fried Chicken Pieces'} price={4}/>
                 <CardMix  image={f8} title={'Shish (Five Sticks)'} price={3}/>
                 </div>
                 <div className='d4'>
                 <CardMix  image={f9} title={'Pizza'} price={6}/>
                 <CardMix image={f10} title={'Pepperoni Pizza'} price={8}/>
                 <CardMix  image={f11} title={'Meat Pizza'} price={12}/>
                 <CardMix  image={f12} title={'Spicy Chicken Pizza'} price={6.99}/>
                 </div>
                 <div className='d4'>
                 <CardMix  image={f13} title={'Chicken Shawarma'} price={2.55}/>
                 <CardMix  image={f14} title={'Meat Shawarma'} price={3}/>
                 <CardMix image={f15} title={'SausageSandwich'} price={3}/>
                 <CardMix image={f16} title={'Crispy Sandwich'} price={4}/>
                 </div>
                 <div className='d4'>
                 <CardMix  image={f17} title={'French Fries With Cheese Sandwich'} price={2.99}/>
                 <CardMix image={f19} title={'Fahita Sandwich'} price={5}/>
                 <CardMix image={f18} title={'Taco'} price={2}/>
                 <CardMix image={f20} title={'Mozzarella Fingers'} price={3}/>
                 </div >
                 <div className='spaceunder' >
             <p>hidden paragraf<br />to make a space under the cards <br /></p>
            
              </div>
         </div>
          </div>
    </div>
  )
}
