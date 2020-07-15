var request = new XMLHttpRequest()

request.open('GET', 'http://localhost:3000/estantes', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
  const table = document.createElement('table');
  table.setAttribute("class", 'table')
  table_line = document.createElement('tr');
  table.appendChild(table_line);
  table_line.appendChild(document.createElement('th')).innerHTML='codigo';
  table_line.appendChild(document.createElement('th')).innerHTML='Num. Estante';
  table_line.appendChild(document.createElement('th')).innerHTML='Num. Prateleira';
   data.forEach(element => {
       table_lineBody = document.createElement('tr');
       table_Data = document.createElement('td');
       table_Data2 = document.createElement('td');
       table_Data3 = document.createElement('td');

       table_Data.innerHTML = element.CODLOCAL;
       table_Data2.innerHTML = element.NUMESTANTE;
       table_Data3.innerHTML = element.NUMPRATELEIRA;
       
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