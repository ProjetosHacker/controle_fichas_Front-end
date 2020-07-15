var request = new XMLHttpRequest()
var codLocal = localStorage.getItem('cod_Local_Estante');

const codLocalInput = document.getElementsByName('CODLOCAL')[0];
const numEstanteInput = document.getElementsByName('NUMESTANTE')[0];
const prateleiraInput = document.getElementsByName('NUMPRATELEIRA')[0];


request.open('GET', 'http://localhost:3000/estantes/' + codLocal, true);

request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(element => {
      codLocalInput.setAttribute('value', element.CODLOCAL)    
      numEstanteInput.setAttribute('value',element.NUMESTANTE);
      prateleiraInput.setAttribute('value',element.NUMPRATELEIRA);    
    });
   }
  }
  request.send();
  
  async function voltarTelaInicial(event) {
    event.preventDefault();
    console.log("aqui")
    window.location = 'estantes.html'
  }

    async function apagaDados(event) {
     event.preventDefault();
        
     const confirmation = confirm("Essa operação é irreversível deseja continuar ? ");
    if (confirmation ) { 
    let response = await fetch('http://localhost:3000/delete/estante/' + codLocal, {
        method: 'DELETE',
        });
       
      let result = await response;
      alert("Registro excluído com sucesso !");
     
    } 
    window.location = 'estantes.html'
 }

  const button_delete = document.getElementsByName('button_delete')[0];
  const button_Back = document.getElementsByName('button_voltar')[0];
  button_delete.addEventListener('click', apagaDados);
  button_Back.addEventListener('click', voltarTelaInicial);