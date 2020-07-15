
const codlocalInput = document.createElement('input');

const rootDiv = document.getElementById('root');

/* codlocalInput.setAttribute('name','CODLOCAL');
codlocalInput.setAttribute('value','1');
codlocalInput.setAttribute('class','hidden'); */

/* rootDiv.appendChild(codlocalInput); */

const form = document.getElementById('Editar_ficha');
window.onload = function() {
 
}

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
let response = await fetch('http://localhost:3000/inserir/estante', {
    method: 'POST',
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
  alert("Estante Cadastrada com sucesso !");
  window.location = 'estantes.html'

}
