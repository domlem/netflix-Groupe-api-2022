import './buttonLogin.css';
function ButtonLogin() {
    return (
      <>
    <div class="bloccoul2">
            <div class="form-group">
            <select class=" icolang" id="sel1">
            <option>Français</option>
            <option>Anglais</option>
             </select>
             </div>
            <button class="btn btn-danger icologin" type="submit">S'identifier</button>     
        </div>
      </> 
     );    
}
export default ButtonLogin