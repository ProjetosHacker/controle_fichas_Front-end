var request = new XMLHttpRequest()
var ficha_id = localStorage.getItem('numero_ficha');

const ficha_num = document.getElementsByName('FICHA_NUM')[0];
const matriculaInput = document.getElementsByName('MATRICULA')[0];
const nomeServidorInput = document.getElementsByName('NOMESERVIDOR')[0];
const nomeMaeInput = document.getElementsByName('NOMEMAE')[0];
const dataNascimentoInput = document.getElementsByName('DTNASC')[0];
const cpfServidorInput = document.getElementsByName('CPF')[0];
const estanteInput = document.getElementsByName('ESTANTE')[0];
const prateleiraInput = document.getElementsByName('PRATELEIRA')[0];
const rgInput = document.getElementsByName('RG')[0];
const orgaoExpInput = document.getElementsByName('ORGAOEXP')[0];
const ufInput = document.getElementsByName('UF')[0];
const button_delete = document.getElementsByName('button_delete')[0];
const button_Back = document.getElementsByName('button_voltar')[0];
const body = document.getElementsByTagName('body');

request.open('GET', 'http://localhost:3000/fichas/' + ficha_id, true)

request.onload = function() {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(element => {
    ficha_num.setAttribute('value', element.NUMFICHA)    
    matriculaInput.setAttribute('value',element.MATRICULA);
    nomeServidorInput.setAttribute('value',element.NOMESERVIDOR);
    nomeMaeInput.setAttribute('value',element.NOMEMAE);
    const date = element.DTNASC.split('-');
    const dia = date[2].split('T');
    const mes = date[1];
    const ano = date[0];
    const date_Mysql_format = `${dia[0]}/${mes}/${ano}`;
    dataNascimentoInput.setAttribute('value',date_Mysql_format);
    cpfServidorInput.setAttribute('value',element.CPF);
    $('#cpf').mask('000.000.000-00');
    /* estanteInput.setAttribute('value',element.ESTANTE);
    prateleiraInput.setAttribute('value',element.PRATELEIRA);
    rgInput.setAttribute('value',element.RG);
    orgaoExpInput.setAttribute('value', element.ORGAOEXP);
    ufInput.setAttribute('value', element.UF); */
     
    });
   }
  }
  request.send();

  async function voltarTelaInicial(event) {
    event.preventDefault();
    console.log("aqui")
    window.location = '/fichas.html'
  }

    async function apagaDados(event) {
     event.preventDefault();
        
     const confirmation = confirm("Essa operação é irreversível deseja continuar ? ");
    if (confirmation ) { 
    let response = await fetch('http://localhost:3000/delete/fichas/' + ficha_id, {
        method: 'DELETE',
        });
       
      let result = await response;
      alert("Registro excluído com sucesso !");
     
    } 
    window.location = 'fichas.html'
 }


  button_delete.addEventListener('click', apagaDados);
  button_Back.addEventListener('click', voltarTelaInicial);