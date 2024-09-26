import { useState, useEffect } from "react"
import photo1 from './imgs/restaurant.jpg'
import photo2 from './imgs/restaurant chef B.jpg'
export default function BookingForm(){

    const [date, setdate]= useState([])
    const [time, settime]= useState("")
    const [guest, setguest]= useState("")
    const [occasion, setoccasion]= useState("")
    const [availableTimes,setavailableTimes]=useState([])
    
  
      // useEffect(() => { 
      //   fetch("https://raw.githubusercontent.com/courseraap/capstone/main/api.js") 
      //     .then((response) => response.json()) 
      //     .then((data) => setavailableTimes(data.fetchApi)) 
      //     .catch( error => console.log('There was aproblem with the fetch operation:',error)); 
      // }, []); 

      const postData = {
       date: 23445566
      };
      
      // POST request options
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      };
      
      // Make the POST request
      
      useEffect(()=>{
        fetch("https://raw.githubusercontent.com/courseraap/capstone/main/api.js",{requestOptions})
        .then(response => {
          // Check if the request was successful
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // Parse the JSON response
          return response.json();
        })
        .then(data => {
          // Handle the data returned from the server
          console.log('Post request response:', data);
        })
        .catch(error => {
          // Handle any errors that occurred during the fetch
          console.error('There was a problem with the fetch operation:', error);
        });
      },[])


    const clearForm = () => { 
      setdate(""); 
      settime(""); 
      setguest("");  
      setoccasion(""); 
    }; 
    
    const handleSubmit = (e) => { 
      e.preventDefault(); 
      alert("Account created!"); 
      clearForm(); 
    }; 

    return (
    <>
    <section id="bookingpage">
       <div className="slogan">
        <div><h1>Little Lemon</h1>
        <h2 className="chicago">Chicago</h2></div>
        <div><h2>Find a table for any occasion</h2></div>
        
       </div>
       <div className="photos"><img src={photo1} width={150}/><img src={photo2} width={150}/></div>
      <form onSubmit={handleSubmit}>
        <div className="date"><div className="div">
        <label htmlFor="res-date">Date</label>
        <input type="date" id="res-date" placeholder="Date"
               value={date} 
               onChange={e => setdate(e.target.value)}/>
</div>
     <div className="div">   
        <label htmlFor="res-time">Time</label>
        <select id="res-time " placeholder="time"
                value={time}
                onChange={e => settime(e.target.value)}>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
        </select ></div></div>
{/* <select value={availableTimes}>
  {availableTimes.map((date)=>{return(
  <option>{date}</option>
   )})}
</select> */}
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="Number of guests" min="1" max="10" id="guests"
               value={guest}
               onChange={e => setguest(e.target.value)}/>

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion"
                value={occasion}
                onChange={e => setoccasion(e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>

        <button disabled={!(date && time && guest)} onClick={handleSubmit} id="lets">Let's Go</button>
        </form>
        <h1>{date}{time}</h1>
        </section>
        </>
    )
}