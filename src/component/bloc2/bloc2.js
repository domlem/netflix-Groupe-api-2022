import './bloc2.css';
 import strang from '../../component/pictures/mobile-0819.jpg';
import down from '../../component/pictures/download-icon.gif';
import ministrang from '../../component/pictures/boxshot.png';

function Bloc2() {
  return (
    <>
<div className="bloccoul" >  
    <p className='marge'></p>
     <section className="container2" > 
    
    <div className='hauteur'> {/* debut bloc strang*/}
      <img src={strang} className="strang"></img>

      {/*Bloc bas strang*/}
        <div className="hauteur2">
          
          <img src={ministrang} className="down"  width="20%" height="auto"></img>
          <p className="texte">
            <p className="blanc">
                Stranger Things
            </p>
            <p className="bleu">
                Téléchargement en cours...
            </p>
          </p>{/* Fin div texte*/}
          <img src={down} className="down"  width="20%" height="auto"></img> 
          
        </div>{/* Fin div hauteur2*/}
        <div className="bord"> {/*début bordure*/}
        <p> &nbsp;</p>
        </div>{/* Fin div bordure*/}
    </div> {/* Fin bloc strang*/}

    <div className='hauteur index2'>
            <h1>
            Téléchargez vos séries préférées pour les regarder hors connexion.
            </h1>
            <h4>
            Enregistrez vos programmes préférés et ayez toujours quelque chose à regarder. 
            </h4>
    </div>

    </section>
  </div>
    </>
  )
}
export default Bloc2;
