const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let data = {
    nome,
    email,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('content')

  let carregando = `<p>Loading...</p>`
  let pronto = `<p>Sent!</p>`

  content.innerHTML = carregando


  setTimeout(() => {
    content.innerHTML = pronto
  }, 2000)

});