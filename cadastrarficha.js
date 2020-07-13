
const codlocalInput = document.createElement('input');
const sitfichaInput = document.createElement('input');
const codusuempInput = document.createElement('input');
const rootDiv = document.getElementById('root');

codlocalInput.setAttribute('name','CODLOCAL');
codlocalInput.setAttribute('value','1');
codlocalInput.setAttribute('class','hidden');

sitfichaInput.setAttribute('name','SITFICHA');
sitfichaInput.setAttribute('value','1');
sitfichaInput.setAttribute('class','hidden');

codusuempInput.setAttribute('name','CODUSUEMP');
codusuempInput.setAttribute('value','1');
codusuempInput.setAttribute('class','hidden');


rootDiv.appendChild(codlocalInput);
rootDiv.appendChild(sitfichaInput);
rootDiv.appendChild(codusuempInput);

const form = document.getElementById('Cadastrar_ficha');
window.onload = function() {
  $('#date').mask('00/00/0000');
  $('#cpf').mask('000.000.000-00');
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
let response = await fetch('http://localhost:3000/inserir/ficha', {
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
    var str = document.getElementsByName('CPF')[0].value;
    clearCPF = str.replace(/[^\d]+/g,'');
    document.getElementsByName('CPF')[0].value = clearCPF;
    const date = document.getElementsByName('DTNASC')[0].value.split('/');
    const dia = date[0];
    const mes = date[1];
    const ano = date[2];
    const date_Mysql_format = `${ano}/${mes}/${dia}`;
    document.getElementsByName('DTNASC')[0].value = date_Mysql_format;
    const formData = urlencodeFormData(new FormData(form)); 
  enviaDados(formData);
  event.preventDefault();
  alert("Ficha Cadastrada com sucesso !");
  window.location = '/fichas.html'

}
