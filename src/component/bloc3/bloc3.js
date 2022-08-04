import './bloc3.css';
 import pc from '../../component/pictures/device-pile.png';
import vidstrang from '../../component/pictures/video-devices.m4v';

function Bloc3() {
  return (
    <>
<div className="bloccoul" >  
    <p className='marge'></p>
     <section className="container2" > 
    <div className='hauteur3'>
            <h1>
            Où que vous soyez.
            </h1>
            <h4>
            Regardez des films et séries en accès illimité sur votre TV, 
            smartphone, tablette et ordinateur, tout compris.
            </h4>
    </div>
    <div className='hauteur3'>
      <img src={pc} className="tv2"></img>
          <video src={vidstrang} className="video2" 
          width="385" height="auto"   type={"video/mp4"} loop="true" autoplay="true"></video>  

    </div>
    </section>
  </div>
    </>
  )
}
export default Bloc3;
