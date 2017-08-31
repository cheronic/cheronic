function llama(){
  let width = window.innerWidth-20;
  let height = window.innerHeight-20;
  console.log(width, height);
let x = document.getElementById('test');
x.setAttribute("width", width);
x.setAttribute("height", height);
}
