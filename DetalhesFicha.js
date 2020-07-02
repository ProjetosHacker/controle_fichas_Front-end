/* const ficha = require('./fichas')
console.log(ficha.id_ficha); */
var request = new XMLHttpRequest()
var ficha_id = localStorage.getItem('numero_ficha');
request.open('GET', 'http://localhost:3000/fichas/' + ficha_id, true)
request.onload = function() {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    console.log(data);
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

        root.appendChild(document.createElement('label')).innerText=" Data de Nascimento: ";
        root.appendChild(document.createElement('label')).innerHTML= '&nbsp;&nbsp;' + element.DTNASC;
        root.appendChild(document.createElement('br'))

        root.appendChild(document.createElement('label')).innerText=" CPF: ";
        root.appendChild(document.createElement('label')).innerHTML= '&nbsp;&nbsp;' +element.CPF;
        root.appendChild(document.createElement('br'))

        root.appendChild(document.createElement('label')).innerText=" Cod. Local: ";
        root.appendChild(document.createElement('label')).innerHTML= '&nbsp;&nbsp;' + element.CODLOCAL;
        root.appendChild(document.createElement('br'))

        root.appendChild(document.createElement('label')).innerText=" ESTANTE: ";
        root.appendChild(document.createElement('label')).innerHTML= '&nbsp;&nbsp;' + element.ESTANTE;
        root.appendChild(document.createElement('br'))

        root.appendChild(document.createElement('label')).innerText=" PRATELEIRA: ";
        root.appendChild(document.createElement('label')).innerHTML= '&nbsp;&nbsp;' +element.PRATELEIRA;
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