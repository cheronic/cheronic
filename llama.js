function llama(){
  let width = window.innerWidth-20;
  let height = window.innerHeight-20;
  console.log(width, height);
let x = document.getElementById('test');
x.setAttribute("width", width);
x.setAttribute("height", height);

let fill = Math.round(width / 100);
console.log(fill);

for (i=0;i<fill;i++){
let a = 0;
let dirt = new Image(298, 94);
dirt.src = "Dirt.jpg";
dirt.style.position="relative";
dirt.style.left = a + "px";
dirt.style.bottom = 0 + "px";
document.body.appendChild(dirt);
a+=298;
}
     }
