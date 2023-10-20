import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
//import { fetchVideo } from "../../firebase";
import Loader from "../../components/Loader";
import { useVideo } from "../../api/apiUtils/coursesUtils";
export default function VideoPage() {
  const navigate = useNavigate();
 
  
   function handleLogout() {
    localStorage.removeItem('token')
    navigate("/")
   }

 const [videoUrl,setVideoUrl] = useState('')
  const { Id } = useParams();
 
 // const token = localStorage.getItem('token'); // Set the token value

 const [isLoading,error,courseInfo] = useVideo(Id)


     
    


  return (
    <section className="container videopage-container">
     
     
      {isLoading ? <Loader />: (
        <>
         <button className="btn logout-btn" onClick={handleLogout}>Log Out</button>
       <div className="videopage-parent">
       
        <div className="videopage-main-sibling">
          
         
        
          
          <div className="videopage-video">
          <video className="video-container" controls >  
  <source src={courseInfo.videoUrl} type="video/mp4" />  
  Your browser does not support the html video tag.  
</video>
          </div>
          <h2 className="videopage-title">{courseInfo.courseName}</h2>
          <p className="videopage-description">{courseInfo.description}</p>
        </div>   </div>
        </>
      ) }
    </section>
  );
}
