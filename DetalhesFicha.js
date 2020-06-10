var request = new XMLHttpRequest()

request.open('GET', 'http://localhost:3000/fichas/4', true)
request.onload = function() {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    const root = document.getElementById('root');
    data.forEach(element => {
        const Num_Ficha = document.createElement('label');
        root.appendChild(document.createElement('label')).innerText=" Numero ficha: ";
        root.appendChild(document.createElement('label')).innerText=  element.NUMFICHA;

        root.appendChild(document.createElement('label')).innerText=" NOME SERVIDOR: ";
        root.appendChild(document.createElement('label')).innerText= element.NOMESERVIDOR;

        root.appendChild(document.createElement('label')).innerText=" Matricula: ";
        root.appendChild(document.createElement('label')).innerText= element.MATRICULA;

        root.appendChild(document.createElement('label')).innerText=" Nome da Mãe: ";
        root.appendChild(document.createElement('label')).innerText= element.NOMEMAE;
  
        root.appendChild(document.createElement('label')).innerText=" Data de Nascimento: ";
        root.appendChild(document.createElement('label')).innerText= element.DTNASC;

        root.appendChild(document.createElement('label')).innerText=" CPF: ";
        root.appendChild(document.createElement('label')).innerText= element.CPF;

        root.appendChild(document.createElement('label')).innerText=" Cod. Local: ";
        root.appendChild(document.createElement('label')).innerText= element.CODLOCAL;

        root.appendChild(document.createElement('label')).innerText=" ESTANTE: ";
        root.appendChild(document.createElement('label')).innerText= element.ESTANTE;

        root.appendChild(document.createElement('label')).innerText=" PRATELEIRA: ";
        root.appendChild(document.createElement('label')).innerText= element.PRATELEIRA;

        root.appendChild(document.createElement('label')).innerText=" RG: ";
        root.appendChild(document.createElement('label')).innerText= element.RG;

        
        root.appendChild(document.createElement('label')).innerText=" ORGAOEXP: ";
        root.appendChild(document.createElement('label')).innerText= element.ORGAOEXP;

        root.appendChild(document.createElement('label')).innerText=" UF: ";
        root.appendChild(document.createElement('label')).innerText= element.UF;

        

    });
   
      
     
    } else {
      console.log('error')
    }
  }
  
  request.send()