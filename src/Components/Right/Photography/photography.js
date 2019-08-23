import React, { useState } from 'react'
import './photography.css'

import rainSmall from 'Assets/Images/Photos/rain-small.jpg'
import lithiaSmall from 'Assets/Images/Photos/lithia-small.jpg'
import bearSmall from 'Assets/Images/Photos/bear-small.jpg'
import beerSmall from 'Assets/Images/Photos/beer-small.jpg'
import cheeseSmall from 'Assets/Images/Photos/cheese-small.jpg'
import currySmall from 'Assets/Images/Photos/curry-small.jpg'
import greenSmall from 'Assets/Images/Photos/green-small.jpg'
import orangeSmall from 'Assets/Images/Photos/orange-small.jpg'
import porkSmall from 'Assets/Images/Photos/pork-small.jpg'
import snowSmall from 'Assets/Images/Photos/snow-small.jpg'
import iceSmall from 'Assets/Images/Photos/ice-small.jpg'

import rain from 'Assets/Images/Photos/rain.jpg'
import lithia from 'Assets/Images/Photos/lithia.jpg'
import bear from 'Assets/Images/Photos/bear.jpg'
import beer from 'Assets/Images/Photos/beer.jpg'
import cheese from 'Assets/Images/Photos/cheese.jpg'
import curry from 'Assets/Images/Photos/curry.jpg'
import green from 'Assets/Images/Photos/green.jpg'
import orange from 'Assets/Images/Photos/orange.jpg'
import pork from 'Assets/Images/Photos/pork.jpg'
import snow from 'Assets/Images/Photos/snow.jpg'
import ice from 'Assets/Images/Photos/ice.jpg'

let photoArray = [ice, beer, rain, lithia, cheese,
    bear, orange, green, curry, pork, snow]

let Photography = () => {
   let [enlargedPhoto, setEnlargedPhoto] = useState(null)
   let [largeLoaded, setLargeLoaded] = useState(false)

   let IndividualPhoto = (props) => {

      return (
         <div className="photo_container" onClick={() => props.click() }> 
               <img 
                  className="photo_small"
                  style={largeLoaded ? {display: 'none'} : {} }
                  src={props.imageSmall}
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
         <div className="photos_head">
            Projects live on sleepy servers. <br></br>
            Please give them time to wake up if you want to visit.
         </div>
         <div className="photos_container">
            {enlargedPhoto ? 
               <React.Fragment>
                  <div className="enlarged_photo_container">
                     <div 
                        className="photo_carousel_control_left"
                        onClick={ () => handlePhotoCarouselClick(-1) }
                     >
                        ⮜ 
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
                        ⮞ 
                     </div>
                  </div>
                  <div 
                     className="enlarged_photo_background"
                     onClick={ () => handleImageClick() }
                  >
                  </div>
               </React.Fragment> 
               :
               <React.Fragment></React.Fragment>
            }
         

            <IndividualPhoto 
               image={ice}
               imageSmall={iceSmall} 
               click={ () => handleImageClick(ice) }
            />
            <IndividualPhoto 
               image={beer} 
               imageSmall={beerSmall}
               click={ () => handleImageClick(beer) }
            />
            <IndividualPhoto 
               image={rain} 
               imageSmall={rainSmall} 
               click={ () => handleImageClick(rain) }
            />
            <IndividualPhoto 
               image={lithia} 
               imageSmall={lithiaSmall} 
               click={ () => handleImageClick(lithia) }
            />
            <IndividualPhoto 
               image={cheese} 
               imageSmall={cheeseSmall} 
               click={ () => handleImageClick(cheese) }
            />
            <IndividualPhoto 
               image={bear} 
               imageSmall={bearSmall} 
               click={ () => handleImageClick(bear) }
            />
            <IndividualPhoto 
               image={orange} 
               imageSmall={orangeSmall} 
               click={ () => handleImageClick(orange) }
            />
            <IndividualPhoto 
               image={green} 
               imageSmall={greenSmall}
               click={ () => handleImageClick(green) }
            />
            <IndividualPhoto 
               image={curry} 
               imageSmall={currySmall} 
               click={ () => handleImageClick(curry) }
            />
            <IndividualPhoto 
               image={pork} 
               imageSmall={porkSmall} 
               click={ () => handleImageClick(pork) }
            />
            <IndividualPhoto 
            image={snow} 
            imageSmall={snowSmall} 
            click={ () => handleImageClick(snow) }
            />
         </div>
      </React.Fragment>
   )
}

export default Photography