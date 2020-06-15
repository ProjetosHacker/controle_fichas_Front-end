var request = new XMLHttpRequest()

request.open('GET', 'http://localhost:3000/', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    console.log(data)
    const header = document.createElement('header');
    header.setAttribute('class','display-3');
    header.innerHTML = data.message
    const root = document.getElementById('root');
    const fichasLink = document.createElement('a');
    const prateleirasLink = document.createElement('a');
    fichasLink.innerText = 'Lista de Fichas ';
/*     fichasLink.href = '/fichas.html';
    prateleirasLink.innerText = 'Lista de Prateleiras';
    prateleirasLink.href = '/Prateleira' */
    const row = document.getElementsByClassName('row');
    row[0].appendChild(header)
 /*    row[0].appendChild(fichasLink);
    row[0].appendChild(document.createElement('br'));
    row[0].appendChild(prateleirasLink);
    root.appendChild(row[0]); */
  } else {
    console.log('error')
  }
}

request.send()