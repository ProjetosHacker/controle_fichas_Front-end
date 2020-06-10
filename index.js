var request = new XMLHttpRequest()

request.open('GET', 'http://localhost:3000/', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    console.log(data)
    const header = document.createElement('header');
    header.setAttribute('class','display-2');
    header.innerHTML = data.message
    const root = document.getElementById('initial-message-index');
    const fichasLink = document.createElement('a');
    fichasLink.innerText = 'Lista de Fichas ';
    fichasLink.href = '/fichas.html'   
    root.appendChild(header);
    root.appendChild(fichasLink);

  } else {
    console.log('error')
  }
}

request.send()