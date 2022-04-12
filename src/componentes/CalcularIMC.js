import './Calculadora.css';
function CalcularIMC(props) {
    const calc=(p, a,sr)=> {
        props.sr(props.p / (props.a * props.a));
      }
      
      return(
        <div>
          <button onClick={calc} id='bt'>Calcular</button>
        </div>
      );
}

export default CalcularIMC;
