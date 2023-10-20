import { useState,useEffect, Suspense } from "react";
import { fetchImg } from "../../firebase";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import { useQuery } from "react-query";
import { XCircle } from 'lucide-react';
import { CoursesList } from "../../api/apiUtils/coursesUtils";
import { CourseCard } from "../../components/ui/CourseCard";
export default function Home() {
 
  
    const [courseFilter,setCourseFilter] = useState('all')
    const [imageURLs, setImageURLs] = useState([]);
  
    function handleSelectChange(event) {
      const selectedValue = event.target.value;
      setCourseFilter(selectedValue)
      // You can store the selected value in the component's state or perform any other actions here.
    }
    
   const [isLoading,error,courses] = CoursesList()

if(error?.message ==="Network Error"){
  return <p className="grid items-center justify-center min-h-[80vh]"> <span className=" shadow-sm flex justify-center items-center gap-1 bg-white p-4 rounded-xl"><XCircle color="red" /> Check Your Internet Connection</span></p>
}

    return (
     
        <section className="mx-auto w-full max-w-5xl p-6" onChange={handleSelectChange}>
      

        {isLoading ?<Loader />: <><select name="home-course-filter" id="">
       <option value="all">All</option>
       <option value="paid">Paid</option>
       <option value="free">Free</option>
      </select> <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course,index) => (
         
        <CourseCard key={index} course={course}  />
          
         

          ))}
        </ul> </>}
       
        </section>
    )
  
}