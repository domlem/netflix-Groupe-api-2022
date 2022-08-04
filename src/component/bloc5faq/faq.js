import './faq.css';
// import '../commencer/commencer.css';

function Faq() {
  return (
  <>
  <div className="blocfaq" >
    <p className='marge5'></p>
    <section className="containfaq" >

      <h1>Foire aux questions</h1>

          <div class="panel-default accordion-flush" id="accordionFlushExample">            
              <div class="panel-item">                
                <h2 class="panel-heading" id="flush-headingOne">               
                  <button class="panel-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Netflix, qu'est-ce que c'est&nbsp;? 
                  </button>
                  <p className="positV">V</p>
                </h2>
               {/* <p className='margeFoire'></p> */}
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <p className="rotation">V</p>
                  <div class="accordion-body">Netflix est un service de streaming qui propose une vaste sélection de séries, films, animes,
                   documentaires et autres programmes primés sur des milliers d'appareils connectés à Internet.
                    Regardez tout ce que vous voulez, quand vous voulez, sans publicité et à un tarif mensuel très attractif.
                     Découvrez de nouveaux films et séries chaque semaine, il y en a pour tous les goûts !</div>
                </div>
              </div>

              <div class="panel-item">
                <h2 class="panel-heading" id="flush-headingTwo">
                  <button class="panel-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Combien coûte Netflix&nbsp;? 
                  </button>
                  <p className="positV">V</p>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <p className="rotation">V</p>
                  <div class="accordion-body">Regardez Netflix sur votre smartphone, tablette, Smart TV, ordinateur ou appareil de streaming, le tout pour un tarif mensuel fixe.
                   Les forfaits vont de 8,99 € à 17,99 € par mois. Pas de contrat ni de frais supplémentaires.</div>
                </div>
              </div>

              <div class="panel-item">
                <h2 class="panel-heading" id="flush-headingThree">
                  <button class="panel-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Où puis-je regarder Netflix&nbsp;? 
                  </button>
                  <p className="positV">V</p>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <p className="rotation">V</p>
                  <div class="accordion-body">Netflix, c'est où vous voulez, quand vous voulez. 
                  Connectez-vous à votre compte pour regarder Netflix en ligne sur netflix.com depuis votre ordinateur ou tout appareil connecté à Internet avec l'application Netflix,
                   comme les Smart TV, smartphones, tablettes, lecteurs de streaming et consoles de jeu.
                    Vous pouvez aussi télécharger vos séries préférées avec l'application iOS, Android ou Windows 10. Téléchargez des titres pour les regarder sur votre appareil mobile,
                     même sans connexion Internet. Emportez Netflix partout avec vous.</div>
                </div>
              </div>

                <div class="panel-item">
                  <h2 class="panel-heading" id="flush-headingFour">
                    <button class="panel-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    Comment puis-je annuler mon forfait&nbsp;? 
                    </button>
                    <p className="positV">V</p>
                  </h2>
                  <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                  <p className="rotation">V</p>
                    <div class="accordion-body">Netflix offre une grande souplesse. Pas de contrat compliqué. Sans engagement. Deux clics suffisent pour annuler votre compte en ligne.
                    Pas de frais d'annulation : ouvrez ou fermez votre compte à tout moment.</div>
                  </div> 
                </div>

                  <div class="panel-item">
                    <h2 class="panel-heading" id="flush-headingFive">
                      <button class="panel-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                      Que puis-je regarder sur Netflix&nbsp;? 
                      </button>
                      <p className="positV">V</p>
                    </h2>
                    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                    <p className="rotation">V</p>
                      <div class="accordion-body">Netflix propose un vaste catalogue comprenant notamment des longs métrages, des documentaires, des séries, des animes et des programmes originaux Netflix primés.
                       Regardez Netflix à volonté, quand vous le voulez.</div>
                    </div> 
                  </div>

                      <div class="panel-item">
                        <h2 class="panel-heading" id="flush-headingSix">
                          <button class="panel-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                          Est-ce que Netflix est adapté aux enfants&nbsp;? 
                          </button>
                          <p className="positV">V</p>
                        </h2>
                        <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                        <p className="rotation">V</p>
                          <div class="accordion-body">Netflix Jeunesse est inclus dans votre abonnement et offre un meilleur contrôle aux parents, ainsi qu'un espace dédié aux enfants,
                           avec des films et des séries destinés à toute la famille.
                            Les profils Jeunesse comportent des fonctionnalités de contrôle parental avec code PIN permettant de modifier
                             la catégorie d'âge des contenus que vos enfants peuvent regarder et de bloquer des titres spécifiques.</div>
                        </div> 
                      </div>

            </div>
            <h5>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</h5>
            <div className="contain5">
            <input className="col-4 h-100" type="text" placeholder="Adresse e-mail"  id="email"/> 
            <button className="btn-lg btn-danger" type="submit">Commencer &gt;</button> 
            </div>
     </section>
  </div> 

    {/* debut test section autre */}
    
            
    {/* Fin test section autre */}
  </>
  );
}

export default Faq;
