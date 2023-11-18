function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar img light
    img.setAttribute("src", "./assets/img-light.png")
  } else {
    // se tiver light mode off, manter imagem
    img.setAttribute("src", "./assets/perfil-removebg-preview.png")
  }
}

/*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */
// tudo isso substuido pelo .toggle
