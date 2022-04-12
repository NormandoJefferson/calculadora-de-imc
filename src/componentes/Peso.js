import './Calculadora.css';

function Peso(props) {
    return(
        <div>
          <label>
            Peso   
            <input type="text" value={props.p} onChange={(e)=>{props.sp(e.target.value)}} id='btb'/>
          </label>
        </div>
      );
}

export default Peso;
