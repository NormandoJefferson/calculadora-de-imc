import './Calculadora.css';

function Altura(props) {
    return(
        <div>
          <label>
            Altura
             <input type="text" value={props.a} onChange={(e)=>{props.sa(e.target.value)}} id='bta'/>
          </label>
        </div>
      );
}

export default Altura;
