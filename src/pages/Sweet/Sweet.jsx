import React from 'react'
import Navbar from '../../componante/navbar/Navbar'
import './sweet.css'

import Cards from '../../componante/Cards/Cards'
import x1 from '../../assets/cake/1.png'
import x2 from '../../assets/cake/71TPDRPxMDL._AC_UF1000,1000_QL80_.jpg'
import x3 from '../../assets/cake/BananaFosterCake_0004-cb1ce7763fe144f3a11715a5cab1d244.jpg'
import x4 from '../../assets/cake/Best-Vanilla-Cake-Recipe-finished-on-a-cake-stand-1.jpg'
import x5 from '../../assets/cake/Biscoff-cake-02720.jpg'
import x6 from '../../assets/cake/blueberry-cake-10.jpg'
import x7 from '../../assets/cake/Pistachio-Cake-Recipe-A-Delicious-Nutty-Dessert.jpg'
import x8 from '../../assets/cake/fresh-fruit-cake.jpg'
import x9 from '../../assets/cake/img_3202-scaled.jpg'
import x10 from '../../assets/cake/IMG_8132.jpeg'
import x11 from '../../assets/cake/Mary_Berry_Salted_Caramel_Cake-1.jpg'
import x12 from '../../assets/cake/pineapple-WEB-4-819x1024.jpg'
import x13 from '../../assets/cake/sliced-apple-cake-768x1130.jpg'
import x14 from '../../assets/cake/vegan-oreo-cake-11.jpg'
import x15 from '../../assets/cake/tiramisu-cake1-1657209890.jpg'
import x16 from '../../assets/cake/raspberry-pink-velvet-cake-1574437052.jpg'
import y1 from '../../assets/sweet/أصابع بالجوز.jpg'
import y2 from '../../assets/sweet/اساور الست.jpg'
import y3 from '../../assets/sweet/بللورية بالفستق.jpg'
import y4 from '../../assets/sweet/بوظة عربية.jpg'
import y5 from '../../assets/sweet/حلاوة الجبن.jpg'
import y6 from '../../assets/sweet/دولما.jpg'
import y7 from '../../assets/sweet/راحة بالقشطة.jpg'
import y8 from '../../assets/sweet/شوكو عش.jpg'
import y9 from '../../assets/sweet/صدفة(ميديا).jpg'
import y10 from '../../assets/sweet/عش البلبل.jpg'
import y11 from '../../assets/sweet/عصملية بالقشطة.jpg'
import y12 from '../../assets/sweet/غريبة بالقشطة.jpg'
import y13 from '../../assets/sweet/غريبة.jpg'
import y14 from '../../assets/sweet/كنافة بالمكسرات.jpg'
import y15 from '../../assets/sweet/مبرومة.jpg'
import y16 from '../../assets/sweet/محلاية.jpg'
import y17 from '../../assets/sweet/مدلوقة بالقشطة.jpg'
import y18 from '../../assets/sweet/نمورة بالقشطة.jpg'
import y19 from '../../assets/sweet/هريسة بالفستق.jpg'
import y20 from '../../assets/sweet/وربات بالفستق.jpg'
import y21 from '../../assets/sweet/وربات بالقشطة.jpg'
import Logo from '../../componante/logo/Logo'
import CardNum from '../../componante/Cardnumber/CardNum'
import Searsh from '../../componante/searsh/Searsh'

export default function Sweet() {
  return (
    <div className='allpage'>
      <Logo/>
      <Navbar/>
      {/* <Searsh/> */}
      <h2 className='dif1'>Cake</h2>
      <div className='crd'>
        <div className='d1'>
        <Cards image={x1} title={'Cherry Cake'} price={7} />
        <Cards image={x2} title={'Chocolate Cake'} price={3}/>
        <Cards image={x3} title={'Banana Cake'} price={3.99}/>
        <Cards image={x4} title={'Vanilla Cake'} price={3}/>
       </div>
         <div className='d1'>
        <Cards image={x5} title={'Lotus Cake'} price={7}/>
        <Cards image={x6} title={'BlueBerry Cake'} price={8}/>
        <Cards image={x7} title={'Pistachio Cake'} price={10}/>
        <Cards image={x8} title={'Fresh Fruit Cake'} price={15}/>
       </div>
        <div className='d1'>
        <Cards image={x9} title={'Strawberry Cake'} price={9}/>
        <Cards image={x10} title={'Rinebow Cake'} price={6}/>
        <Cards image={x11} title={'Caramel Cake'} price={6}/>
        <Cards image={x12} title={'Pineapple Cake'} price={13}/>
        </div>
         <div className='d1'>
        <Cards image={x13} title={'Apple Cake'} price={7}/>
        <Cards image={x14} title={'Oreo Cake'} price={8}/>
        <Cards image={x15} title={'Tiramisu Cake'} price={14}/>
        <Cards image={x16} title={'Raspberry'} price={8}/>
         </div>
    
<h2 className='dif'>Arabic Sweet</h2>
      <div className='Arabic-sweet'>
        <div className='d2'>
      <CardNum  image={y1} title={'Asabie Walnut'} price={15}/>
      <CardNum image={y2} title={'Asawer El sit'} price={7}/>
      <CardNum  image={y3} title={'Ballorea Walnut'} price={10}/>
      <CardNum  image={y4} title={'Arabic Ice Cream'} price={3}/>
      </div>
     <div className='d2'>
     < CardNum  image={y5} title={'Halawa Aljobn'} price={7}/>
      <CardNum  image={y6} title={'Dolma'} price={5}/>
      <CardNum  image={y7} title={'Raha With Kishta'} price={2}/>
      <CardNum  image={y8} title={'Choco Ashu'} price={7}/>
      </div>
      <div className='d2'>
      <CardNum  image={y9} title={'Sadafa (Media)'} price={4}/>
      <CardNum image={y10} title={'Ashu Albulbul'} price={6}/>
      <CardNum  image={y11} title={'Osmalia With Kishta'} price={5}/>
      <CardNum  image={y12} title={'Graebah With Kishta'} price={4}/>
    </div>
    <div className='d2'>
      <CardNum  image={y13} title={'Graebah'} price={4}/>
      <CardNum  image={y14} title={'Kunafa Nuts'} price={6}/>
      <CardNum  image={y15} title={'Mabroma'} price={12}/>
      <CardNum  image={y16} title={'Mahallabiya'} price={2}/>
      </div>
   <div className='d2'>
      <CardNum  image={y17} title={'Madlouka With Kishta'} price={5}/>
      <CardNum image={y18} title={'Namorah With Kishta'} price={6}/>
      <CardNum image={y19} title={'Haresah With Pistachio'} price={9}/>
      <CardNum image={y20} title={'Warbat With Pistachio'} price={8}/>
       </div>
      <div className='d2'>
      <CardNum image={y21} title={'Warbat With Kishta'} price={10}/>
      </div>
     
      </div>
      </div>
      <div className='spaceunder' >
      <p>hidden paragraf<br />to make a space under the cards <br /></p>
           </div>
      </div>
    
   
      
     
  )
}
