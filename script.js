function togglemode(){
const html = document.documentElement
html.classList.toggle("light")
/*if(html.classList.contains("light")){
html.classList.remove("light")
else {
    html.classList.add("light")
    
    */
/* PEGA TAG IMG */
    const img=document.querySelector("#profile img")
/*SE TIVER LIGHT substitui A IMG LIGHT*/
if(html.classList.contains("light")) {
    img.setAttribute("src", "./avatar-light.png")}

    /*SE TIVER SEM LIGHT MANTEM A IMG*/
else{
    img.setAttribute("src","./avatar.png")
}
}