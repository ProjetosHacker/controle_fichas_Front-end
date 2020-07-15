const codLocalInput = document.getElementsByName('CODLOCAL')[0];
const numEstanteInput = document.getElementsByName('NUMESTANTE')[0];
const numPrateleiraInput = document.getElementsByName('NUMPRATELEIRA')[0];


var codLocal = localStorage.getItem('cod_Local_Estante');


var request = new XMLHttpRequest()
// var ficha_id = localStorage.getItem('numero_ficha');
request.open('GET', 'http://localhost:3000/estantes/' + codLocal, true)

request.onload = function() { 
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(element => {
      codLocalInput.setAttribute('value',element.CODLOCAL);
      numEstanteInput.setAttribute('value', element.NUMESTANTE);
      numPrateleiraInput.setAttribute('value', element.NUMPRATELEIRA);
    });
   }
  }
  request.send();

const form = document.getElementById('Editar_ficha');

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
let response = await fetch('http://localhost:3000/alterar/estante/' + codLocal, {
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
  alert("Estante Alterada com sucesso !");
  window.location = 'estantes.html'
}
