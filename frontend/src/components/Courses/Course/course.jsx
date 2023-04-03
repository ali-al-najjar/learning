import { useState } from 'react';
import axios from "axios";

const course = ({course_id, title , description, instructor,duration}) => {

    return(
        <div className='course_card'>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{instructor}</p>
        <p>{duration}</p>
        {/* {showSendButton && (
        <button className="btn send_single_message" onClick={handleSubmit}>Send</button>
        
        )}
        <p className="feedback">{feedback}</p> */}
        </div>
    )
      
}
export default course