const matriculaInput = document.getElementsByName('MATRICULA')[0];
const nomeServidorInput = document.getElementsByName('NOMESERVIDOR')[0];
const nomeMaeInput = document.getElementsByName('NOMEMAE')[0];
const dataNascimentoInput = document.getElementsByName('DTNASC')[0];
const cpfServidorInput = document.getElementsByName('CPF')[0];
const estanteInput = document.getElementsByName('ESTANTE')[0];
const prateleiraInput = document.getElementsByName('PRATELEIRA')[0];
const rgInput = document.getElementsByName('RG')[0];
const orgaoExpInput = document.getElementsByName('ORGAOEXP')[0];
const ufInput = document.getElementsByName('UF')[0];


var request = new XMLHttpRequest()
var ficha_id = localStorage.getItem('numero_ficha');
request.open('GET', 'http://localhost:3000/fichas/' + ficha_id, true)

request.onload = function() {
 
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(element => {
            
    matriculaInput.setAttribute('value',element.MATRICULA);
    nomeServidorInput.setAttribute('value',element.NOMESERVIDOR);
    nomeMaeInput.setAttribute('value',element.NOMEMAE);    
    dataNascimentoInput.setAttribute('value',element.DTNASC);
    $('#date').mask('00/00/0000');
    cpfServidorInput.setAttribute('value',element.CPF);
    $('#cpf').mask('000.000.000-00');
    estanteInput.setAttribute('value',element.ESTANTE);
    prateleiraInput.setAttribute('value',element.PRATELEIRA);
    rgInput.setAttribute('value',element.RG);
    orgaoExpInput.setAttribute('value', element.ORGAOEXP);
    ufInput.setAttribute('value', element.UF);

     
    });
   }
  }
  request.send();
const codlocalInput = document.createElement('input');
const sitfichaInput = document.createElement('input');
const codusuempInput = document.createElement('input');
const rootDiv = document.getElementById('root');

codlocalInput.setAttribute('name','CODLOCAL');
codlocalInput.setAttribute('value','1');
codlocalInput.setAttribute('class','hidden');

sitfichaInput.setAttribute('name','SITFICHA');
sitfichaInput.setAttribute('value','1');
sitfichaInput.setAttribute('class','hidden');

codusuempInput.setAttribute('name','CODUSUEMP');
codusuempInput.setAttribute('value','1');
codusuempInput.setAttribute('class','hidden');


rootDiv.appendChild(codlocalInput);
rootDiv.appendChild(sitfichaInput);
rootDiv.appendChild(codusuempInput);

const form = document.getElementById('Cadastrar_ficha');

//take a multi-part form data type and transform in x-www-url-form-encode
function urlencodeFormData(fd){
    var s = '';
    function encode(s){ return encodeURIComponent(s).replace(/%20/g,'+'); }
    for(var pair of fd.entries()){
        if(typeof pair[1]=='string'){
            s += (s?'&':'') + encode(pair[0])+'='+encode(pair[1]);
        }
    }
    return s;
}

async function enviaDados(formData) {
let response = await fetch('http://localhost:3000/alterar/fichas/' + ficha_id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formData
  });
  
  let result = await response;
  alert(result.message);
}

form.onsubmit = function(event) {
    const formData = urlencodeFormData(new FormData(form)); 
  enviaDados(formData);
  event.preventDefault();
  window.location = '/fichas.html'
}
