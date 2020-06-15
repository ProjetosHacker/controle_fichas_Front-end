

var request = new XMLHttpRequest()
// let id_ficha = null;
var globalVariable={
  id_ficha: 'sachin'
    };
request.open('GET', 'http://localhost:3000/fichas', true)
request.onload = function() {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    const root = document.getElementById('root');
    root.removeChild(document.getElementById('loading'))

    const table = document.createElement('table');
    table_line = document.createElement('tr');
    table.appendChild(table_line);
    table_line.appendChild(document.createElement('th')).innerHTML='Ficha Num.';
    table_line.appendChild(document.createElement('th')).innerHTML='Matric. Servidor';
    table_line.appendChild(document.createElement('th')).innerHTML='Nome Servidor';
    table_line.appendChild(document.createElement('th')).innerHTML='Nome Mãe';
    table_line.appendChild(document.createElement('th')).innerHTML='Data Nascimento';
    table_line.appendChild(document.createElement('th')).innerHTML='CPF';
    table_line.appendChild(document.createElement('th')).innerHTML='Cod.LOCAL';
    table_line.appendChild(document.createElement('th')).innerHTML='Estante';
    table_line.appendChild(document.createElement('th')).innerHTML='Prateleira';
    table_line.appendChild(document.createElement('th')).innerHTML='RG';
    table_line.appendChild(document.createElement('th')).innerHTML='Orgão Expedidor';
    table_line.appendChild(document.createElement('th')).innerHTML='UF';
    data.forEach(element => {
         table_lineBody = document.createElement('tr');
         table_Data = document.createElement('td');
         table_Data2 = document.createElement('td');
         table_Data3 = document.createElement('td');
         table_Data4 = document.createElement('td');
         table_Data5 = document.createElement('td');
         table_Data6 = document.createElement('td');
         table_Data7 = document.createElement('td');
         table_Data8 = document.createElement('td');
         table_Data9 = document.createElement('td');
         table_Data10 = document.createElement('td');
         table_Data11 = document.createElement('td');
         table_Data12 = document.createElement('td');
        const link = document.createElement('a');
        link.addEventListener('click', function() {
          id_ficha = element.NUMFICHA; 
          localStorage.setItem('numero_ficha', id_ficha);
        });
        link.href = '/DetalhesFicha.html';
        link.textContent = element.NUMFICHA
 
        table_Data.appendChild(link);
        table_Data2.innerHTML = element.MATRICULA;
         table_Data3.innerHTML = element.NOMESERVIDOR;
         table_Data4.innerHTML = element.NOMEMAE;
         table_Data5.innerHTML = element.DTNASC;
         table_Data6.innerHTML = element.CPF;
         table_Data7.innerHTML = element.CODLOCAL;
         table_Data8.innerHTML = element.ESTANTE;
         table_Data9.innerHTML = element.PRATELEIRA;
         table_Data10.innerHTML = element.RG;
         table_Data11.innerHTML = element.ORGAOEXP;
         table_Data12.innerHTML = element.UF;
         /* table_Data13.innerHTML = element.NUMPRATELEIRA;
         table_Data13.innerHTML = element.NUMPRATELEIRA; */

         
         table_lineBody.appendChild(table_Data)
         table_lineBody.appendChild(table_Data2);
         table_lineBody.appendChild(table_Data3);
         table_lineBody.appendChild(table_Data4);
         table_lineBody.appendChild(table_Data5);
         table_lineBody.appendChild(table_Data6);
         table_lineBody.appendChild(table_Data7);
         table_lineBody.appendChild(table_Data8);
         table_lineBody.appendChild(table_Data9);
         table_lineBody.appendChild(table_Data10);
         table_lineBody.appendChild(table_Data11);
         table_lineBody.appendChild(table_Data12);
         table.appendChild(table_lineBody)
      
       
     });
     document.getElementById('root').appendChild(table);
    } else {
      console.log('error')
    }
  }
  request.send()

/*   module.exports = { 
    id_ficha 
}  */