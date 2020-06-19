
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

