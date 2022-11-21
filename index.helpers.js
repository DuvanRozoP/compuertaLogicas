import {
    AND,
    OR,
    XOR,
    NOT,
    NAND,
    NOR
} from './compuertas.logicas.js'

class DomCompuertaLogica {

    constructor(ptA, ptB, ptR, bnt1, btn2, foco, casoR) {
        this.puertoA = document.querySelector(ptA);
        this.puertoB = document.querySelector(ptB);
        this.puertoR = document.querySelector(ptR);

        this.btn1 = document.getElementById(bnt1);
        this.btn2 = document.getElementById(btn2);

        this.foco = document.getElementById(foco);
        this.caso = casoR;
    }

    addEventClick() {
        if(this.btn1 !== null){
            this.btn1.addEventListener('click', () => {
                if (this.btn1.innerHTML === '0') {
                    this.btn1.innerHTML = '1';
                    this.puertoA.innerHTML = '1';
                    resultCompuertaLogica(this.btn1,this.btn2,this.puertoR,this.foco,this.caso);
                    return 1;
                }
    
                if (this.btn1.innerHTML === '1') {
                    this.btn1.innerHTML = '0';
                    this.puertoA.innerHTML = '0';
                    resultCompuertaLogica(this.btn1,this.btn2,this.puertoR,this.foco,this.caso);
                    return 0;
                }
            });
        }
        
        if(this.btn2 !== null){
            this.btn2.addEventListener('click', () => {
                if (this.btn2.innerHTML === '0') {
                    this.btn2.innerHTML = '1';
                    this.puertoB.innerHTML = '1';
                    resultCompuertaLogica(this.btn1,this.btn2,this.puertoR,this.foco,this.caso);
                    return 1;
                }
    
                if (this.btn2.innerHTML === '1') {
                    this.btn2.innerHTML = '0';
                    this.puertoB.innerHTML = '0';
                    resultCompuertaLogica(this.btn1,this.btn2,this.puertoR,this.foco,this.caso);
                    return 0;
                }
            });
        }
        
    }

    
}

function resultCompuertaLogica(interructor1, interructor2, puertoR, foco,caso){
    let a;
    let b;
    if(interructor1 !== null) a = Number(interructor1.innerHTML);
    if(interructor2 !== null) b = Number(interructor2.innerHTML);

    switch (caso) {
        case 'and':
            if( AND(a,b) ){
                foco.style.backgroundColor = 'green';
                puertoR.innerHTML = '1';
            } else {
                foco.style.backgroundColor = 'red';
                puertoR.innerHTML = '0';
            }
            break;

        case 'or':
            if( OR(a,b) ){
                foco.style.backgroundColor = 'green';
                puertoR.innerHTML = '1';
            } else {
                foco.style.backgroundColor = 'red';
                puertoR.innerHTML = '0';
            }
            break;

        case 'xor':
            if( XOR(a,b) ){
                foco.style.backgroundColor = 'green';
                puertoR.innerHTML = '1';
            } else {
                foco.style.backgroundColor = 'red';
                puertoR.innerHTML = '0';
            }
            break;

        case 'not':
            if( NOT(a) ){
                foco.style.backgroundColor = 'green';
                puertoR.innerHTML = '1';
            } else {
                foco.style.backgroundColor = 'red';
                puertoR.innerHTML = '0';
            }
            break;
        
        case 'nand':
            if( NAND(a,b) ){
                foco.style.backgroundColor = 'green';
                puertoR.innerHTML = '1';
            } else {
                foco.style.backgroundColor = 'red';
                puertoR.innerHTML = '0';
            }
            break;

        case 'nor':
            if( NOR(a,b) ){
                foco.style.backgroundColor = 'green';
                puertoR.innerHTML = '1';
            } else {
                foco.style.backgroundColor = 'red';
                puertoR.innerHTML = '0';
            }
            break;

        default:
            console.log('OPCION INVALIDA')
            break;
    }
}


export default DomCompuertaLogica;