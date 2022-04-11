function CalcularIMC(props) {
    const calc=(p, a,sr)=> {
        props.sr(props.p / (props.a * props.a));
      }
      
      return(
        <div>
          <button onClick={calc}>Calcular</button>
        </div>
      );
}

export default CalcularIMC;
