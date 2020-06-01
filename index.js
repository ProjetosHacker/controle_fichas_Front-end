var request = new XMLHttpRequest()

request.open('GET', 'http://localhost:3000/', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    console.log(data)
    const header = document.createElement('header');
    header.innerHTML = data.message
    const root = document.getElementById('root');
    root.appendChild(header);
  } else {
    console.log('error')
  }
}

request.send()