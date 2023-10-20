import React from 'react'
import { Link } from 'react-router-dom'
import courseImg from "../../assets/demo.png"
import Button from './Button';
export const CourseCard = ({course}) => {
  const rupeeSymbol = '\u20B9';
  return (
    <li    className="bg-white  rounded-lg shadow-sm">

    <Link to={`/video/${course._id}`}>

     <img className='rounded-lg' src={course.thumbnailUrl} alt={`Thumbnail for ${course.courseName}`} />
     <div className='p-4'>
     <h2 className="text-2xl font-semibold text-gray-900">{course.courseName}</h2>   
            {/* <p className="text-gray-700">{course.description}</p> */}

  
      <div className='mt-4 flex gap-4'>
      <p className="text-sm flex flex-col"><span>{course.validity}</span> <span className='text-gray-500'>Validity</span>  </p>
      <div className="border-l border-gray-300 h-10"></div>


      <p className="text-sm flex flex-col"><span>{course.validity}</span> <span className='text-gray-500'>Validity</span>  </p>

      </div>
      <div className='flex  justify-between items-center mt-4'>
        <div className='flex  flex-col gap-2'>
        <span className='font-medium text-gray-900'>Special Price:</span>
        <span className='text-bold text-2xl'>{`${rupeeSymbol}${course.price}`}</span>
        </div>
       <Button text={"Explore"}  />
      </div>
     
     </div>
     

           </Link>
         </li>
  )
}
