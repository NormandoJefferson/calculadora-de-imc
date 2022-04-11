function Resultado(props) {
    return(
        <div>
          <p>Resultado: {Number(props.r).toFixed(2)}</p>
        </div>
      );
}

export default Resultado;
