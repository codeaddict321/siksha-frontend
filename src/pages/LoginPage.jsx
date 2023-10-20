import { useState } from "react";
import { useNavigate } from "react-router";
import { BrowserRouter as Router, Route, redirect } from "react-router-dom"; 


export default function LoginPage() {
const navigate = useNavigate()
const [error,setError] = useState('')



  async function loginMe({ username, password }) {
    try {
        const res = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Specify that you're sending JSON data
            },
            body: JSON.stringify({ username, password }) // Serialize the data as JSON
        });

        if (res.ok) {
            setError('')
           const {token}= await res.json()
           localStorage.setItem('token',token)
             navigate('/')
           
        } else {
            const {message} = await res.json()
            setError(message)
        }
    } catch (err) {
        console.log(err);
    }
}




  function handleSubmit(e) {
    e.preventDefault()
 const data = new FormData(e.target)
 const values = Object.fromEntries(data.entries())
      loginMe(values)
  }


    return (
     
     
    
       <section className="container">
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-username">
            <label>Username:</label>
            <input type="text" name="username" id="username" placeholder="Username" required/>
            </div>
            <div className="login-password">
            <label>Password:</label>
            <input type="text" name="password" id="password" placeholder="Password" required/>
            </div>
     
        
            <button className="btn login-btn">Login</button>

            
        </form>
       
      
       </section>
     
    
    )
   
}