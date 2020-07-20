const iscpf = (cpf) => {
  cpf = cpf.replace(/[^\d]+/g, '');
  // verificando se tem a quantidade certa de caracter e se não tem todos caracteres iguais
  if(cpf.length !== 11 || /^(\d)\1+$/.test(cpf))
      return false;
  let soma = 0,
      resto;
  for (var i = 1; i <= 9; i++)
      soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
  resto = (soma * 10) % 11;
  if((resto == 10) || (resto == 11))
      resto = 0;
  if(resto != parseInt(cpf.substring(9, 10)) )
      return false;
  soma = 0;
  for(var i = 1; i <= 10; i++)
      soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
  resto = (soma * 10) % 11;
  if((resto == 10) || (resto == 11))
      resto = 0;
  if(resto != parseInt(cpf.substring(10, 11) ) )
      return false;
  return true;
}

var request_estante = new XMLHttpRequest();
let estantes_list = [];
const codLocalSelect = document.getElementsByName('CODLOCAL')[0];
request_estante.open('GET', 'http://localhost:3000/estantes', true);
request_estante.onload = function() {
var data = JSON.parse(this.response);
data.forEach(element => 
  estantes_list.push(element)
  )
  estantes_list.forEach(estante => {
    console.log(estante.codlocal)
    opt = document.createElement("option");
    opt.value = estante.codlocal;
    opt.textContent = `CodLocal: ${estante.codlocal} ||  Estante: ${estante.numestante} || Prateleira: ${estante.numprateleira}`;
    codLocalSelect.appendChild(opt); 
  } )  
}

codLocalSelect.addEventListener('change', function(event) {
 alert(event.target.value);
});

request_estante.send();
const codlocalInput = document.createElement('input');
const sitfichaInput = document.createElement('input');
const codusuempInput = document.createElement('input');
const rootDiv = document.getElementById('root');

// rootDiv.appendChild(codlocalInput);
/* rootDiv.appendChild(sitfichaInput); */
// rootDiv.appendChild(codusuempInput);



const form = document.getElementById('Cadastrar_ficha');
window.onload = function() {  
  $('#date').datepicker({
    isRTL: false,
    language: "pt-BR",
    format: 'dd/mm/yyyy',
    toggleActive: true
});
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

const button_voltar = document.getElementsByName('button_voltar')[0];
button_voltar.addEventListener('click', function() {
  window.location = 'fichas.html';
});

const button_cadastrar = document.getElementsByName('button_cadastrar')[0];
button_cadastrar.addEventListener('click', function() {
  var cpfIsValid = iscpf(document.getElementsByName('CPF')[0].value);
console.log(cpfIsValid);
if( !cpfIsValid) {
 alert('Cpf invalido, o cadastro não foi efetuado !');
}
else {
 alert('Cpf valido, o cadastro  foi efetuado !');
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
  window.location = 'fichas.html'
}
});
