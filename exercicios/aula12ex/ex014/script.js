function carregar() {
  var body = document.body;
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são <strong>${hora} horas</strong>`;
  if (hora >= 0 && hora < 12) {
    // BOM DIA
    img.src = "imagens/dia.jpg";
    body.style.backgroundColor = "#E2D2B6";
  } else if (hora >= 12 && hora < 18) {
    // BOA TARDE
    img.src = "imagens/tarde.jpg";
    body.style.backgroundColor = "#49314B";
  } else {
    // BOA NOITE
    img.src = "imagens/noite.jpg";
    body.style.backgroundColor = "#0347B2";
  }
}
