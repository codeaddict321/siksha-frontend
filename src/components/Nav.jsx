import { useState } from "react"
import {X} from "lucide-react"
import NavLinks from "./NavLinks"
import {MenuSquare} from "lucide-react"
export default function Nav() {
    const [showNav,setShowNav] = useState(false)
   

    return (
        <section className="bg-purple-500" >
        <nav className="flex justify-between items-center max-w-5xl mx-auto w-full px-6 py-2 ">


         <div className="logo w-full">
             Logo
            </div> 
          {showNav &&  <ul className={` flex-col  gap-4 bg-white h-screen flex items-center justify-center absolute w-full top-0 left-0 md:bg-inherit md:static md:flex-row md:h-auto`} ><NavLinks setShowNav={setShowNav} /></ul> }

          {/* bigger screen */}
          <ul className={` flex-col  gap-4 bg-white h-screen hidden md:flex items-center justify-between absolute w-full top-0 left-0 md:bg-inherit md:static md:flex-row md:h-auto `} >
          <NavLinks setShowNav={setShowNav} />
          </ul>
         
           
            <MenuSquare onClick={()=>setShowNav(true)}  size={35} color="white" className="md:hidden" />
        </nav>
        </section>
    )
}