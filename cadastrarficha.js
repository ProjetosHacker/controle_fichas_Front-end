estante_select = document.getElementsByName("ESTANTE")[0];
const estante_data = [];
var request = new XMLHttpRequest()
var ficha_id = localStorage.getItem('numero_ficha');
request.open('GET', 'http://localhost:3000/estantes/' , true)

request.onload = function() {
  let estante_unicas= [];
  const estantes = [];
  var data = JSON.parse(this.response);
  data.forEach(element => {
    estante_data.push(element);
    estantes.push(element.NUMESTANTE)});
    estante_unicas = [...new Set(estantes)];   
   

estante_unicas.forEach(element => {
  opt = document.createElement("option");
  opt.value = element;
  opt.textContent = element;
  estante_select.appendChild(opt);
}); 
}

const prateleira_select = document.getElementsByName("PRATELEIRA")[0];
estante_select.addEventListener('change',function(){ 
localStorage.setItem('estante_selected', this.value)
const estante_selected_id = localStorage.getItem('estante_selected');
const prateleiras_filtradas = estante_data.filter(element =>  element.NUMESTANTE == estante_selected_id );
prateleira_select.innerHTML = "";
prateleiras_filtradas.forEach(optionValue => {
  opt = document.createElement("option");
  opt.value = optionValue.NUMPRATELEIRA;
  opt.textContent = optionValue.NUMPRATELEIRA;
  prateleira_select.appendChild(opt);
  })});


request.send();
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
