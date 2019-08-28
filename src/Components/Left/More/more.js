// Links to resources that helped along the way.
// freecodecamp
// The Coding Train https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw
// Do something with Unity. Hobby stuff!
// "Imagine if this had started with a good mock?"

//credits: 
//Denis Klyuchnikov, RU   - open new window icon
// steve losh ()
// brian atiyeh (https://www.brianatiyeh.com/)
// http://colormind.io/bootstrap/
// https://www.heropatterns.com/

// website things:
// photoship
// react
// barbones?

// Here's the rub:
// I'm not great at visual design. I love working from a mock.
// Or in this case, from other people's designs, credited here.


import React from 'react'
import './more.css'

let More = () => {
   return (
      <div>
         <div className="website_details">
            <div className="website_details_title">
               
            </div>
            <div className="website_details_text">
               <div className="details_head">
                  Thanks for coming by!
               </div> 
               <div className="details_body">
                  Naturally, this website is my demonstration of my abilities. It sports automatic compiling and deployment via Babel and Webpack as packaged with the create-react-app.
               </div>
               <div className="details_technology">
                  React
                  Photoshop
               </div>               
            </div>
         </div>
         <div className="credits">
            Some credits
            <ul>
               <li><span className="redtext"> Denis Klyuchnikov</span> - new window icon</li>
               <li><a href="http://stevelosh.com/">Steve Losh</a> - design inspiration</li>
               <li><a href="https://www.brianatiyeh.com/">Brian Atiyeh</a> - design inspiration</li>
               <li><a href="http://colormind.io/">Colormind</a> - color tools</li>
               <li><a href="https://www.heropatterns.com/">heropatterns.com</a> - SVG textures</li>
            </ul>
         </div>
      </div>
   )
}

export default More