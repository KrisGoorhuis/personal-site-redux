import React from 'react'
import './me.css'
import testRes from 'Assets/resume.pdf'

let Me = () => {
   return (
      <div className="me_container">
         <div className="me_side_bar"></div>
         <div className="me_head">
            Someone once told me my favorite puzzle game was essentially a 
            programming challenge. 
            <br></br>
            <br></br>
            The instant I finished my first little
            word-reversing script I knew how right they were.
         </div>
         <div className="me_segment">
            I've since been learning by doing, chewing through technologies 
            from Javascript web frameworks to Python machine learning tools to databases
            structuring and querying - even game development with C# and Unity. 
            Sprinkle in some automated testing and a recently concluded web development
            internship, and I’m eager to begin this new career in earnest.
         </div>

         <div className="me_footer">
            Which brings me here. To where you are. Hopefully enjoying the practical half of my resume.<br></br> 
            If you'd like to check out the theory half, &nbsp; 
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