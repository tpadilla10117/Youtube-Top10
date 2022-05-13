/* Component for a Hero Carousel: */
import React, {useState, useEffect} from 'react';

function HeroCarousel( { imgData } ) {

/* CAROUSEL LOGIC: */

  //Using the imgData index to matach against the number from currentSlide
  //If there's a match, the DOM elements (slide, buttons), get an 'active' class
  // Else, they get their normal names (**SEE TERNARY IN DOM ELEMENTS**)

  let [ currentSlide, setCurrentSlide ] = useState(0);
  const slideLength = imgData.length;

/* Function to automatically update the carousel after a designated time with setTimeout, a DOM method: */
  /* useEffect( () => {
    const time = setTimeout( () => {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)  
    }, 10000);


    return () => {
      clearTimeout(time);
    }
  }, [currentSlide, slideLength]);
 */


/* Helper Function that allows user to navigate to exact slide in carousel: */
  const exactSlide = (index) => {
    setCurrentSlide(parseInt(index));
  };

  const navigateDots = event => {
    //First need to target correct dot at the array index:
    const arrayValues = event.target.getAttribute('data-key');
    /* console.log('Here are my dots: ', arrayValues); */

    exactSlide(arrayValues);
  }

  return (
    <section className='heroCarousel-parent-container'>
      <div className='heroCarousel-img-slider'>
        {imgData.map( (img, index) => {
          return (
            <div className={index === currentSlide ? 'heroCarousel-slide active' : 'heroCarousel-slide'} key={img.id}>
              <img alt={img.alt} src={img.src} />
              <div className={`heroCarousel-info ${img.id}`}>
              
                <h2 
                  className={`heroCarousel-title 
                  ${img.title}`}
                >
                  {img.title}
                </h2>

                <p 
                  className={`heroCarousel-caption ${img.id}`}
                >
                  {img.caption}
                </p>

              </div>
            </div>
          )
        })}

        <div className='heroCarousel-navigation'>

          {imgData.map( (btn, index) => {
            return (
              <div className={index === currentSlide ? 'heroCarousel-navigation-btn active' : 'heroCarousel-navigation-btn'} key={btn.buttonId} data-key={index} /* onClick={event => activeSlide(event)} */ onClick={navigateDots}></div>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default HeroCarousel;