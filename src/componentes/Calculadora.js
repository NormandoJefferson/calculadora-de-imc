import React from 'react';
import { useState } from 'react';
import TabelaIMC from './TabelaIMC';
import Peso from './Peso';
import Altura from './Altura';
import CalcularIMC from './CalcularIMC';
import Resultado from './Resultado';
import './Calculadora.css';

function Calculadora() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);

    return(
        <div className='flexivel'>
            <div className='item'>
                <Peso p={peso} sp={setPeso}/>
                <Altura a={altura} sa={setAltura}/>
                <CalcularIMC p={peso} a={altura} sr={setResultado}/>
                <Resultado r={resultado}/>
                <TabelaIMC/>
            </div>    
        </div>
       
        
         
  );
}

export default Calculadora;
