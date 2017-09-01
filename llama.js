function llama(){
  let width = window.innerWidth-20;
  let height = window.innerHeight-20;
  console.log(width, height);
let x = document.getElementById('test');
x.setAttribute("width", width);
x.setAttribute("height", height);

let fill = Math.round(width / 298); // How many tiles do we need to fill across the screen?
console.log(fill);

for (i=0;i<fill;i++){
let a = 0;
let dirt = new Image(); // Apparently we don't need anything here
dirt.src = "Dirt.jpg";
dirt.style.position="relative";
dirt.style.left = a + "px";
dirt.style.bottom = 0 + "px";
document.body.appendChild(dirt);
a+=298; // Makes sure it tiles by moving the next drawn image by the width of the image
}
     }
