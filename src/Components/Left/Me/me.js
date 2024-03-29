import React from 'react'
import './me.css'
import testRes from 'Assets/resume.pdf'

let Me = () => {
   return (
      <div className="me_container">
         <div className="me_top_box">
            <div className="me_head">
               Someone once told me my favorite puzzle game was essentially a 
               programming challenge. 
            </div>              
            <div className="me_placeholder"></div>
            <div className="me_segment">
               The instant I finished my first little word-reversing script I knew how right they were. I've since been learning by doing, chewing through technologies from C#/Unity game dev to Python machine learning before returning home to web development.
               <br></br>
               <br></br>
               Now it's time to begin the career in earnest.
            </div>   
         </div>
         <div className="me_footer">
            If you're enjoying the practical half of my resume and wand to see the theory half, &nbsp; 
            <a 
            href={testRes} 
            target="_blank" 
            rel="noopener noreferrer">
               grab it here
            </a>.
         </div>
      </div>
   ) 
}

export default Me