import { useEffect, useState } from "react";
import axios from "axios";
import './Dashbord.css'
const Dashbord = () => {
  const [reservations, setReservations] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/reservations")
      .then(res => setReservations(res.data))
      .catch(err => console.log(err));

    axios.get("http://localhost:8000/api/orders")
      .then(res => setOrders(res.data))
      .catch(err => console.log(err));
    
  }, []);
  const Deletreserv=async(id)=>
  {const confirm=window.confirm("are sure you want to delet ?")
    if(!confirm)
      return;
   
    try{
     console.log(typeof id);
   await axios.delete(`http://localhost:8000/api/reservations/${id}`);
   alert("deleted successfuly")
      setReservations((x)=>
      x.filter((r)=>{
       
       return r.id!==id;
      
      }));
      
    }
    catch(err){
        if (err.response) {
    console.log('🔥 السيرفر رد بخطأ:', err.response.data);
  } else if (err.request) {
    console.log('🚫 ما وصل الطلب للسيرفر:', err.request);
  } else {
    console.log('❗ في مشكلة بالكود:', err.message);
  } 
  
      alert("something went wrong ,try to delet a gain")
    }
  }
 const Deletorder=async(id)=>
  {const confirm=window.confirm("are sure you want to delet ?")
    if(!confirm)
      return;
   
    try{
     console.log(typeof id);
   await axios.delete(`http://localhost:8000/api/orders/${id}`);
   alert("deleted successfuly")
      setOrders((x)=>
      x.filter((o)=>{
       
       return o.id!==id;
      
      }));
      
    }
    catch(err){
        if (err.response) {
    console.log('🔥 السيرفر رد بخطأ:', err.response.data);
  } else if (err.request) {
    console.log('🚫 ما وصل الطلب للسيرفر:', err.request);
  } else {
    console.log('❗ في مشكلة بالكود:', err.message);
  } 
  
      alert("something went wrong ,try to delet a gain")
    }
  }

  return (
    <div className="dashbord_bg">
      
      <div>
        <h2 >📅 Reservations</h2>
        <table className="table1">
          <thead >
            <tr  >
              <th className="p-2">Full Name</th>
              <th className="p-2">Phone Number</th>
              <th className="p-2">Email</th>
              <th className="p-2">Guests</th>
              <th className="p-2">Reservation Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody >
            {reservations.map((r) => (
              <tr key={r.id}  className="border-t">
                <td className="p-2">{r.full_name}</td>
                <td className="p-2">{r.phonenum}</td>
                <td className="p-2">{r.email || "—"}</td>
                <td className="p-2">{r.guests}</td>
                <td className="p-2">{r.reservation_date}</td>
                <td className="p-2"><button className="del" onClick={()=>{ console.log(r.id);
                  Deletreserv(r.id);}}>Delet Reservation</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2 >🍱Orders</h2>
        <table className="table1">
          <thead>
            <tr className="">
              <th className="p-2">Full Name</th>
              <th className="p-2">Phone Number</th>
              <th className="p-2">Notes</th>
              <th className="p-2">Orders</th>
              <th className="p-2">Full Address</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-t">
                <td className="p-2">{o.full_name}</td>
                <td className="p-2">{o.phone_number}</td>
                <td className="p-2">{o.notes}</td>
                <td className="p-2"><ul>
                 {  JSON.parse(o.cart_items).map((d,id)=>(
                    <li key={id}>{d.title}/({d.price}$*{d.count})/{d.size}</li>
                   ))}
                </ul>
                 
                </td>
                <td className="p-2">{o.full_address}</td>
                 <td className="p-2"><button className="del" onClick={()=>{ 
                  Deletorder(o.id);}}>Delet order</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="back_h"><a href="/">Back Home</a></button>
    </div>
  );
};

export default Dashbord;