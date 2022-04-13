
function Resultado(props) {
  
  const tipo=()=> {
    let x = Number(props.r).toFixed(2);
    if(parseFloat(x) === 0) {
      return "";
    }else if(x < 18.5) {
      return "Abaixo do peso";
    }else if(x >= 18.5 && x <= 24.99 ) {
      return "Peso Normal";
    }else if(x >= 25 && x <= 29.99) {
      return "Sobrepeso";
    }else if(x >= 30 && x <= 34.99) {
      return "Obesidade grau I";
    }else if(x >= 35 && x <= 39.99) {
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
