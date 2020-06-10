var request = new XMLHttpRequest()

request.open('GET', 'http://localhost:3000/fichas', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    const table = document.createElement('table');
    table_line = document.createElement('tr');
    table.appendChild(table_line);
    table_line.appendChild(document.createElement('th')).innerHTML='Ficha Num.';
    table_line.appendChild(document.createElement('th')).innerHTML='Num. Estante';
    table_line.appendChild(document.createElement('th')).innerHTML='Num. Prateleira';
    table_line.appendChild(document.createElement('th')).innerHTML='codigo';
    table_line.appendChild(document.createElement('th')).innerHTML='Num. Estante';
    table_line.appendChild(document.createElement('th')).innerHTML='Num. Prateleira';
    table_line.appendChild(document.createElement('th')).innerHTML='codigo';
    table_line.appendChild(document.createElement('th')).innerHTML='Num. Estante';
    table_line.appendChild(document.createElement('th')).innerHTML='Num. Prateleira';
    table_line.appendChild(document.createElement('th')).innerHTML='codigo';
    table_line.appendChild(document.createElement('th')).innerHTML='Num. Estante';
    table_line.appendChild(document.createElement('th')).innerHTML='Num. Prateleira';
    table_line.appendChild(document.createElement('th')).innerHTML='Num. Estante';
    table_line.appendChild(document.createElement('th')).innerHTML='Num. Prateleira';
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
         table_Data13 = document.createElement('td');
         table_Data14 = document.createElement('td');

         table_Data.innerHTML = element.NUMFICHA;
         table_Data2.innerHTML = element.NUMESTANTE;
         table_Data3.innerHTML = element.NUMPRATELEIRA;
         table_Data4.innerHTML = element.NUMESTANTE;
         table_Data5.innerHTML = element.NUMPRATELEIRA;
         table_Data6.innerHTML = element.NUMESTANTE;
         table_Data7.innerHTML = element.NUMPRATELEIRA;
         table_Data8.innerHTML = element.NUMESTANTE;
         table_Data9.innerHTML = element.NUMPRATELEIRA;
         table_Data10.innerHTML = element.NUMESTANTE;
         table_Data11.innerHTML = element.NUMPRATELEIRA;
         table_Data12.innerHTML = element.NUMESTANTE;
         table_Data13.innerHTML = element.NUMPRATELEIRA;
         table_Data13.innerHTML = element.NUMPRATELEIRA;

         
         table_lineBody.appendChild(table_Data)
         table_lineBody.appendChild(table_Data2);
         table_lineBody.appendChild(table_Data3);
         table.appendChild(table_lineBody)
      
       
     });
     document.getElementById('root').appendChild(table);
    } else {
      console.log('error')
    }
  }
  
  request.send()