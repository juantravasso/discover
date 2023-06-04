function atualizarHorario() {
    var horarioAtual = new Date();
    var hora = horarioAtual.getHours();
    var minuto = horarioAtual.getMinutes();
    var segundo = horarioAtual.getSeconds();
  
    var horarioFormatado = hora + ":" + minuto;
  
    document.getElementById("horario").textContent = horarioFormatado;
  }
  
  setInterval(atualizarHorario, 1000);
  


let horario = new Date();
let hora = horario.getHours();
let html = document.documentElement;

if( hora > 12 ){
    html.classList.remove('light')
} else {
    html.classList.add('light')
}