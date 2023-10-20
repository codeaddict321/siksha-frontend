import { useEffect,useState } from "react"
import { useParams } from "react-router"
import {fetchImg} from "../firebase"
import { useNavigate } from "react-router"
import Loader from "../components/Loader"

export default function BuyCourse() {
  const navigate = useNavigate()
    const [courseInfo,setCourseInfo] = useState([])
    const [courseImg,setCourseImg] = useState('')
   
    const token = localStorage.getItem('token')
    const {id} = useParams()

 async function handleBuy(courseId) {
      
    try{
        const res = await fetch('http://localhost:3000/buycourse', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
                  
                // Specify that you're sending JSON data
            },
            body: JSON.stringify({ courseId,link:id}) // Serialize the data as JSON
        });
        const data = await res.json()
        if(res.ok){
   
          navigate(`/video/${data.link}`)
        }
        console.log(data);
      
    } catch(err){
        console.log(err);
    }
  }
   useEffect(() => {

   async function fetchCourse() {
         try{
            const res = await fetch(`http://localhost:3000/buycourse/${id}`, {
                method: "GET",
                headers: { 'Authorization': `Bearer ${token}` },
              });
            const data = await res.json()
            setCourseInfo([data])
         } catch(err){
            console.log(err);
         }
    }
      fetchCourse()
   }, [])
  
   useEffect(() => {
   
    async function getImg() {
        const Url = await fetchImg(courseInfo[0].thumbnailRef)
        setCourseImg(Url)

     }
     if(courseInfo.length > 0){
        getImg()
     }
    
   }, [courseInfo])
 
     return (
       <section>
        {courseInfo.length > 0 ? <div>
            <div className="course-img">
   {courseImg && <img src={courseImg} alt={courseImg} />}
           </div>
            <h2>{courseInfo[0].courseName}</h2>
              <button onClick={()=>handleBuy(courseInfo[0].courseId)}>Buy Course</button>
        </div>:<Loader />}
       </section>
     )
}