function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fano = document.getElementById("txtano");
  let res = document.getElementById("res");
  if (fano.value.length == 0 || fano.value > ano) {
    alert("Digite um ano válido!");
  }
  let idade = ano - Number(fano.value);
  let fsex = document.getElementsByName("radsex");
  let genero = "";
  let img = document.createElement("img");
  img.setAttribute("id", "foto");
  if (fsex[0].checked) {
    genero = "Homem";
    if (idade >= 0 && idade < 10) {
      // Criança
      img.setAttribute("src", "menino-criança.jpg");
    } else if (idade < 21) {
      // Jovem
      img.setAttribute("src", "menino-adolescente.jpg");
    } else if (idade < 50) {
      // Adulto
      img.setAttribute("src", "menino-adulto.jpg");
    } else {
      // Idoso
      img.setAttribute("src", "menino-idoso.jpg");
    }
  } else if (fsex[1].checked) {
    genero = "Mulher";
    if (idade >= 0 && idade < 10) {
      // Criança
      img.setAttribute("src", "menina-criança.jpg");
    } else if (idade < 21) {
      // Jovem
      img.setAttribute("src", "menina-adolescente.jpg");
    } else if (idade < 50) {
      // Adulta
      img.setAttribute("src", "menina-adulta.jpg");
    } else {
      // Idosa
      img.setAttribute("src", "menina-idosa.jpg");
    }
  }
  res.style.textAlign = "center";
  res.innerHTML = `Seu gênero é ${genero} e você tem ${idade} anos`;
  res.appendChild(img);
}
