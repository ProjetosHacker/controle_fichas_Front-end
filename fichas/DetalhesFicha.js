/* const ficha = require('./fichas')
console.log(ficha.id_ficha); */

var request_estante = new XMLHttpRequest();
let estantes_list = [];
// const codLocalSelect = document.getElementsByName('CODLOCAL')[0];
request_estante.open('GET', 'http://localhost:3000/estantes', true);
request_estante.onload = function() {
var data = JSON.parse(this.response);
data.forEach(element => 
  estantes_list.push(element)
  )
}

console.log(estantes_list);
request_estante.send();
var request = new XMLHttpRequest()
var ficha_id = localStorage.getItem('numero_ficha');
request.open('GET', 'http://localhost:3000/fichas/' + ficha_id, true)
request.onload = function() {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    const root = document.getElementById('root');
    data.forEach(element => {
        const Num_Ficha = document.createElement('label');
        root.appendChild(document.createElement('label')).innerText=" Numero ficha:  ";
        root.appendChild(document.createElement('label')).innerHTML= '&nbsp;&nbsp;' +  element.NUMFICHA;

        root.appendChild(document.createElement('br'))

        root.appendChild(document.createElement('label')).innerText=" NOME SERVIDOR: ";
        root.appendChild(document.createElement('label')).innerHTML= '&nbsp;&nbsp;' + element.NOMESERVIDOR;
        root.appendChild(document.createElement('br'))

        root.appendChild(document.createElement('label')).innerText=" Matricula: ";
        root.appendChild(document.createElement('label')).innerHTML= '&nbsp;&nbsp;' +element.MATRICULA;

        root.appendChild(document.createElement('br'))

        root.appendChild(document.createElement('label')).innerText=" Nome da Mãe: ";
        root.appendChild(document.createElement('label')).innerHTML= '&nbsp;&nbsp;' +element.NOMEMAE;
        root.appendChild(document.createElement('br'))
        
        const date = element.DTNASC.split('-');
        const dia = date[2].split('T');
        const mes = date[1];
        const ano = date[0];
        const date_Mysql_format = `${dia[0]}/${mes}/${ano}`;
        root.appendChild(document.createElement('label')).innerText=" Data de Nascimento: ";
        root.appendChild(document.createElement('label')).innerHTML= '&nbsp;&nbsp;' + date_Mysql_format;
        root.appendChild(document.createElement('br'))

        cpf_zeros = [0,0,0,0,0,0,0,0,0,0,0];
        cpf_digitos = element.CPF ? [...element.CPF] : [...cpf_zeros];        
        `${cpf_digitos[0]}${cpf_digitos[1]}${cpf_digitos[2]}
        .${cpf_digitos[3]}${cpf_digitos[4]}${cpf_digitos[5]}.
        ${cpf_digitos[6]}${cpf_digitos[7]}${cpf_digitos[8]}
     -${cpf_digitos[9]}${cpf_digitos[10]}`; 
    const cpfFormatado =  `${cpf_digitos[0]}${cpf_digitos[1]}${cpf_digitos[2]}
     .${cpf_digitos[3]}${cpf_digitos[4]}${cpf_digitos[5]}.
     ${cpf_digitos[6]}${cpf_digitos[7]}${cpf_digitos[8]}
  -${cpf_digitos[9]}${cpf_digitos[10]}`;

        root.appendChild(document.createElement('label')).innerText=" CPF: ";
        root.appendChild(document.createElement('label')).innerHTML= '&nbsp;&nbsp;' + cpfFormatado;
        root.appendChild(document.createElement('br'))

        root.appendChild(document.createElement('label')).innerText=" Cod. Local: ";
        root.appendChild(document.createElement('label')).innerHTML= '&nbsp;&nbsp;' + element.CODLOCAL;
        root.appendChild(document.createElement('br')) 
        const estante_Detail =   estantes_list.filter(estante =>  estante.codlocal === element.CODLOCAL);
        estantes_list.forEach(estantes => console.log(estantes.codlocal === element.CODLOCAL))
        root.appendChild(document.createElement('label')).innerText=" ESTANTE: ";
        root.appendChild(document.createElement('label')).innerHTML= '&nbsp;&nbsp;' + estante_Detail[0].numestante;
        root.appendChild(document.createElement('br'))

        root.appendChild(document.createElement('label')).innerText=" PRATELEIRA: ";
        root.appendChild(document.createElement('label')).innerHTML= '&nbsp;&nbsp;' + estante_Detail[0].numprateleira;
        root.appendChild(document.createElement('br'))

        root.appendChild(document.createElement('label')).innerText=" RG: ";
        root.appendChild(document.createElement('label')).innerHTML= '&nbsp;&nbsp;' + element.RG;
        root.appendChild(document.createElement('br'))
        
        root.appendChild(document.createElement('label')).innerText=" ORGAOEXP: ";
        root.appendChild(document.createElement('label')).innerHTML= '&nbsp;&nbsp;' +element.ORGAOEXP;
        root.appendChild(document.createElement('br'))

        root.appendChild(document.createElement('label')).innerText=" UF: ";
        root.appendChild(document.createElement('label')).innerHTML= '&nbsp;&nbsp;' + element.UF;
        root.appendChild(document.createElement('br'))

        const listFichaLink = document.createElement('a');
        listFichaLink.href = '/fichas.html';
        listFichaLink.textContent = 'Voltar a Lista de fichas';        
        
        const indexLink = document.createElement('a');
        indexLink.href = '/index.html';
        indexLink.textContent = 'Voltar a Tela Inicial';      

        root.appendChild(indexLink);
        root.appendChild(document.createElement('br'));
        root.appendChild(listFichaLink);
        

    });      
     
    } else {
      console.log('error')
    }
  }
  
  request.send()