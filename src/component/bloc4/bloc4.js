import './bloc4.css';
 import jeune from '../../component/pictures/Jeunesse.png';

function Bloc4() {
  return (
    <>
<div className="bloccoul" >  
    <p className='marge'></p>
     <section className="container2" > 
    
        <div className='hauteur'> 
          <img src={jeune} className="jeune"></img>  
        </div>  

        <div className='hauteur index2'>
                <h1>
                Créez des profils pour les enfants.
                </h1>
                <h4>
                Les enfants découvrent de nouvelles aventures et retrouvent leurs personnages préférés dans un espace bien à eux, 
                déjà inclus dans votre abonnement.
                </h4>
        </div>

    </section>
  </div>
    </>
  )
}
export default Bloc4;
