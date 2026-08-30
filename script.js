function toggleMenu(){
  document.getElementById('menu').classList.toggle('open');
}
function sendForm(event){
  event.preventDefault();
  document.getElementById('form-message').textContent =
    'Mensagem preparada! Conecte este formulário ao seu e-mail ou WhatsApp.';
}
