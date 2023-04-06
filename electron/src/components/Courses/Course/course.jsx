import { useState } from 'react';
import axios from "axios";

const course = ({course_id, title , description, instructor,duration}) => {
  // const [feedback, setFeedback] = useState("");

  const token = localStorage.getItem('token');


    return(
        <div className='course_card'>
        <h1>{title}</h1>
        <p>{description}</p>
        <p><b>Instructor:</b> {instructor}</p>
        <p><b>Duration:</b> {duration}</p>
        {
        <button className="btn submit_button">Enroll</button>
        }
        </div>
    )
      
      }
export default course