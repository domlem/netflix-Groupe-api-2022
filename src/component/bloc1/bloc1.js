import './bloc1.css';
 import tv from '../../component/pictures/tv.png';
import vid1 from '../../component/pictures/video-tv-0819.m4v';

function Bloc1() {
  return (
    <>
<div className="bloccoul" >  
    <p className='marge'></p>
     <section className="container2" > 
    <div className='hauteur'>
            <h1>
            Regardez Netflix sur votre TV.
            </h1>
            <h4>
            Regardez Netflix sur votre Smart TV,
             PlayStation, Xbox, Chromecast, Apple TV, lecteurs Blu-ray et bien plus. 
            </h4>
    </div>
    <div className='hauteur'>
      <img src={tv} className="tv"></img>
          <video src={vid1} className="video1" 
          width="445" height="auto"   type={"video/mp4"} loop="true" autoplay="true"></video>  

    </div>
    </section>
  </div>
    </>
  )
}
export default Bloc1;
