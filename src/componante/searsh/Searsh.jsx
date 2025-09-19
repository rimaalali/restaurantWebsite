import React from 'react'
import  { useState } from "react"
import './Searsh.css'
import Cards from '../Cards/Cards';
import CardNum from '../Cardnumber/CardNum';
import CardMix from '../CardMix/CardMix';
export default function Searsh() {
  
  const [search, setSearch] = useState("");

const cake = [
       { title:'Cherry Cake',price:'7'},
         { title:'Chocolate Cake', price:'3'},
         { title:'Banana Cake', price:'3.99'},
        { title:'Vanilla Cake', price:'3'},
          { title:'Lotus Cake', price:'7'},
          {title:'BlueBerry Cake', price:'8'},
          {  title:'Pistachio Cake', price:'10'},
          { title:'Fresh Fruit Cake', price:'15'},
         {  title:'Strawberry Cake', pric:'9'},   
        {  title:'Rinebow Cake', price:'6'},
         {  title:'Caramel Cake', price:'6'},
         {  title:'Pineapple Cake' ,price:'13'},
         {  title:'Apple Cake', price:'7'},
          { title:'Oreo Cake', price:'8'},
         { title:'Tiramisu Cake', price:'14'},
         { title:"Raspberry" ,price:'8'},
      ];
      
const ArabicSweet = [
{image:'y1' ,title:'Asabie Walnut' ,price:'15'},
{image:'y2', title:'Asawer El sit' ,price:'7'},
{image:'y3', title:'Ballorea Walnut', price:'10'},
{image:'y4' ,title:'Arabic Ice Cream', price:'3'},    
{image:'y5', title:'Halawa Aljobn', price:'7'},
{image:"y6", title:'Dolma' ,price:'5'},
{image:'y7', title:'Raha With Kishta', price:'2'},
{image:'y8', title:'Choco Ashu', price:'7'},    
{image:'y9', title:'Sadafa (Media)', price:'4'},
{image:"y10" ,title:'Ashu Albulbul',price:'6'},
{image:'y11', title:'Osmalia With Kishta' ,price:'5'},
{image:'y12', title:'Graebah With Kishta' ,price:'4'},    
{image:'y13', title:'Graebah', price:'4'},
{image:'y14', title:'Kunafa Nuts', price:'6'},
{image:'y15', title:'Mabroma' ,price:'12'},
{image:'y16', title:'Mahallabiya', price:'2'},     
{image:'y17', title:'Madlouka With Kishta', price:'5'},
{image:'y18', title:'Namorah With Kishta', price:'6'},
{image:'y19', title:'Haresah With Pistachio', pric:'9'},
{image:'y20' ,title:'Warbat With Pistachio', price:'8'},
{image:'y21' ,title:'Warbat With Kishta', price:'10'},
];

const Drink =[ {title:'Berry Cocktail' ,price:'3'},
           { title:'Limon Juice with Mint', price:'2.2'},
           {  title:'Mango Juice', price:'4'},
           { title:'Peach Juice' ,price:'4'},
           {title:'Strawberry Cocktail' ,price:'2.5'},
           {title:'Orange Juice' ,price:'0.99'},
         {title:'Pomegranate Juice', price:'2'},
          {title:'Orange And Carrot Juice' ,price:'1.75'},
          {title:'Ice Coffee With Milk)', price:'2'},
           {title:'Special Mix', price:'7.99'},
           { title:'Mango Ashate', price:'7.5'},
           { title:'Avoca Coktail', price:'7'},
           { title:'Chocolate Ashate', price:'7'},
           {  title:'Avoca Royal', price:'5.3'},
            { title:'Kinder With Came Milkshake', price:'4.7'},
           {title:'Kinder With Chocolate Milkshake', price:'5'},
           {title:'Coffee' ,pric:'1'},
            {title:'Caramel Mocha Frappe', price:'4'},
           {title:'Iced Chai Latte', price:'3.5'},
           {title:'Iced Caramel Waffle Latte' , price:'3.7'},
           {title:'Water Milon', price:'2.7'},];
const FastFood=[
 {title:'French Fries With Cheese' ,price:'3.99'},
{title:'Meat Burger', price:'10'},
 {title:'Chicken Burger' ,price:'7'},
  { title:'Grilled Chicken ', price:'6'},
  { title:'Crispy', price:'5.99'},
  { title:'French Fries', price:'2'},
{title:'Fried Chicken Pieces', price:'4'},
{title:'Shish (Five Sticks)', price:'3'},
 {title:'Pizza', price:'6'},
{title:'Pepperoni Pizza', price:'8'},
{title:'Meat Pizza', price:'12'},
{title:'Spicy Chicken Pizza', price:'6.99'},
{title:'Chicken Shawarma', price:'2.55'},
{title:'Meat Shawarma',price:'3'},
{title:'SausageSandwich', price:'3'},
  {title: 'Crispy Sandwich', price:'4'}, 
  { title:'French Fries With Cheese Sandwich', price:'2.99'},
  {title:'Fahita Sandwich', price:'5'},
  {title:'Taco', price:'2'},
{ title:'Mozzarella Fingers', price:'3'}];
  

  const filteredCake = cake.filter((item) => 
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  
  const filteredArabicSweet = ArabicSweet.filter((item) => 
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  const filteredDrink = Drink.filter((item) => 
    item.title.toLowerCase().includes(search.toLowerCase())
  );
    const filteredFastFood = FastFood.filter((item) => 
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
    <div className='big'>
      <input className='inputt'
        type="text"
        placeholder="searsh..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512 " className='heart'>
<path fill="#b4419f" d="M416 0C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 0-112 0-208c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7L80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"/></svg>
<i class="fa-solid fa-utensils"></i>

    </div>
     
    {search && (<div>
        <div className='result'>
          {filteredCake.length > 0 ? (
            filteredCake.map((item) => <Cards  title={item.title} price={item.price}>{Cards}</Cards>)
          ) : (
            <h4>No Result For Cake</h4>
          )}
        </div>
        <div className='result'>
           {filteredArabicSweet.length > 0 ? (
             filteredArabicSweet.map((item) => <CardNum  title={item.title} price={item.price}>{Cards}</CardNum>)
           ) : (
             <h4>No Result For Arabic Sweet</h4>
           )}
         </div>
        <div className='result'>
           {filteredDrink.length > 0 ? (
             filteredDrink.map((item) => <CardNum  title={item.title} price={item.price}>{Cards}</CardNum>)
           ) : (
             <h4>No Result For Drinks</h4>
           )}
         </div>
             <div className='result'>
           {filteredFastFood.length > 0 ? (
             filteredFastFood.map((item) => <CardMix  title={item.title} price={item.price}>{Cards}</CardMix>)
           ) : (
             <h4>No Result For Fast Food</h4>
           )}
         </div>
         </div>
      )}
    </div>
     )
    }
    


