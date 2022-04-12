
function Resultado(props) {
  
  const tipo=()=> {
    let x = Number(props.r).toFixed(2);
    if(parseFloat(x) === 0) {
      return "";
    }else if(x < 18.5) {
      return "Abaixo do peso";
    }else if(x >= 18.5 && x <= 24.9 ) {
      return "Peso Normal";
    }else if(x >= 25 && x <= 29.9) {
      return "Sobrepeso";
    }else if(x >= 30 && x <= 34.9) {
      return "Obesidade grau I";
    }else if(x >= 35 && x <= 39.9) {
      return "Obesidade grau II";
    }else if(x >= 40) {
      return "Obesidade Mórbida";
    } 
  }
  
    return(
        <div>
          <p>Resultado: {Number(props.r).toFixed(2)} - {tipo()}</p>
        </div>
      );
}

export default Resultado;
