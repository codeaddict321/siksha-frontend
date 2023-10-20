import React from 'react'
import {X} from "lucide-react"
function NavLinks({setShowNav}) {
  return (
<>
    {/* x icon */}
 <X onClick={()=>{
    setShowNav(false)
   
}}  size="40" color="black" className="absolute top-4 right-4 hover:cursor-pointer md:hidden"/> 
<li className=""> <a className="text-blue-500 " href="/">Home</a></li>
<li className="nav-item"><a href="#">My Courses</a></li>
<li className="nav-item"><a href="#">About</a></li>

</>
  )
}

export default NavLinks