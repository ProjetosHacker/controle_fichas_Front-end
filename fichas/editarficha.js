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
    opt = document.createElement("option");
    opt.value = estante.codlocal;
    opt.textContent = `CodLocal: ${estante.codlocal} ||  Estante: ${estante.numestante} || Prateleira: ${estante.numprateleira}`;
    codLocalSelect.appendChild(opt); 
  } )  
}

codLocalSelect.addEventListener('change', function(event) {
});

request_estante.send();

const matriculaInput = document.getElementsByName('MATRICULA')[0];
const nomeServidorInput = document.getElementsByName('NOMESERVIDOR')[0];
const nomeMaeInput = document.getElementsByName('NOMEMAE')[0];
const dataNascimentoInput = document.getElementsByName('DTNASC')[0];
const cpfServidorInput = document.getElementsByName('CPF')[0];
const rgInput = document.getElementsByName('RG')[0];
const orgaoExpInput = document.getElementsByName('ORGAOEXP')[0];
const ufInput = document.getElementsByName('UF')[0];
let clearCPF = 0;


var request = new XMLHttpRequest()
var ficha_id = localStorage.getItem('numero_ficha');
request.open('GET', 'http://localhost:3000/fichas/' + ficha_id, true)

request.onload = function() {
  $('#date').datepicker({
    isRTL: false,
    todayBtn: "linked",
    language: "pt-BR",
    format: 'dd/mm/yyyy',
    toggleActive: true
});
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(element => {
      let selectedComboIndex;
        for(option = 0; option < codLocalSelect.options.length; option ++ ) {
          if(codLocalSelect.options[option].value == element.CODLOCAL) { 
          console.log(codLocalSelect.options[option] + option);
          selectedComboIndex = option;
          }
      }
      
      codLocalSelect.selectedIndex = selectedComboIndex
   /*    codLocalSelect.selectedIndex = element.CODLOCAL;
     console.log(codLocalSelect.options[1].value + " = " +  element.CODLOCAL +  " = " + codLocalSelect.selectedIndex );        
            */
     
    matriculaInput.setAttribute('value',element.MATRICULA);
    nomeServidorInput.setAttribute('value',element.NOMESERVIDOR);
    nomeMaeInput.setAttribute('value',element.NOMEMAE);
    const date = element.DTNASC.split('-');
    const dia = date[2].split('T');
    const mes = date[1];
    const ano = date[0];
    const date_Mysql_format = `${dia[0]}/${mes}/${ano}`;
    dataNascimentoInput.setAttribute('value',date_Mysql_format);
    $('#date').mask('00/00/0000');
    cpfServidorInput.setAttribute('value',element.CPF);
    $('#cpf').mask('000.000.000-00');
    rgInput.setAttribute('value',element.RG);
    orgaoExpInput.setAttribute('value', element.ORGAOEXP);
    console.log(ufInput);
    for (i = 0; i < ufInput.length; i = i + 1) {
      if (ufInput.options[i].value === element.UF) {
        ufInput.selectedIndex = i;
  }     
}
  
 
});
   }
  }
  request.send();

const rootDiv = document.getElementById('root');


const form = document.getElementById('editar_ficha');

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
let response = await fetch('http://localhost:3000/alterar/fichas/' + ficha_id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formData
  });
  
  let result = await response;
  alert(result.message);
}

const button_editar = document.getElementsByName('button_editar')[0];
button_editar.addEventListener('click', function() {
  var cpfIsValid = iscpf(document.getElementsByName('CPF')[0].value);
console.log(cpfIsValid);
if( !cpfIsValid) {
 alert('Cpf invalido, a alteração não foi efetuada !');
}
else {
  alert('Cpf valido, a alteração foi efetuada !');
  var str = cpfServidorInput.value;
  clearCPF = str.replace(/[^\d]+/g,'');
  cpfServidorInput.value = clearCPF; 
  const date = dataNascimentoInput.value.split('/');
  const dia = date[0];
  const mes = date[1];
  const ano = date[2];
  const date_Mysql_format = `${ano}/${mes}/${dia}`;
  dataNascimentoInput.value = date_Mysql_format;
  const formData = urlencodeFormData(new FormData(form));
  enviaDados(formData);
  event.preventDefault();
  window.location = 'fichas.html'
}
});


const button_voltar = document.getElementsByName('button_voltar')[0];
button_voltar.addEventListener('click', function() {
  window.location = 'fichas.html';
});


form.onsubmit = function(event) {
  
}
