

var request = new XMLHttpRequest()
// let id_ficha = null;
/*  var globalVariable={
  codLocal: 'sachin'
    };  */
request.open('GET', 'http://localhost:3000/estantes', true)
request.onload = function() {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    const root = document.getElementById('root');
    root.removeChild(document.getElementById('loading'))

    const table = document.createElement('table');
    table.setAttribute('class', 'table')
    table_line = document.createElement('tr');
    table.appendChild(table_line);
    table_line.appendChild(document.createElement('th')).innerHTML='Cod.LOCAL';
    table_line.appendChild(document.createElement('th')).innerHTML='Estante';
    table_line.appendChild(document.createElement('th')).innerHTML='Prateleira';
     data.forEach(element => {
         table_lineBody = document.createElement('tr');
         table_Data = document.createElement('td');
         table_Data2 = document.createElement('td');
         table_Data3 = document.createElement('td');
        const linkFichaDetails = document.createElement('a');
        const linkAlterarFicha = document.createElement('a');
        const buttonDeleteFicha = document.createElement('a');
        buttonDeleteFicha.setAttribute('class','material-icons');
        buttonDeleteFicha.innerHTML = 'delete';

        linkAlterarFicha.setAttribute('class','material-icons');
        linkAlterarFicha.innerHTML = 'edit';
        linkFichaDetails.addEventListener('click', function() {
          codLocal = element.CODLOCAL; 
          localStorage.setItem('cod_Local_Estante', codLocal);
        });
        linkAlterarFicha.addEventListener('click', function() {
          codLocal = element.CODLOCAL; 
          localStorage.setItem('cod_Local_Estante', codLocal);
        });

        buttonDeleteFicha.addEventListener('click', function() {
          codLocal = element.CODLOCAL; 
          localStorage.setItem('cod_Local_Estante', codLocal);
        });
        
        // linkFichaDetails.href = 'DetalhesFicha.html';
        linkAlterarFicha.href = 'editarEstantes.html';
        buttonDeleteFicha.href = 'deleteEstantes.html';
        linkFichaDetails.textContent = element.CODLOCAL
        table_Data.appendChild(linkFichaDetails);
        table_Data.appendChild(linkAlterarFicha);
        table_Data.appendChild(buttonDeleteFicha);

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

/*   module.exports = { 
    id_ficha 
}  */