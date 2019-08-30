import React, { useState } from 'react'
import './photography.css'

import leftArrow from 'Assets/Images/left_arrow.svg'

import placeholder from 'Assets/Images/Photos/placeholder.jpg'

import rain from 'Assets/Images/Photos/rain.jpg'
import lithia from 'Assets/Images/Photos/lithia.jpg'
import bear from 'Assets/Images/Photos/bear.jpg'
import beer from 'Assets/Images/Photos/beer.jpg'
import bean from 'Assets/Images/Photos/bean.jpg'
import cheese from 'Assets/Images/Photos/cheese.jpg'
import green from 'Assets/Images/Photos/green.jpg'
import snow from 'Assets/Images/Photos/snow.jpg'
import ice from 'Assets/Images/Photos/ice.jpg'
import evening from 'Assets/Images/Photos/evening.jpg'
import forest from 'Assets/Images/Photos/forest.jpg'
import mist from 'Assets/Images/Photos/mist.jpg'
import moto from 'Assets/Images/Photos/moto.jpg'
import shells from 'Assets/Images/Photos/shells.jpg'
import spider from 'Assets/Images/Photos/spider.jpg'
import sunset from 'Assets/Images/Photos/sunset.jpg'
import up from 'Assets/Images/Photos/up.jpg'


let photoArray = [ice, beer, rain, lithia,
   spider, green, bean, up, evening, forest, mist, moto, shells, 
     bear, sunset, cheese, snow]

let Photography = () => {
   let [enlargedPhoto, setEnlargedPhoto] = useState(null)
   
   let IndividualPhoto = (props) => {
      let [largeLoaded, setLargeLoaded] = useState(false)

      return (
         <div className="photo_container" onClick={() => props.click() }> 
               <img 
                  className="photo_small"
                  style={largeLoaded ? {display: 'none'} : {} }
                  src={placeholder}
                  alt="thumbnail"
               />
               <img 
                  className="photo_large"
                  style={largeLoaded ? {} : { display: 'none' }}
                  src={props.image}
                  alt="thumbnail"
                  onLoad={ () => setLargeLoaded(true) }
               />
            }
         </div>
      )
   }

   let handleImageClick = (image) => {
      if (enlargedPhoto) {
         setEnlargedPhoto(null)
      }
      else {
         setEnlargedPhoto(image)
      }
   }

   let handlePhotoCarouselClick = (increment) => {
      let photoIndex = photoArray.findIndex( arrPhoto => arrPhoto === enlargedPhoto)
      photoIndex += increment;
      if (photoIndex < 0) {
         photoIndex = photoArray.length-1
      }
      if (photoIndex > photoArray.length-1) {
         photoIndex = 0;
      }
      setEnlargedPhoto(photoArray[photoIndex]);
   }

   return (
      <React.Fragment>
         {/* <div className="photos_head">
            Projects live on sleepy servers. <br></br>
            Please give them time to wake up if you want to visit.
         </div> */}
         <div className="photos_container">
            {enlargedPhoto ? 
               <React.Fragment>
                  <div className="enlarged_photo_container">
                     <div 
                        className="photo_carousel_control_left"
                        onClick={ () => handlePhotoCarouselClick(-1) }
                     >
                        {/* <div>{leftArrow}</div> */}
                     </div>
                     <img 
                        className="enlarged_photo"
                        src={enlargedPhoto} 
                        alt="enlarged" 
                        onClick={ () => handleImageClick() }
                     />
                     <div 
                        className="photo_carousel_control_right"
                        onClick={ () => handlePhotoCarouselClick(1) }
                     >
                        <div style={{transform: "rotate(180deg)"}}>{leftArrow}</div>
                     </div>
                  </div>
                  <div 
                     className="enlarged_photo_background"
                     onClick={ () => handleImageClick() }
                  >
                  </div>
                  <div className="enlarged_photo_container"></div>
               </React.Fragment> 
               :
               null
            }
         
            {photoArray.map( (photo, index) => {
               return <IndividualPhoto 
                  image={photo}
                  click={ () => handleImageClick(photo) }
                  key={index}
               />
            })}
         </div>
      </React.Fragment>
   )
}

export default Photography