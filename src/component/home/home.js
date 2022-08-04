// import Navbar from '../navbar/navbar';
import fond from '../../component/pictures/fond_home.jpg';
import icone from '../../component/pictures/logo.png';
import ButtonLogin from '../buttonLogin/buttonLogin.js';
import Commencer from '../commencer/commencer.js';
import Bloc1 from '../../component/bloc1/bloc1.js';
import Bloc2 from '../../component/bloc2/bloc2.js';
import Bloc3 from '../../component/bloc3/bloc3.js';
import Bloc4 from '../../component/bloc4/bloc4.js';
import Faq from '../bloc5faq/faq.js';
import Bloc6 from '../bloc6footer/bloc6.js';
import './home.css';

function Home() {
  return (
<>
 <div className="container-fluid m-0 p-0"> {/* div de toute la page à 100% */}

        <div className='logonet'>
            <img src={icone}
                style={{ width: '50%', height: 'auto' }} /> 
        </div>

        <div> {/* <div className='boutlog'> className='container'*/}
         <ButtonLogin></ButtonLogin>
         </div>

        <div>
        <Commencer></Commencer>
        </div> 


    <div className='fond'>
        {/* <Navbar id={0}/> */}
       <img className="img2" src={fond} /> 
    </div>   
     
     <div> <Bloc1></Bloc1></div>
     <div> <Bloc2></Bloc2></div>
     <div> <Bloc3></Bloc3></div>
     <div> <Bloc4></Bloc4></div>
     <div> <Faq></Faq></div>
     <div> <Bloc6></Bloc6></div> 


   

</div>{/* FIN div de toute la page à 100% */}
</>
  );
}

export default Home

