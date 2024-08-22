function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")
//  if(html.classList.contains("light")){
//    html.classList.remove       ("light")}
//  else {html.classList.add("light")}
  
//pegar a Tag img
  const img = document.querySelector("#profile img")

//substituir a imagem
  if(html.classList.contains("light"))
  //se tiver light mode, adicionar a imagem light
{img.setAttribute("src", "./assets/assets/avatar-light.png")} else {
  //se tiver em dark mode, manter a imagem normal
  img.setAttribute("src", "./assets/assets/avatar.png")}
}

  