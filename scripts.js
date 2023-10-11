function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
  
    // pegar a tag img
    const img = document.querySelector("#profile img")
  
    // substituir a imagem
    if (html.classList.contains("light")) {
      // se tiver light mode, adicionar a imagem light
      img.setAttribute("src", "./assets/tumblr_7e8093c6e8a2ccf401fe9e2f8c87bc55_9b9cd9d7_1280.jpg")
      img.setAttribute("alt" , "Foto do Gojo de oculos")
    } else {
      // set tiver sem light mode, manter a imagem normal
      img.setAttribute("src", "./assets/channels4_profile.jpg")
      img.setAttribute("alt" , "Gojo bocó")
    }
  }