import React, {useMemo} from 'react';
import { useInView } from 'react-intersection-observer';

function InfoSection( {ptext, ptext2, ptext3, headingtxt, infoSectionClassName, infoSectionImg, alt, content } ) {


  const insersectionOptions = useMemo( ()=> {
    return {
      threshold: 1,
      root: null, 
      rootMargin: '0px 0px -100px 0px',
      triggerOnce: true
    }
   }, []);
    
    const { ref: paragraph1Ref, inView: isVisible, }= useInView(insersectionOptions);

  const insersectionOptions2 = useMemo( ()=> {
    return {
      threshold: 1,
      root: null, 
      rootMargin: '0px 0px -100px 0px',
      triggerOnce: true
    }
   }, []);
    
    const { ref: paragraph2Ref, inView: isVisible2, }= useInView(insersectionOptions2);

  const insersectionOptions3 = useMemo( ()=> {
    return {
      threshold: 1,
      root: null, 
      rootMargin: '0px 0px -100px 0px',
      triggerOnce: true
    }
   }, []);
    
    const { ref: paragraph3Ref, inView: isVisible3, }= useInView(insersectionOptions3);

  const headingIntersectionOptions = useMemo( ()=> {
    return {
      threshold: 1,
      root: null, 
      rootMargin: '0px 0px -100px 0px',
      triggerOnce: true
    }
   }, []);
    
    const { ref: headingRef, inView: headingIsVisible, }= useInView(headingIntersectionOptions);


  return (
    <section className={infoSectionClassName}>
        <div>
          <h1 ref={headingRef} className={headingIsVisible ? 'infoSection-h1 fadeInUp' : 'infoSection-h1'}>   
            { headingIsVisible ? headingtxt : ''}
          </h1>

          <p ref={paragraph1Ref} className={isVisible ? 'infoSection-p1 fadeInUp active' : 'infoSection-p1'} >
          { isVisible ? ptext : ''}
            {/* {ptext} */}
          </p>
          <br/>
          <p ref={paragraph2Ref} className={isVisible2 ? 'infoSection-p2 fadeInUp active' : 'infoSection-p2'}>
          { isVisible2 ? ptext2 : ''}
            {/* {ptext2} */}
          </p>
          <br/>
          <p ref={paragraph3Ref} className={isVisible3 ? 'infoSection-p3 fadeInUp active' : 'infoSection-p3'}>
          { isVisible3 ? ptext3 : ''}
            {/* {ptext3} */}
          </p>

      {/* TODO: Where I render a CTA contact button: */}
          {content ? content : ''}
          
        </div>

      {/* TODO: add in an image to be on the side */}
        <div className='infoSection-img-parent'>
          <img src={infoSectionImg} alt={alt} className='infoSection-img' />
        </div>

    </section>
  )
}

export default InfoSection;