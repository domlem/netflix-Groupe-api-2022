import './commencer.css';
function Commencer() {
    return (
      <>
    <div className="contain3">
            
          <div className="ligne">
              <h1 className="titre">
              Films, séries et bien plus
              </h1>
              <h1>
              en illimité.
              </h1>
              <h4>
              Où que vous soyez. Annulez à tout moment.
              </h4>
              <h5>
              Prêt à regarder Netflix ? Saisissez votre adresse e-mail 
              pour vous abonner ou réactiver votre abonnement.
              </h5>  
              <h4 > &nbsp; </h4>        
          </div>
            <div className="contain4">
            <input className="col-4 h-100" type="text" placeholder="Adresse e-mail"  id="email"/> 
            <button className="btn-lg btn-danger" type="submit">Commencer &gt;</button> 
            </div>
    </div> 
      
      </> 
     );    
}
export default Commencer