import { mainAxios } from "./axisoUtils";
import { useQuery } from "react-query";
import axios from "axios";

export function CoursesList() {
  const {isLoading,error,data:courses=[]} = useQuery(['courses', 'list'], async () => {
    try{
        const response = await axios.get('http://localhost:3000');
         
    return response.data;
    } catch(err){
       
        if(err.message==="Network Error"){
         throw err
        }
    }
    
  });



   return [isLoading,error,courses?.courses||[]]

}

export function useVideo(video_id) {

  const  {isLoading,error,data} = useQuery(['courses', 'list','video'], async () => {
    try{
        const response = await axios.get(`http://localhost:3000/video/${video_id}`);
        return response.data?.courseInfo;
      
  
    } catch(err){
       
        if(err.message==="Network Error"){
         throw err
        }
    }
    
  });

  

 
     return [isLoading,error,data]

}
